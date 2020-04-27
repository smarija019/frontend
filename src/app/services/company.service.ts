import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { tap, concatMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  serviceRes = null;

  constructor(private http: HttpClient) {}

  getCompanies() {
    return this.http.get('https://localhost:44358/api/company');
  }

  postCompany(company) {
    return this.http.post('https://localhost:44358/api/company', company).pipe(
      tap((res) => console.log('First result', res)),
      concatMap((res) => this.http.get('https://localhost:44358/api/company')),
      tap((res) => {
        this.serviceRes = res;
        console.log(this.serviceRes);
        console.log(res);
      })
    );
  }

  deleteCompany(id) {
    return this.http.delete('https://localhost:44358/api/company/' + id).pipe(
      tap((res) => console.log('First result', res)),
      concatMap((res) => this.http.get('https://localhost:44358/api/company')),
      tap((res) => {
        this.serviceRes = res;
        console.log(this.serviceRes);
        console.log(res);
      })
    );
  }

  putCompany(id, company) {
    return this.http
      .put('https://localhost:44358/api/company/' + id, company)
      .pipe(
        tap((res) => console.log('First result', res)),
        concatMap((res) =>
          this.http.get('https://localhost:44358/api/company')
        ),
        tap((res) => {
          this.serviceRes = res;
          console.log(this.serviceRes);
          console.log(res);
        })
      );
  }
}
