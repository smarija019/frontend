import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, concatMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LawyerService {
  serviceRes = null;

  constructor(private http: HttpClient) {}

  getLawyers() {
    return this.http.get('https://localhost:44358/api/lawyer');
  }
  getMyLawyers(id) {
    return this.http.get('https://localhost:44358/api/lawyer/' + id);
  }

  postLawyer(lawyer) {
    return this.http.post('https://localhost:44358/api/lawyer', lawyer).pipe(
      tap((res) => {}),
      concatMap((res) => this.http.get('https://localhost:44358/api/lawyer')),
      tap((res) => {
        this.serviceRes = res;
        console.log(this.serviceRes);
        console.log(res);
      })
    );
  }

  deleteLawyer(id) {
    return this.http.delete('https://localhost:44358/api/lawyer/' + id).pipe(
      tap((res) => console.log('First result', res)),
      concatMap((res) => this.http.get('https://localhost:44358/api/lawyer')),
      tap((res) => {
        this.serviceRes = res;
      })
    );
  }

  putLawyer(id, lawyer) {
    return this.http
      .put('https://localhost:44358/api/lawyer/' + id, lawyer)
      .pipe(
        tap((res) => {}),
        concatMap((res) => this.http.get('https://localhost:44358/api/lawyer')),
        tap((res) => {
          this.serviceRes = res;
        })
      );
  }
}
