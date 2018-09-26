

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

    `

})

export class TestComponent {
    title = "List of Courses"

   tcourse;


   constructor(service: TestService){
    //let service =new TestService();
    this.tcourse=service.getTest();


   }

}