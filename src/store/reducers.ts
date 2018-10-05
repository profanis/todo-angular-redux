import * as actions from "./actions";

export function reducer(state: any, action: {type: string, payload: any}) {
  switch(action.type) {
    case actions.ADD_TODO: {
      return [...state, action.payload]
    }

    case actions.DELETE_TODO: {
      return state.filter(it => it.id !== action.payload);
    }
  }

  return state;
}
