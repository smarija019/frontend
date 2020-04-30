import { Component, OnInit, ViewChild } from '@angular/core';
import { LocationDialogboxComponent } from '../location-dialogbox/location-dialogbox.component';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { LocationService } from '../services/location.service';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css'],
})
export class LocationsComponent implements OnInit {
  location = {
    location: null,
  };
  dataSource;
  userListMatTabDataSource = new MatTableDataSource<any>(this.dataSource);

  ngOnInit(): void {
    this.getLocations();
  }

  getLocations() {
    var obs = this.locationS.getLocations();
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

  displayedColumns: string[] = ['id', 'location', 'action'];

  @ViewChild(MatTable, { static: true }) table: MatTable<any>;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(public dialog: MatDialog, private locationS: LocationService) {}

  openDialog(action, obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(LocationDialogboxComponent, {
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
    this.location.location = data.location;
    this.locationS.postLocation(this.location).subscribe(
      (result) => {
        this.userListMatTabDataSource.data = this.locationS.serviceRes;
      },
      (error) => {
        console.log(error.error[0].description);
      }
    );
    this.table.renderRows();
  }
  updateRowData(data) {
    this.location.location = data.location;
    this.locationS.putLocation(data.id, this.location).subscribe(
      (result) => {
        this.userListMatTabDataSource.data = this.locationS.serviceRes;
      },
      (error) => {
        console.log(error.error[0].description);
      }
    );
    this.table.renderRows();
  }
  deleteRowData(data) {
    this.locationS.deleteLocation(data.id).subscribe(
      (result) => {
        this.userListMatTabDataSource.data = this.locationS.serviceRes;
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
