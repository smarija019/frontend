import { Injectable } from '@angular/core';
import { tap, concatMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  serviceRes = null;

  constructor(private http: HttpClient) {}

  getContacts() {
    return this.http.get('https://localhost:44358/api/contact');
  }

  postContact(contact) {
    return this.http.post('https://localhost:44358/api/contact', contact).pipe(
      tap((res) => console.log('First result', res)),
      concatMap((res) => this.http.get('https://localhost:44358/api/contact')),
      tap((res) => {
        this.serviceRes = res;
        console.log(this.serviceRes);
        console.log(res);
      })
    );
  }

  deleteContact(id) {
    return this.http.delete('https://localhost:44358/api/contact/' + id).pipe(
      tap((res) => console.log('First result', res)),
      concatMap((res) => this.http.get('https://localhost:44358/api/contact')),
      tap((res) => {
        this.serviceRes = res;
        console.log(this.serviceRes);
        console.log(res);
      })
    );
  }

  putContact(id, contact) {
    return this.http.put('https://localhost:44358/api/contact/' + id, contact).pipe(
      tap((res) => console.log('First result', res)),
      concatMap((res) => this.http.get('https://localhost:44358/api/contact')),
      tap((res) => {
        this.serviceRes = res;
        console.log(this.serviceRes);
        console.log(res);
      })
    );
  }
}
