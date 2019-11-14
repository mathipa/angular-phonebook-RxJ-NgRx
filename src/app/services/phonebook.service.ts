import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class PhonebookService {

  constructor() { }

  form: FormGroup = new FormGroup({
    $key: new FormControl (null),
    name: new FormControl('',
    [Validators.required,
      Validators.pattern('^[a-zA-Z ]*$')]),
    surname: new FormControl('',
    [Validators.required,
      Validators.pattern('^[a-zA-Z ]*$')]),
    phone: new FormControl ('',
     [Validators.required, Validators.minLength(11)]),
    email: new FormControl('', Validators.email),
    gender: new FormControl(''),
    bornDate: new FormControl (''),
    category: new FormControl (''),
  });

  initialFormGroupState() {
    this.form.setValue ({
      $key: null,
      name: '',
      surname: '',
      phone: '',
      email: '',
      gender: '',
      bornDate: '',
      category: '',
    });
  }

  getCategories() {
    const categories = [
        { id: 1, value: 'Friends' },
        { id: 2, value: 'Business Partners' },
        { id: 3, value: 'Collegue' },
        { id: 4, value: 'Family' },
    ];
    return categories;
  }

  populateContactForm(contacts) {
    this.form.setValue(contacts);
  }

}
