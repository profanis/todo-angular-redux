import { Action } from "@ngrx/store";
import { Todo } from "../../app/todo/todo.model";

export const LOAD_TODOS = "Load TODOs";
export const LOAD_TODOS_SUCCESS = "Load TODOs Success";
export const ADD_TODO = "Add TODO";
export const REMOVE_TODO = "Remove TODO";

export class LoadTodos implements Action {
  readonly type = LOAD_TODOS;
}

export class LoadTodosSuccess implements Action {
  readonly type = LOAD_TODOS_SUCCESS;
  constructor(public payload: Todo[]) {}
}

export class AddTodo implements Action {
  readonly type = ADD_TODO;
  constructor(public payload: Todo) {}
}

export class RemoveTodo implements Action {
  readonly type = REMOVE_TODO;
  constructor(public payload: number) {}
}

export type TodosAction = LoadTodos | LoadTodosSuccess | AddTodo | RemoveTodo;
