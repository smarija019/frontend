
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  public checkRoleSource
  public checkRoleCurrent
  public loggedUserSource
  public loggedUserCurrent
  private isLogged = false;
  private isAdmin = false;
  constructor(private auth: AuthService) {

    if(this.auth.getRole() == 'admin')
    {
      this.isAdmin = true;
    }
    this.checkRoleSource = new BehaviorSubject(this.isAdmin);
    this.checkRoleCurrent = this.checkRoleSource.asObservable();

    if(localStorage.getItem('token') !=null)
    {
      this.isLogged = true;
    }
    this.loggedUserSource = new BehaviorSubject(this.isLogged);
    this.loggedUserCurrent = this.loggedUserSource.asObservable();
    console.log(this.isAdmin);
    console.log(this.isLogged);
  }

  checkRole(isAdmin: boolean) {
    this.checkRoleSource.next(isAdmin);
  }

  isLoggedIn(isLoggedIn: boolean){
    this.loggedUserSource.next(isLoggedIn);

  }
}
