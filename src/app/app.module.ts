import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { StoreModule } from "@ngrx/store";
import { TodoModule } from "./todo/todo.module";
import { TodosEffects } from "../store/effects";
import { EffectsModule } from "@ngrx/effects";
import { environment } from "../environments/environment";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    TodoModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [TodosEffects],
  bootstrap: [AppComponent]
})
export class AppModule {}
