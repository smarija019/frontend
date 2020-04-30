import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}
  register(user) {
    this.http
      .post<any>('https://localhost:44358/api/account/register', user)
      .subscribe(
        (result) => {
          if (result) {
            this.router.navigateByUrl('/users');
          }
        },
        (error) => {
          console.log(error.error[0].description);
        }
      );
  }

  login(user) {
    return this.http.post('https://localhost:44358/api/account/login', user);
  }
  getUserProfile() {
    return this.http.get('https://localhost:44358/api/userprofile');
  }

  getRole() {
    if (localStorage.getItem('token') != null) {
      return JSON.parse(
        window.atob(localStorage.getItem('token').split('.')[1])
      ).role;
    }
  }

  roleMatch(allowedRoles): boolean {
    var isMatch = false;
    var userRole = this.getRole();
    allowedRoles.forEach((element) => {
      if (userRole == element) {
        isMatch = true;
        return false;
      }
    });
    return isMatch;
  }
}
