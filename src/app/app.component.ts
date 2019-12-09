import { Component, OnInit } from '@angular/core';

import { Todo } from './todo.model';
import * as store from '../store';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  form: FormGroup;
  todoItem: string;
  todos: Todo[];
  reducers = {
    todos: store.reducer
  };

  store = new store.Store(this.reducers, {
    todos: [{ id: 1, name: 'Study more!' }]
  });

  get todoItems(): FormArray {
    return (this.form.get('todoItems') as FormArray);
  }

  ngOnInit(): void {
    this.buildForm();

    this.store.subscribe((data: any) => {
      this.todoItems.clear();
      this.todos = [];

      const formGroup = (it) => new FormGroup({
        id: new FormControl(it.id),
        name: new FormControl(it.name)
      });
      data.todos.forEach(it => this.todoItems.push(formGroup(it)));
      this.todos = [...this.todos, ...data.todos];
    });
  }


  save(): void {
    this.store.dispatch(new store.AddTodo({ id: Math.random(), name: this.todoItem }));
    this.todoItem = null;
  }

  delete(todoItem: FormControl): void {
  }

  update(todoItem: FormControl): void {
  }

  private buildForm() {
    this.form = new FormGroup({
      todoItems: new FormArray([])
    });
  }

}
