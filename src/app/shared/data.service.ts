import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}
  private checkRoleSource = new BehaviorSubject(false);
  checkRoleCurrent = this.checkRoleSource.asObservable();

  checkRole(isAdmin: boolean) {
    this.checkRoleSource.next(isAdmin);
  }
}
