import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { TodoService } from "./todo.service";
import { TodoComponent } from "./todo/todo.component";

@NgModule({
  imports: [CommonModule, FormsModule],
  providers: [TodoService],
  declarations: [TodoComponent],
  exports: [TodoComponent]
})
export class TodoModule {}
