import { Todo } from './../../app/todo/todo.model';
import { Action } from '@ngrx/store';
export const LOAD_TODOS = '[TODOs] Load TODOs';
export const LOAD_TODOS_SUCCESS = '[TODOs] Load TODOs Success';
export const SAVE_TODO = '[TODOs] Save TODO';
export const DELETE_TODO = '[TODOs] Delete TODO';


export class LoadTodos implements Action {
 readonly type = LOAD_TODOS;
}

export class LoadTodosSuccess implements Action {
  readonly type = LOAD_TODOS_SUCCESS;
  constructor(public payload: Todo[]) {}
 }

 export class SaveTodo implements Action {
  readonly type = SAVE_TODO;
  constructor(public payload: Todo) {}
 }

 export class DeleteTodo implements Action {
  readonly type = DELETE_TODO;
  constructor(public payload: number) {}
 }



export type TodoActions = LoadTodos | LoadTodosSuccess | SaveTodo | DeleteTodo;


