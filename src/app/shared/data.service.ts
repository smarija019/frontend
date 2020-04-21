import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}
  private checkRoleSource = new BehaviorSubject(false);
  checkRoleCurrent = this.checkRoleSource.asObservable();

  private loggedUserSource = new BehaviorSubject(false);
  loggedUserCurrent = this.loggedUserSource.asObservable();

  checkRole(isAdmin: boolean) {
    this.checkRoleSource.next(isAdmin);
  }

  isLoggedIn(isLoggedIn: boolean){
    this.loggedUserSource.next(isLoggedIn);

  }
}
