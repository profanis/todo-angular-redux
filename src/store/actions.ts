export const ADD_TODO = '[TODO] add an item';

export class AddTodo {
 readonly type = ADD_TODO;
 constructor(public payload: any){}
}
