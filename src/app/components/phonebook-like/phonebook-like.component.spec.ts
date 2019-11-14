import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonebookLikeComponent } from './phonebook-like.component';

describe('PhonebookLikeComponent', () => {
  let component: PhonebookLikeComponent;
  let fixture: ComponentFixture<PhonebookLikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhonebookLikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonebookLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
