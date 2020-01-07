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
     case fromTodos.LOAD_TODOS_SUCCESS: {
      const data = [...state.data, ...action.payload];
      return {
        data
      };
    }

    case fromTodos.SAVE_TODO: {
      const data = [...state.data, action.payload];
      return {
        data
      };
    }

    case fromTodos.DELETE_TODO: {
      const data = state.data.filter(it => it.id !== action.payload);
      return {
        data
      }
    }

   }

   return state;
  }


