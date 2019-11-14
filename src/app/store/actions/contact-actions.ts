import { Action } from '@ngrx/store';
import { IContact } from 'src/app/intefaces/IContact';
import {Injectable } from '@angular/core';

export const GET_CONTACT = 'GET_CONTACT';

export const CREATE_CONTACT = 'CREATE_CONTACT';

export const EDIT_CONTACT = 'EDIT_CONTACT';

export const REMOVE_CONTACT = 'REMOVE_CONTACT';

export class CreateContact implements Action {
  readonly type = CREATE_CONTACT;

  constructor(public payload: IContact) {}
}


export class RemoveContact implements Action {
  readonly type = REMOVE_CONTACT;

  constructor(public payload: number) {}
}

export class EditContact implements Action {
  readonly type = EDIT_CONTACT;

  constructor(public payload: { IContact }) {}
}

export type Actions = CreateContact | RemoveContact | EditContact;
