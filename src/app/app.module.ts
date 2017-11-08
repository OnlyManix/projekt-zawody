import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routing } from "./app.routing";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { JobsListComponent } from './jobs-list.component';
import { JobsCreateComponent } from './jobs-create.component';
import { JobsEditComponent } from './jobs-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    JobsListComponent,
    JobsCreateComponent,
    JobsEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
