import { Todo } from '../../app/todo/todo.model';
import * as fromTodos from '../actions';

export interface TodoState {
 data: Todo[];
}

export const initialState: TodoState = {
 data: [{ id: 1, name: 'Study more!' }]
};

export function reducer(state = initialState,
  action: fromTodos.TodoActions): TodoState {
   switch (action.type) {
     case '[TODOs] Load TODOs Success': {
      const data = [...state.data, ...action.payload];
      return {
        data
      };
    }

    case '[TODOs] Save TODO': {
      const data = [...state.data, action.payload];
      return {
        data
      };
    }

    case '[TODOs] Delete TODO': {
      const data = state.data.filter(it => it.id !== action.payload);
      return {
        data
      }
    }

   }

   return state;
  }


