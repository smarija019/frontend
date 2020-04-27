import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface UserData {
  role: null,
  firstName: null,
  lastName: null,
  userName: null,
  email: null,
  id: null;
}
@Component({
  selector: 'app-user-dialogbox',
  templateUrl: './user-dialogbox.component.html',
  styleUrls: ['./user-dialogbox.component.css']
})
export class UserDialogboxComponent implements OnInit {

  action: string;
  local_data: any;

  constructor(
    public dialogRef: MatDialogRef<UserDialogboxComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: UserData
  ) {
    console.log(data);
    this.local_data = { ...data };
    this.action = this.local_data.action;
  }
  ngOnInit(): void {}

  doAction() {
    console.log(this.local_data);
    this.dialogRef.close({ event: this.action, data: this.local_data });
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }

}
