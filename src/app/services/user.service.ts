import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, concatMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  serviceRes=null;

  constructor(private http: HttpClient) { }
  
  getUsers() {
    return this.http.get('https://localhost:44358/api/account/users');
  }

  postUser(user) {
    return this.http.post('https://localhost:44358/api/registration', user).pipe(
      tap(res => console.log('First result', res)),
      concatMap((res) => this.http.get('https://localhost:44358/api/account/users')),
      tap(res => {this.serviceRes = res;
        console.log(this.serviceRes);
        console.log(res);})
    )
  }

  deleteUser(id) {
    return this.http.delete('https://localhost:44358/api/account/users/'+id).pipe(
      tap(res => console.log('First result', res)),
      concatMap((res) => this.http.get('https://localhost:44358/api/account/users')),
      tap(res => {this.serviceRes = res;
        console.log(this.serviceRes);
        console.log(res);})
    )
  }

  putUser(id, user) {
   return this.http.put('https://localhost:44358/api/account/'+id, user).pipe(
    tap(res => console.log('First result', res)),
    concatMap((res) => this.http.get('https://localhost:44358/api/account/users')),
    tap(res => {this.serviceRes = res;
      console.log(this.serviceRes);
      console.log(res);})
  )
  }
}
