import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  register(user) {
    this.http
      .post<any>('https://localhost:44358/api/account/register', user)
      .subscribe(
        (result) => {
          if (result) {
            //  this.router.navigate(['/dashboard/home']);
            console.log(result);
            localStorage.setItem('token', result);
          }
        },
        (error) => {
          console.log(error.error[0].description);
        }
      );
  }

  login(user) {
    return this.http.post('https://localhost:44358/api/account/login', user);

    // this.http.post('https://localhost:44358/api/account', user).subscribe(
    //   result => {
    //     if (result) {
    //       //  this.router.navigate(['/dashboard/home']);
    //       console.log(result)
    //     }
    //   },
    //   error => {console.log(error.error[0].description)});
  }
  getUserProfile() {
    // var tokenHeader = new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
    return this.http.get('https://localhost:44358/api/userprofile');
  }

  getRole() {
    return JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
  }

  roleMatch(allowedRoles): boolean {
    var isMatch = false;
    var userRole = this.getRole().role;
    allowedRoles.forEach((element) => {
      if (userRole == element) {
        isMatch = true;
        return false;
      }
    });
    return isMatch;
  }
}
