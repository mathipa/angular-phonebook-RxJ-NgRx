import { Action } from '@ngrx/store';
import { IContact } from 'src/app/intefaces/IContact';
import * as ContactActions from '../actions/contact-actions';
import { from } from 'rxjs';

export function reducer(state: IContact[] = [], action: ContactActions.Actions) {

  switch (action.type) {
      case ContactActions.CREATE_CONTACT:
        return [...state, action.payload];

      case ContactActions.REMOVE_CONTACT:
        state.splice(action.payload, 1)
        return state;

       case ContactActions.EDIT_CONTACT:
         /*
          const newItem = action.payload;
          const items = [...state.items, newItem];
          return {
            ...state,
            items
          };
          */
      default:
        return state;
  }
}

