import { Component, OnInit } from "@angular/core";

import { Todo } from "../todo.model";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent implements OnInit {
  todoItem: string;
  todos: Todo[];

  constructor() {}

  ngOnInit(): void {}

  save(): void {}

  delete(id: number) {}
}
