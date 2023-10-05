import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProjectListingComponent } from './project-listing/project-listing.component';
import { TaskListingComponent } from './task-listing/task-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectListingComponent,
    TaskListingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
