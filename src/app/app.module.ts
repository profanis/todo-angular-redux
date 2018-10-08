import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { TodoModule } from "./todo/todo.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, TodoModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
