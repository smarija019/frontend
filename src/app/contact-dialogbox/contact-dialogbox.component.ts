import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface ContactData {
  name: string;
  tel1: string;
  tel2: string;
  address: string;
  email: string;
  flag: number;
  profession: string;
  company: number;
  id: number;
}
@Component({
  selector: 'app-contact-dialogbox',
  templateUrl: './contact-dialogbox.component.html',
  styleUrls: ['./contact-dialogbox.component.css']
})
export class ContactDialogboxComponent implements OnInit {
  action: string;
  local_data: any;

  constructor(
    public dialogRef: MatDialogRef<ContactDialogboxComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: ContactData
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
