import * as actions from './actions';


export function reducer(state: any, action: {type: string, payload: any}) {
  switch (action.type) {
    case actions.ADD_TODO: {
      return [...state, action.payload];
    }
  }

  return state;
}
