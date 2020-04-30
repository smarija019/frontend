import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { LawsuitDialogboxComponent } from '../lawsuit-dialogbox/lawsuit-dialogbox.component';
import { LawsuitService } from '../services/lawsuit.service';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-lawsuits',
  templateUrl: './lawsuits.component.html',
  styleUrls: ['./lawsuits.component.css'],
})
export class LawsuitsComponent implements OnInit {
  lawsuit = {
    date: null,
    time: null,
    location: null,
    judge: null,
    inst_type: null,
    procedure_id: null,
    courtroom: 0,
    plaintiff: null,
    defendant: null,
    note: null,
    procedure_type: null,
  };
  dataSource;
  userListMatTabDataSource = new MatTableDataSource<any>(this.dataSource);

  ngOnInit(): void {
    this.getLawsuits();
  }

  getLawsuits() {
    var obs = this.lawsuitS.getLawsuits();
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
  displayedColumns: string[] = [
    'id',
    'date',
    'time',
    'location',
    'judge',
    'inst_type',
    'procedure_id',
    'courtroom',
    'plaintiff',
    'defendant',
    'note',
    'procedure_type',
    'action',
  ];
  @ViewChild(MatTable, { static: true }) table: MatTable<any>;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(public dialog: MatDialog, private lawsuitS: LawsuitService) {}

  openDialog(action, obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(LawsuitDialogboxComponent, {
      width: '250px',
      data: obj,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.event == 'Add') {
        this.addRowData(result.data);
      } else if (result.event == 'Update') {
        this.updateRowData(result.data);
      } else if (result.event == 'Delete') {
        this.deleteRowData(result.data);
      }
    });
  }

  addRowData(data) {
    this.lawsuit.date =
      data.date.toLocaleDateString('fr-CA').replace(/\//g, '-') +
      'T' +
      data.time.hour +
      ':' +
      data.time.minute +
      ':' +
      data.time.second;
    this.lawsuit.location = data.location;
    this.lawsuit.judge = data.judge;
    this.lawsuit.inst_type = data.inst_type;
    this.lawsuit.procedure_id = data.procedure_id;
    this.lawsuit.courtroom = data.courtroom;
    this.lawsuit.plaintiff = data.plaintiff;
    this.lawsuit.defendant = data.defendant;
    this.lawsuit.note = data.note;
    this.lawsuit.procedure_type = data.procedure_type;
    this.lawsuitS.postLawsuit(this.lawsuit).subscribe(
      (result) => {
        this.userListMatTabDataSource.data = this.lawsuitS.serviceRes;
      },
      (error) => {
        console.log(error.error[0].description);
      }
    );
    this.table.renderRows();
  }
  updateRowData(data) {

    if(data.dateChanged)
    {
      this.lawsuit.date =
      data.date.toLocaleDateString('fr-CA').replace(/\//g, '-') +
      'T' +
      data.time.hour +
      ':' +
      data.time.minute +
      ':' +
      data.time.second;
    }
    else{
      this.lawsuit.date =
      data.date +       'T' +
      data.time.hour +
      ':' +
      data.time.minute +
      ':' +
      data.time.second;
    }

    this.lawsuit.location = data.location;
    this.lawsuit.judge = data.judge;
    this.lawsuit.inst_type = data.inst_type;
    this.lawsuit.procedure_id = data.procedure_id;
    this.lawsuit.courtroom = data.courtroom;
    this.lawsuit.plaintiff = data.plaintiff;
    this.lawsuit.defendant = data.defendant;
    this.lawsuit.note = data.note;
    this.lawsuit.procedure_type = data.procedure_type;
    console.log(this.lawsuit);
    this.lawsuitS.putLawsuit(data.id, this.lawsuit).subscribe(
      (result) => {
        this.userListMatTabDataSource.data = this.lawsuitS.serviceRes;
      },
      (error) => {
        console.log(error.error[0].description);
      }
    );
    this.table.renderRows();
  }
  deleteRowData(data) {
    this.lawsuitS.deleteLawsuit(data.id).subscribe(
      (result) => {
        this.userListMatTabDataSource.data = this.lawsuitS.serviceRes;
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
  onMatSortChange() {
    this.userListMatTabDataSource.sort = this.sort;
  }
}
