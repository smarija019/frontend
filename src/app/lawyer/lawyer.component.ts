import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { LawyerService } from '../services/lawyer.service';
import { MatSort } from '@angular/material/sort';
import { LawyerDialogboxComponent } from '../lawyer-dialogbox/lawyer-dialogbox.component';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-lawyer',
  templateUrl: './lawyer.component.html',
  styleUrls: ['./lawyer.component.css'],
})
export class LawyerComponent implements OnInit {
  lawyer = {
    user_id: null,
    lawsuit_id: 0,
  };
  dataSource;
  userListMatTabDataSource = new MatTableDataSource<any>(this.dataSource);
  userDetails;
  myLawsuitsData = new MatTableDataSource<any>(this.dataSource);
  showhideMyLawsuits = false;
  ngOnInit(): void {
    this.getLawyers();
    if (localStorage.getItem('token') != null) {
      this.service.getUserProfile().subscribe(
        (res) => {
          this.userDetails = res;
          this.getMyLawyers(this.userDetails.userId);
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }

  getLawyers() {
    var obs = this.lawyerS.getLawyers();
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

  getMyLawyers(id) {
    var obs = this.lawyerS.getMyLawyers(id);
    obs.subscribe(
      (res: any) => {
        this.myLawsuitsData.data = res;
      },
      (err) => {
        console.log(err);
      }
    );
    return obs;
  }

  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'procedure_id',
    'action',
  ];

  @ViewChild(MatTable, { static: true }) table: MatTable<any>;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(
    public dialog: MatDialog,
    private lawyerS: LawyerService,
    private service: AuthService
  ) {}

  openDialog(action, obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(LawyerDialogboxComponent, {
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
    this.lawyer.user_id = data.user_id;
    this.lawyer.lawsuit_id = data.lawsuit_id;
    this.lawyerS.postLawyer(this.lawyer).subscribe(
      (result) => {
        this.userListMatTabDataSource.data = this.lawyerS.serviceRes;
      },
      (error) => {
        console.log(error.error[0].description);
      }
    );
    this.table.renderRows();
  }
  updateRowData(data) {
    this.lawyer.user_id = data.user_id;
    this.lawyer.lawsuit_id = data.lawsuit_id;
    this.lawyerS.putLawyer(data.id, this.lawyer).subscribe(
      (result) => {
        this.userListMatTabDataSource.data = this.lawyerS.serviceRes;
      },
      (error) => {
        console.log(error.error[0].description);
      }
    );
    this.table.renderRows();
  }
  deleteRowData(data) {
    this.lawyerS.deleteLawyer(data.id).subscribe(
      (result) => {
        this.userListMatTabDataSource.data = this.lawyerS.serviceRes;
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
