export const ADD_TODO = "[TODO] add an item";
export const DELETE_TODO = "[TODO] delete an item";

export class AddTodo {
  readonly type = ADD_TODO;
  constructor(private payload: any){}
}

export class DeleteTodo {
  readonly type = DELETE_TODO;
  constructor(private payload: any){}
}
