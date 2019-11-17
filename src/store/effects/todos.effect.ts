import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { map, switchMap } from "rxjs/operators";

import * as todoActions from "../actions";
import { TodoService } from "./../../app/todo/todo.service";

@Injectable()
export class TodosEffects {
  constructor(private actions$: Actions, private todoService: TodoService) {}

  @Effect()
  loadTodos$ = this.actions$.pipe(
    ofType(todoActions.LOAD_TODOS),
    switchMap(() => {
      return this.todoService
        .getTodos$()
        .pipe(map(todos => new todoActions.LoadTodosSuccess(todos)));
    }),
  );
}
