import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonebookListComponent } from './phonebook-list.component';

describe('PhonebookListComponent', () => {
  let component: PhonebookListComponent;
  let fixture: ComponentFixture<PhonebookListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhonebookListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonebookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
