import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LawsuitService } from '../services/lawsuit.service';
import { ContactService } from '../services/contact.service';
import { TypeService } from '../services/type.service';
import { LocationService } from '../services/location.service';
import { UserService } from '../services/user.service';

export interface LawyerData {
  user_id:string,
  lawsuit_id: number;
  id: number;
}
@Component({
  selector: 'app-lawyer-dialogbox',
  templateUrl: './lawyer-dialogbox.component.html',
  styleUrls: ['./lawyer-dialogbox.component.css'],
})
export class LawyerDialogboxComponent implements OnInit {
  action: string;
  local_data: any;
  users:null;
  lawsuits:null;


  constructor(
    public dialogRef: MatDialogRef<LawyerDialogboxComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: LawyerData,
    private userS: UserService,
    private lawsuitS: LawsuitService,
  ) {
    this.local_data = { ...data };
    this.action = this.local_data.action;
    this.lawsuitS.getLawsuits().subscribe(
      (res: any) => {
        this.lawsuits = res;
      },
      (err) => {
        console.log(err);
      }
    );
    this.userS.getUsers().subscribe(
      (res: any) => {
        this.users = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  ngOnInit(): void {}

  doAction() {
    this.dialogRef.close({ event: this.action, data: this.local_data });
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }
}
