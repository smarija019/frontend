import { Component, OnInit } from '@angular/core';
import { MatFormFieldControl } from '@angular/material/form-field';
import { ApiService } from '../api.service';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  registrationForm: any;
  UserApp = {
    FirstName: null,
    LastName: null,
    Email: null,
    Password: null,
    Role: null,
  };
  test = {};

  constructor(
    private auth: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private service: AuthService
  ) {}
  register() {
    this.auth.register(this.UserApp);
  }
  ngOnInit(): void {
    this.service.getUserProfile().subscribe(
      (res) => {},
      (err) => {
        console.log(err);
      }
    );
  }
}
