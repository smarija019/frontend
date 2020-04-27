import { DataService } from './../shared/data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  userDetails;
  isAdmin;
  isLoggedIn;

  constructor(
    private router: Router,
    private service: AuthService,
    private data: DataService
  ) {}

  ngOnInit(): void {

  //  if(this.service.getRole() == 'admin')
  //   {
  //      this.isAdmin = true;
  //   }
    this.data.checkRoleCurrent.subscribe((isAdmin) => (this.isAdmin = isAdmin));
    this.data.loggedUserCurrent.subscribe((isLoggedIn) => (this.isLoggedIn = isLoggedIn));
  }

  logout() {
    localStorage.removeItem('token');
    this.data.checkRole(false);
    this.data.isLoggedIn(false);
    this.router.navigateByUrl('/login');
  }
}
