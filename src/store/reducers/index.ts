import * as fromTodos from "./todo.reducer";
import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from "@ngrx/store";

export interface ProductState {
  todos: fromTodos.TodoState;
}

export const reducers: ActionReducerMap<ProductState> = {
  todos: fromTodos.reducer
};

export const getProductsState = createFeatureSelector<ProductState>("products");

export const getTodoState = createSelector(
  getProductsState,
  (state: ProductState) => state.todos
);

export const getAllTodos = createSelector(getTodoState, fromTodos.getTodos);
