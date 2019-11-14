import { Component, OnInit } from '@angular/core';
import { PhonebookService } from 'src/app/services/phonebook.service';
import * as ContactActions from '../../store/actions/contact-actions';
import { AppState } from 'src/app/app.state';
import { Store } from '@ngrx/store';
import { NotificationsService } from '../../services/notifications.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-phonebook-form',
  templateUrl: './phonebook-form.component.html',
  styleUrls: ['./phonebook-form.component.scss']
})
export class PhonebookFormComponent implements OnInit {

  constructor(
    public notificationService: NotificationsService,
    public dialogRef: MatDialogRef<PhonebookFormComponent>,
    private phoneBookService: PhonebookService,
    private store: Store<AppState>) { }

  categories = [
    { id: 1, value: 'Friends' },
    { id: 2, value: 'Business Partners' },
    { id: 3, value: 'Collegue' },
    { id: 4, value: 'Family' }];

  ngOnInit() {
  }

  onSubmit() {
    if (this.phoneBookService.form.valid) {
      /*
        //TODO: Check if the key is not empty to EDIT
        if (!this.phoneBookService.form.get('$key').value)
         this.store.dispatch({ type: ContactActions.EDIT_CONTACT });
         */
      this.store.dispatch(new ContactActions.CreateContact(this.phoneBookService.form.value));
      this.phoneBookService.form.reset();
      this.phoneBookService.initialFormGroupState();
      this.notificationService.success('Contact Added Sucessfully');
      this.onClose();
    }
  }

  onClear() {
    this.phoneBookService.form.reset();
    this.phoneBookService.initialFormGroupState();
  }

  onClose() {
    this.phoneBookService.form.reset();
    this.phoneBookService.initialFormGroupState();
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }

}
