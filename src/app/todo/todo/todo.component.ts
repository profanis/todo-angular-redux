import { Component, OnInit } from '@angular/core';

import { Todo } from '../todo.model';
import { Store } from '@ngrx/store';
import * as fromTodos from '../../../store/index';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoItem: string;
  todos: Todo[];

  constructor(private store: Store<fromTodos.ProductState>) {}

  ngOnInit(): void {
    this.store
     .select(fromTodos.getAllTodos)
     .subscribe(data => (this.todos = data));


    this.store.dispatch(new fromTodos.LoadTodos());
  }


  save(): void {
    this.store.dispatch(new fromTodos.SaveTodo({id: Math.random(), name: this.todoItem}));
  }

  delete(id: number) {
    this.store.dispatch(new fromTodos.DeleteTodo(id));
  }
}
