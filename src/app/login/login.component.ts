import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // loginForm:any;
  user ={
    id: 0,
    fname: null,
    lname: null,
    role: 0,
    username: null,
    password: null
}

  constructor(private api: ApiService, private fb: FormBuilder) { 


  //   this.loginForm= fb.group({
  //     username: ['', Validators.required],
  //     password: ['', Validators.required]
  // })
  }


  ngOnInit(): void {
  }
  login()
  {
    console.log(this.user)
    this.api.postLogin(this.user)

  }

}
