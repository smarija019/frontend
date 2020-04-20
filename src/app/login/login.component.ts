import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginModel={
    Email:null,
    Password: null
  }

  constructor(private auth: AuthService, private fb: FormBuilder, private router: Router) { 

  }


  ngOnInit(): void {
    if(localStorage.getItem('token')){
      this.router.navigateByUrl('/registration');
    }
  }

  login(){

      console.log(this.LoginModel)
      this.auth.login(this.LoginModel).subscribe((res:any) => {
        localStorage.setItem('token', res.token);
        this.router.navigateByUrl('/registration')
      },
      err=>{
        console.log(err);
      }
      );

  }

}
