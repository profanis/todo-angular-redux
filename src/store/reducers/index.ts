import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTodos from './todo.reducer';

export interface ProductState {
 todos: fromTodos.TodoState;
}

export const reducers: ActionReducerMap<ProductState> = {
 todos: fromTodos.reducer
};

export const getProductState = createFeatureSelector<ProductState>('products');

export const getTodoState = createSelector(getProductState, (state: ProductState) => state.todos);

export const getAllTodos = createSelector(getTodoState, (state: fromTodos.TodoState) => state.data);
