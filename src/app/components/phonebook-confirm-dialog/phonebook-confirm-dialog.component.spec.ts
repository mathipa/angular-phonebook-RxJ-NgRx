import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonebookConfirmDialogComponent } from './phonebook-confirm-dialog.component';

describe('PhonebookConfirmDialogComponent', () => {
  let component: PhonebookConfirmDialogComponent;
  let fixture: ComponentFixture<PhonebookConfirmDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhonebookConfirmDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonebookConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
