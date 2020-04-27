import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { UserDialogboxComponent } from '../user-dialogbox/user-dialogbox.component';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user = {
    role: null,
    firstName: null,
    lastName: null,
    userName: null,
    email: null,
  };
  dataSource;
  userListMatTabDataSource = new MatTableDataSource<any>(this.dataSource);

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    var obs = this.userS.getUsers();
    obs.subscribe(
      (res: any) => {
        this.userListMatTabDataSource.data = res;
      },
      (err) => {
        console.log(err);
      }
    );
    return obs;
  }

  displayedColumns: string[] = ['id', 'Role','FirstName','LastName','UserName','Email', 'action'];

  @ViewChild(MatTable, { static: true }) table: MatTable<any>;
  constructor(public dialog: MatDialog, private userS: UserService, private router: Router) {}

  openDialog(action, obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(UserDialogboxComponent, {
      width: '250px',
      data: obj,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.event == 'Add') {
        this.addRowData(result.data);
      }
      else if (result.event == 'Delete') {
        this.deleteRowData(result.data);
      }
    });
  }

  addRowData(data) {
    this.user.firstName = data.firstName;
    this.user.lastName = data.lastName;
    this.user.role = data.role;
    this.user.email = data.email;
    this.user.userName = data.userName;
    this.userS.postUser(this.user).subscribe(
      (result) => {
        this.userListMatTabDataSource.data = this.userS.serviceRes;
      },
      (error) => {
        console.log(error.error[0].description);
      }
    );
    this.table.renderRows();
  }
  // updateRowData(data) {
  //   this.user.firstName = data.firstName;
  //   this.user.lastName = data.lastName;
  //   this.user.role = data.role;
  //   this.user.email = data.email;
  //   this.user.userName = data.userName;
  //   this.userS.putUser(data.id, this.user).subscribe(
  //     (result) => {
  //       this.userListMatTabDataSource.data = this.userS.serviceRes;
  //     },
  //     (error) => {
  //       console.log(error.error[0].description);
  //     }
  //   );
  //   this.table.renderRows();
  // }
  deleteRowData(data) {
    this.userS.deleteUser(data.id).subscribe(
      (result) => {
        this.userListMatTabDataSource.data = this.userS.serviceRes;
      },
      (error) => {
        console.log(error.error[0].description);
      }
    );
    this.table.renderRows();
  }

  applyFilter(filterValue: string) {
    this.userListMatTabDataSource.filter = filterValue.trim().toLowerCase();
  }

  addUser(){
    this.router.navigateByUrl('/registration');
  }
}
