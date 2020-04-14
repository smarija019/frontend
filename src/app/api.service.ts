import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  postUser(user)
  {
    this.http.post('https://localhost:44358/api/registration', user).subscribe(res => {console.log(res)})
  }
}
