import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonebookFormComponent } from './phonebook-form.component';

describe('PhonebookFormComponent', () => {
  let component: PhonebookFormComponent;
  let fixture: ComponentFixture<PhonebookFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhonebookFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonebookFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
