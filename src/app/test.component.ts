

import { Component } from "@angular/core";


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

   tcourse=["course1","course2","course3"];

}