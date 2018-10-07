import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { map, switchMap } from "rxjs/operators";

import * as todoActions from "../actions";
import { TodoService } from "./../../app/todo/todo.service";

@Injectable()
export class TodosEffects {
  constructor(private actions$: Actions, private todoService: TodoService) {}

  @Effect()
  loadTodos$ = this.actions$.ofType(todoActions.LOAD_TODOS).pipe(
    switchMap(() => {
      return this.todoService
        .getTodos$()
        .pipe(map(todos => new todoActions.LoadTodosSuccess(todos)));
    })
  );
}
