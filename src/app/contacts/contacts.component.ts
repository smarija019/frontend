import { Component, OnInit, ViewChild } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ContactDialogboxComponent } from '../contact-dialogbox/contact-dialogbox.component';
import { CompanyService } from '../services/company.service';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  contact = {
    name: null,
    tel1: null,
    tel2: null,
    address: null,
    email: null,
    flag: 0,
    profession: null,
    company: 0,
  };
  dataSource;
  userListMatTabDataSource = new MatTableDataSource<any>(this.dataSource);

  ngOnInit(): void {
    this.getContacts();
  }

  getContacts() {
    var obs = this.contactS.getContacts();
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
    'name',
    'tel1',
    'tel2',
    'address',
    'email',
    'flag',
    'profession',
    'company',
    'action',
  ];

  @ViewChild(MatTable, { static: true }) table: MatTable<any>;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(public dialog: MatDialog, private contactS: ContactService) {}

  openDialog(action, obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(ContactDialogboxComponent, {
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
    this.contact.name = data.name;
    this.contact.address = data.address;
    this.contact.tel1 = data.tel1;
    this.contact.tel2 = data.tel2;
    this.contact.email = data.email;
    this.contact.flag = data.flag;
    this.contact.profession = data.profession;
    this.contact.company = data.company;
    this.contactS.postContact(this.contact).subscribe(
      (result) => {
        this.userListMatTabDataSource.data = this.contactS.serviceRes;
      },
      (error) => {
        console.log(error.error[0].description);
      }
    );
    this.table.renderRows();
  }
  updateRowData(data) {
    this.contact.name = data.name;
    this.contact.address = data.address;
    this.contact.tel1 = data.tel1;
    this.contact.tel2 = data.tel2;
    this.contact.email = data.email;
    this.contact.flag = data.flag;
    this.contact.profession = data.profession;
    this.contact.company = data.company;
    this.contactS.putContact(data.id, this.contact).subscribe(
      (result) => {
        this.userListMatTabDataSource.data = this.contactS.serviceRes;
      },
      (error) => {
        console.log(error.error[0].description);
      }
    );
    this.table.renderRows();
  }
  deleteRowData(data) {
    this.contactS.deleteContact(data.id).subscribe(
      (result) => {
        this.userListMatTabDataSource.data = this.contactS.serviceRes;
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
