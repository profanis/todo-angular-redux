import * as actions from './actions';


export function reducer(state: any, action: {type: string, payload: any}) {
  switch (action.type) {
    case actions.ADD_TODO: {
      return [...state, action.payload];
    }

    case actions.REMOVE_TODO: {
      return state.filter(it => it.id !== action.payload);
    }

    case actions.UPDATE_TODO: {
      return state.map(it => {
        return (it.id === action.payload.id) ? action.payload : it;
      });
    }
  }

  return state;
}
