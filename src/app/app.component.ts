import {Component, OnInit} from '@angular/core';
import {AppService} from "./app.service";
import {Task} from "./task";
@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css'],
})

export class AppComponent implements OnInit {

    tasks: Task[];


    constructor(private service: AppService) {

    }

    /**
     * method will be called automatically when component is initialised
     */
    ngOnInit() {
        this.tasks = this.service.tasks;
    }
}


