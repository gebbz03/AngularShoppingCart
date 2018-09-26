

import { Component } from "@angular/core";
import { TestService } from "./test.service";


@Component({
    selector: 'tcourse',
    template: `<h2> {{"Title: " + title }}</h2>
    
        <ul>
        <li *ngFor="let tco of tcourse">
        {{ tco }}
        </li>
  
        </ul>

        <h2 [textContent]="title"></h2>
        
        <img src="{{ imUrl }}" />

        <img [src]="title" />

    `

})

export class TestComponent {
    title = "List of Courses"
    imUrl="http://www.gebbebero.elementfx.com/wp-content/uploads/19.jpg";

   tcourse;


   constructor(service: TestService){
    //let service =new TestService();
    this.tcourse=service.getTest();


   }

}