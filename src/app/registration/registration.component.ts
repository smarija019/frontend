import { Component, OnInit } from '@angular/core';
import { MatFormFieldControl } from '@angular/material/form-field';
import { ApiService } from '../api.service';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {

  registrationForm:any;
  user ={
      id: 0,
      fname: null,
      lname: null,
      role: 0,
      username: null,
      password: null
  }
  test ={}

  constructor(private api: ApiService, private fb: FormBuilder) { 
  //   this.registrationForm= fb.group({
  //     this.user.fname: ['', Validators.required],
  //     lname: ['', Validators.required],
  //     role: ['', Validators.required],
  //     username: ['', Validators.required],
  //     password: ['', Validators.required]
  // })
  }
  register(){
 // console.log(this.user.fname);
  // this.user = {
  //   firstname : this.registrationForm.fname,
  //   lastname : this.registrationForm.lname,
  //   role : this.registrationForm.role,
  //   username : this.registrationForm.username,
  //   password : this.registrationForm.password

  // }
    this.api.postUser(this.user)
  }
  ngOnInit(): void {
  }

}
