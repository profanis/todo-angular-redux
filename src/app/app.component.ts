import { Component, OnInit } from '@angular/core';

import { Todo } from './todo.model';
import * as store from '../store'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  todoItem: string;
  todos: Todo[];

  reducers = {todos: store.reducer}


  store = new store.Store(
    this.reducers,
    {
      todos: [{id: Math.random(), name: "Study more!"}]
    }
  );

  ngOnInit(): void {
    this.store.subscribe(() => {
      this.todos = this.store.value.todos;
    })
  }


  save() {
    this.store.dispatch(new store.AddTodo({id: Math.random(), name: this.todoItem}));
  }

  delete(id: number) {
    this.store.dispatch(new store.DeleteTodo(id));
  }
}
