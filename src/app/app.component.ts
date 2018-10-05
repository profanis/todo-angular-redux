import { Component, OnInit } from '@angular/core';

import { Todo } from './todo.model';
// import * as store from '../store'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  todoItem: string;
  todos: Todo[];

  ngOnInit(): void {
  }


  save(): void {
  }

}
