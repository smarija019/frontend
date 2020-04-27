import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogboxComponent } from '../dialogbox/dialogbox.component';
import { TypeService } from '../services/type.service';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css']
})
export class TypesComponent implements OnInit {

  type = {
    type: null,
  };
  dataSource;
  userListMatTabDataSource = new MatTableDataSource<any>(this.dataSource);

  ngOnInit(): void {
    this.getTypes();
  }

  getTypes() {
    var obs = this.typeS.getTypes();
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

  displayedColumns: string[] = ['id', 'type', 'action'];

  @ViewChild(MatTable, { static: true }) table: MatTable<any>;
  constructor(public dialog: MatDialog, private typeS: TypeService) {}

  openDialog(action, obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogboxComponent, {
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
    this.type.type = data.type;
    this.typeS.postType(this.type).subscribe(
      (result) => {
        this.userListMatTabDataSource.data = this.typeS.serviceRes;
      },
      (error) => {
        console.log(error.error[0].description);
      }
    );
    this.table.renderRows();
  }
  updateRowData(data) {
    this.type.type = data.type;
    this.typeS.putType(data.id, this.type).subscribe(
      (result) => {
        this.userListMatTabDataSource.data = this.typeS.serviceRes;
      },
      (error) => {
        console.log(error.error[0].description);
      }
    );
    this.table.renderRows();
  }
  deleteRowData(data) {
    this.typeS.deleteType(data.id).subscribe(
      (result) => {
        this.userListMatTabDataSource.data = this.typeS.serviceRes;
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

}
