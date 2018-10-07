import { Todo } from "./todo.model";
import { Injectable } from "@angular/core";
import { of } from "rxjs/observable/of";
import { Observable } from "rxjs/Observable";

const todos_db: Todo[] = [
  { id: 1, name: "Todo 1" },
  { id: 2, name: "Todo 2" },
  { id: 3, name: "Todo 3" },
  { id: 4, name: "Todo 4" },
  { id: 5, name: "Todo 5" },
  { id: 6, name: "Todo 6" },
  { id: 7, name: "Todo 7" }
];

@Injectable()
export class TodoService {
  getTodos$(): Observable<Todo[]> {
    return of(todos_db);
  }
}
