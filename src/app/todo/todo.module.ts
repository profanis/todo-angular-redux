import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TodoService } from './todo.service';
import { TodoComponent } from './todo/todo.component';
import * as fromTodos from '../../store';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature('todos', fromTodos.reducers),
    EffectsModule.forFeature(fromTodos.effects)],
  providers: [TodoService],
  declarations: [TodoComponent],
  exports: [TodoComponent]
})
export class TodoModule {}
