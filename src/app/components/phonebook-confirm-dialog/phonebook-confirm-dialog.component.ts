import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-phonebook-confirm-dialog',
  templateUrl: './phonebook-confirm-dialog.component.html',
  styleUrls: ['./phonebook-confirm-dialog.component.scss']
})
export class PhonebookConfirmDialogComponent implements OnInit {

  constructor( @Inject (MAT_DIALOG_DATA) public data,
               public dialogRef: MatDialogRef<PhonebookConfirmDialogComponent>) { }


  ngOnInit() {
  }

  closeDialog() {
    this.dialogRef.close(false);
  }


}
