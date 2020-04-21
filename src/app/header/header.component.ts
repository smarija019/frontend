import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userDetails
  constructor(private router:Router, private service:AuthService) { }

  ngOnInit(): void {
    
    
  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }

}
