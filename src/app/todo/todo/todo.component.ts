import * as fromStore from "../../../store";
import { Component, OnInit } from "@angular/core";
import { Todo } from "../todo.model";
import { Store } from "@ngrx/store";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent implements OnInit {
  todoItem: string;
  todos: Todo[];

  constructor(private store: Store<fromStore.ProductState>) {}

  ngOnInit(): void {
    this.store.select(fromStore.getAllTodos).subscribe(state => {
      this.todos = state;
    });

    this.store.dispatch(new fromStore.LoadTodos());
  }

  save(): void {
    this.store.dispatch(
      new fromStore.AddTodo({ id: Math.random(), name: this.todoItem })
    );
  }

  delete(id: number) {
    this.store.dispatch(new fromStore.RemoveTodo(id));
  }
}
