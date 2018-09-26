

import { Component } from "@angular/core";
import { TestService } from "./test.service";


@Component({
    selector: 'tcourse',
    template: `
        

 <button class="btn btn-danger">Close</button>

    `

})

export class TestComponent {
    title = "List of Courses"
    imUrl="http://www.gebbebero.elementfx.com/wp-content/uploads/19.jpg";
    colSpan=2;



}