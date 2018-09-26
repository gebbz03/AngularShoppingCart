import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { TestComponent } from './test.component';
import { TestService } from './test.service';



@NgModule({
  declarations: [
    AppComponent,
    TestComponent
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    TestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
