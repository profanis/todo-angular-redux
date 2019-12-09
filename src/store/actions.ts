export const ADD_TODO = '[TODO] add an item';
export const REMOVE_TODO = '[TODO] remove an item';
export const UPDATE_TODO = '[TODO] update an item';

export class AddTodo {
 readonly type = ADD_TODO;
 constructor(public payload: any){}
}

export class RemoveTodo {
  readonly type = REMOVE_TODO;
  constructor(public payload: any){}
 }

 export class UpdateTodo {
  readonly type = UPDATE_TODO;
  constructor(public payload: any){}
 }


