import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LawsuitService } from '../services/lawsuit.service';
import { ContactService } from '../services/contact.service';
import { TypeService } from '../services/type.service';
import { LocationService } from '../services/location.service';

export interface LawsuitData {
  date: string;
  time: string;
  location: number;
  judge: number;
  inst_type: string;
  procedure_id: string;
  courtroom: number;
  plaintiff: number;
  defendant: number;
  note: string;
  procedure_type: number;
  id: number;
}
@Component({
  selector: 'app-lawsuit-dialogbox',
  templateUrl: './lawsuit-dialogbox.component.html',
  styleUrls: ['./lawsuit-dialogbox.component.css'],
})
export class LawsuitDialogboxComponent implements OnInit {
  action: string;
  local_data: any;
  types = null;
  contacts = null;
  locations = null;
  dateChanged;
  time = { hour: 13, minute: 30, second: 10 };

  constructor(
    public dialogRef: MatDialogRef<LawsuitDialogboxComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: LawsuitData,
    private contactS: ContactService,
    private typeS: TypeService,
    private locationS: LocationService
  ) {
    this.dateChanged = false;
    this.local_data = { ...data };
    this.action = this.local_data.action;
    this.contactS.getContacts().subscribe(
      (res: any) => {
        this.contacts = res;
      },
      (err) => {
        console.log(err);
      }
    );
    this.typeS.getTypes().subscribe(
      (res: any) => {
        this.types = res;
      },
      (err) => {
        console.log(err);
      }
    );
    this.locationS.getLocations().subscribe(
      (res: any) => {
        this.locations = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  ngOnInit(): void {}

  doAction() {
    if (this.dateChanged) {
      this.local_data.dateChanged = true;
    } else {
      this.local_data.dateChanged = false;
    }

    this.local_data.time = this.time;
    this.dialogRef.close({ event: this.action, data: this.local_data });
  }

  dateChange() {
    this.dateChanged = true;
  }
  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }
}
