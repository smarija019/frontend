import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface CompanyData {
  name: string;
  address: string;
  id: number;
}

@Component({
  selector: 'app-company-dialogbox',
  templateUrl: './company-dialogbox.component.html',
  styleUrls: ['./company-dialogbox.component.css']
})
export class CompanyDialogboxComponent implements OnInit {

  action: string;
  local_data: any;

  constructor(
    public dialogRef: MatDialogRef<CompanyDialogboxComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: CompanyData
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
