import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  userDetails;
  constructor(private router: Router, private service: AuthService) {}

  ngOnInit(): void {
    if (localStorage.getItem('token') == null) {
      this.router.navigateByUrl('/login');
    } else {
      this.service.getUserProfile().subscribe(
        (res) => {
          this.userDetails = res;
          console.log(this.userDetails.userId +'detalji');
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
}
