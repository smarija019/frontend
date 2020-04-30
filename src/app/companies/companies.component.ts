import { TypeService } from './../services/type.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DialogboxComponent } from '../dialogbox/dialogbox.component';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { CompanyService } from '../services/company.service';
import { CompanyDialogboxComponent } from '../company-dialogbox/company-dialogbox.component';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css'],
})
export class CompaniesComponent implements OnInit {
  company = {
    name: null,
    address: null,
  };
  dataSource;
  userListMatTabDataSource = new MatTableDataSource<any>(this.dataSource);

  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies() {
    var obs = this.companyS.getCompanies();
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

  displayedColumns: string[] = ['id', 'name', 'address', 'action'];

  @ViewChild(MatTable, { static: true }) table: MatTable<any>;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(public dialog: MatDialog, private companyS: CompanyService) {}

  openDialog(action, obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(CompanyDialogboxComponent, {
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
    this.company.name = data.name;
    this.company.address = data.address;
    this.companyS.postCompany(this.company).subscribe(
      (result) => {
        this.userListMatTabDataSource.data = this.companyS.serviceRes;
      },
      (error) => {
        console.log(error.error[0].description);
      }
    );
    this.table.renderRows();
  }
  updateRowData(data) {
    this.company.name = data.name;
    this.company.address = data.address;
    this.companyS.putCompany(data.id, this.company).subscribe(
      (result) => {
        this.userListMatTabDataSource.data = this.companyS.serviceRes;
      },
      (error) => {
        console.log(error.error[0].description);
      }
    );
    this.table.renderRows();
  }
  deleteRowData(data) {
    this.companyS.deleteCompany(data.id).subscribe(
      (result) => {
        this.userListMatTabDataSource.data = this.companyS.serviceRes;
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
