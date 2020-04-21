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
  ) {
    //   this.registrationForm= fb.group({
    //     this.user.fname: ['', Validators.required],
    //     lname: ['', Validators.required],
    //     role: ['', Validators.required],
    //     username: ['', Validators.required],
    //     password: ['', Validators.required]
    // })
  }
  register() {
    // console.log(this.user.fname);
    // this.user = {
    //   firstname : this.registrationForm.fname,
    //   lastname : this.registrationForm.lname,
    //   role : this.registrationForm.role,
    //   username : this.registrationForm.username,
    //   password : this.registrationForm.password

    // }
    this.auth.register(this.UserApp);
  }
  ngOnInit(): void {
    // if (localStorage.getItem('token') == null)
    //   this.router.navigateByUrl('');
    this.service.getUserProfile().subscribe(
      (res) => {},
      (err) => {
        console.log(err);
      }
    );
  }
}
