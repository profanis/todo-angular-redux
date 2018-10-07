import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";

import { reducers } from "../../store/reducers";
import { effects } from "./../../store/effects";
import { TodoService } from "./todo.service";
import { TodoComponent } from "./todo/todo.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature("products", reducers),
    EffectsModule.forFeature(effects)
  ],
  providers: [TodoService],
  declarations: [TodoComponent],
  exports: [TodoComponent]
})
export class TodoModule {}
