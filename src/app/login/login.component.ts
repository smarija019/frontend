import { DataService } from './../shared/data.service';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isAdmin;
  LoginModel = {
    Email: null,
    Password: null,
  };

  constructor(
    private auth: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private data: DataService
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem('token') != null) {
      this.router.navigateByUrl('/home');
    }
  }

  login() {
    this.auth.login(this.LoginModel).subscribe(
      (res: any) => {
        localStorage.setItem('token', res.token);
        if (this.auth.getRole() == 'admin') {
          this.data.checkRole(true);
        } else {
          this.data.checkRole(false);
        }
        this.data.isLoggedIn(true);
        this.router.navigateByUrl('/home');
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
