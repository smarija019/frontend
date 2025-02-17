import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, concatMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LawsuitService {
  serviceRes = null;

  constructor(private http: HttpClient) {}

  getLawsuits() {
    return this.http.get('https://localhost:44358/api/lawsuit');
  }

  postLawsuit(lawsuit) {
    return this.http.post('https://localhost:44358/api/lawsuit', lawsuit).pipe(
      tap((res) => {}),
      concatMap((res) => this.http.get('https://localhost:44358/api/lawsuit')),
      tap((res) => {
        this.serviceRes = res;
      })
    );
  }

  deleteLawsuit(id) {
    return this.http.delete('https://localhost:44358/api/lawsuit/' + id).pipe(
      tap((res) => {}),
      concatMap((res) => this.http.get('https://localhost:44358/api/lawsuit')),
      tap((res) => {
        this.serviceRes = res;
      })
    );
  }

  putLawsuit(id, lawsuit) {
    return this.http
      .put('https://localhost:44358/api/lawsuit/' + id, lawsuit)
      .pipe(
        tap((res) => {}),
        concatMap((res) =>
          this.http.get('https://localhost:44358/api/lawsuit')
        ),
        tap((res) => {
          this.serviceRes = res;
        })
      );
  }
}
