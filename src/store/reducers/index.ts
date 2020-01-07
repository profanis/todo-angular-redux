import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTodos from './todo.reducer';

export interface ProductState {
 todos: fromTodos.TodoState;
}

export const reducers: ActionReducerMap<ProductState> = {
 todos: fromTodos.reducer
};

export const getTodoState = createFeatureSelector<ProductState>('todos');

export const getAllTodos = createSelector(getTodoState, (state: ProductState) => state.todos.data);
