import { Component, OnInit, ViewChild  } from '@angular/core';
import { IContact } from '../../intefaces/IContact';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { PhonebookFormComponent } from '../phonebook-form/phonebook-form.component';
import { PhonebookService } from '../../services/phonebook.service';
import { NotificationsService } from '../../services/notifications.service';
import * as ContactActions from '../../store/actions/contact-actions';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-phonebook-list',
  templateUrl: './phonebook-list.component.html',
  styleUrls: ['./phonebook-list.component.scss']
})
export class PhonebookListComponent implements OnInit {

  contacts: Observable<IContact[]>;
  listData: MatTableDataSource<any>;
  displayedColumns: string[] =
  [ 'name', 'surname', 'phone',
    'email', 'bornDate', 'category',
    'gender', 'actions', 'social'];
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  searchWord: string;

  constructor(
    private store: Store<AppState>,
    private phoneBookService: PhonebookService,
    private notifications: NotificationsService,
    private dialogService: DialogService,
    private dialog: MatDialog) {
  }

  ngOnInit() {
    this.getList();
  }

  public getList() {
    this.store.select('contact').subscribe(response => {
      this.listData = new MatTableDataSource(response);
      this.listData.sort = this.sort;
      this.listData.paginator = this.paginator;
    });
  }

  public convertDate(bornDate) {
    console.log(bornDate);
    return new Date(bornDate).toLocaleDateString();
  }

  onSearchClear() {
    this.searchWord = '';
    this.filterContacts();
  }

  filterContacts() {
    this.listData.filter = this.searchWord.trim().toLowerCase();
  }

  onCreateContact() {
    const dialogConfig =  new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(PhonebookFormComponent, dialogConfig);
  }

  onEditContact(row) {
    this.phoneBookService.populateContactForm(row);
    const dialogConfig =  new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(PhonebookFormComponent, dialogConfig);
  }

  delContact(i) {
    /*
    if (confirm('Are you sure to delete this record ?')) {
      this.store.dispatch(new ContactActions.RemoveContact(i));
      this.getList();
      this.notifications.warn('Contact Deleted successfully');
     }
  }
  */

      this.dialogService.openConfirmDialog('Are you sure to delete this contact ?')
      .afterClosed().subscribe(res => {
        if (res) {
          this.store.dispatch(new ContactActions.RemoveContact(i));
          this.getList();
          this.notifications.warn('Contact Deleted successfully');
        }
      });
    }
}
