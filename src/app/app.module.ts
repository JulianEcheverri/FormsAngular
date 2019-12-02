import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
// cuando trabajemos con formularios, se debe importar forms module en el module
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TemplateComponent } from "./components/template/template.component";
import { DataComponent } from "./components/data/data.component";

@NgModule({
  declarations: [AppComponent, TemplateComponent, DataComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // cuando trabajemos con formularios, se debe importar forms module en el module
    FormsModule,
    // formularios reactivos
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
