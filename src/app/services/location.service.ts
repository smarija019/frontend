import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { tap, concatMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  types;
  ELEMENT_DATA;
  dataSource;
  userListMatTabDataSource = new MatTableDataSource<any>(this.dataSource);
  serviceRes = null;

  constructor(private http: HttpClient) {}

  getLocations() {
    return this.http.get('https://localhost:44358/api/location');
  }

  postLocation(location) {
    return this.http
      .post('https://localhost:44358/api/location', location)
      .pipe(
        tap((res) => {}),
        concatMap((res) =>
          this.http.get('https://localhost:44358/api/location')
        ),
        tap((res) => {
          this.serviceRes = res;
        })
      );
  }

  deleteLocation(id) {
    return this.http.delete('https://localhost:44358/api/location/' + id).pipe(
      tap((res) => {}),
      concatMap((res) => this.http.get('https://localhost:44358/api/location')),
      tap((res) => {
        this.serviceRes = res;
      })
    );
  }

  putLocation(id, location) {
    return this.http
      .put('https://localhost:44358/api/location/' + id, location)
      .pipe(
        tap((res) => {}),
        concatMap((res) =>
          this.http.get('https://localhost:44358/api/location')
        ),
        tap((res) => {
          this.serviceRes = res;
        })
      );
  }
}
