import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface LocationData {
  locationName: string;
  id: number;
}
@Component({
  selector: 'app-location-dialogbox',
  templateUrl: './location-dialogbox.component.html',
  styleUrls: ['./location-dialogbox.component.css']
})
export class LocationDialogboxComponent implements OnInit {
  action: string;
  local_data: any;

  constructor(
    public dialogRef: MatDialogRef<LocationDialogboxComponent >,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: LocationData
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

