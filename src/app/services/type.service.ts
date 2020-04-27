import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {concatMap, tap} from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  serviceRes=null;

  constructor(private http: HttpClient) { }
  
  getTypes() {
    return this.http.get('https://localhost:44358/api/type');
  }

  postType(type) {
    return this.http.post('https://localhost:44358/api/type', type).pipe(
      tap(res => console.log('First result', res)),
      concatMap((res) => this.http.get('https://localhost:44358/api/type')),
      tap(res => {this.serviceRes = res;
        console.log(this.serviceRes);
        console.log(res);})
    )
  }

  deleteType(id) {
    return this.http.delete('https://localhost:44358/api/type/'+id).pipe(
      tap(res => console.log('First result', res)),
      concatMap((res) => this.http.get('https://localhost:44358/api/type')),
      tap(res => {this.serviceRes = res;
        console.log(this.serviceRes);
        console.log(res);})
    )
  }

  putType(id, type) {
   return this.http.put('https://localhost:44358/api/type/'+id, type).pipe(
    tap(res => console.log('First result', res)),
    concatMap((res) => this.http.get('https://localhost:44358/api/type')),
    tap(res => {this.serviceRes = res;
      console.log(this.serviceRes);
      console.log(res);})
  )
  }

}
