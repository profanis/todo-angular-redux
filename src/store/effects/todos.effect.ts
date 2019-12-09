import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';

import * as fromTodos from '../actions';
import { TodoService } from './../../app/todo/todo.service';
import { Injectable } from '@angular/core';

@Injectable()
export class TodosEffects {
 constructor(private actions$: Actions, private todoService: TodoService) {}


 @Effect()
 loadTodos$ = this.actions$
   .pipe(
     ofType(fromTodos.LOAD_TODOS),
     switchMap(() =>
       this.todoService
         .getTodos$()
         .pipe(map(data => new fromTodos.LoadTodosSuccess(data)))
     )
   );
}


