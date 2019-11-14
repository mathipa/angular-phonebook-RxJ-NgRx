import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PhonebookConfirmDialogComponent } from '../components/phonebook-confirm-dialog/phonebook-confirm-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  openConfirmDialog(msg) {
    return this.dialog.open( PhonebookConfirmDialogComponent, {
       width: '390px',
       panelClass: 'confirm-dialog-container',
       disableClose: true,
       position: { top: '10px'},
       data: {
         message : msg
       }
     });
   }
}
