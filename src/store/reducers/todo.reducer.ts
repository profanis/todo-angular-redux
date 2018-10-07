import { TodoState } from "./todo.reducer";
import { Todo } from "../../app/todo/todo.model";
import { TodosAction } from "../actions/todos.actions";

export interface TodoState {
  data: Todo[];
}

export const initialState: TodoState = {
  data: []
};

export function reducer(state = initialState, action: TodosAction): TodoState {
  switch (action.type) {
    case "Load TODOs Success": {
      const data = action.payload;
      return {
        ...state,
        data
      };
    }

    case "Add TODO": {
      const data = [...state.data, action.payload];
      return {
        data
      };
    }

    case "Remove TODO": {
      const data = state.data.filter(todo => todo.id !== action.payload);
      return {
        data
      };
    }
  }
  return state;
}

// Helper functions
export const getTodos = (state: TodoState) => state.data;
