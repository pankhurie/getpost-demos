import {Component, OnInit} from '@angular/core'
import {Router, ActivatedRoute} from '@angular/router'
import {Task} from '../task'
import {AppService} from "../app.service";

@Component({
    selector: 'create',
    templateUrl: './app/create/create.component.html',
    styleUrls: ['']
})
export class CreateComponent  implements OnInit{
    task:Task=new Task("","","","");
    index:number;
    constructor(private router: Router,private route: ActivatedRoute, private service:AppService) {}
    ngOnInit(){
        this.route.params.subscribe((data: any) => {
            this.index = +data.i;
            if(this.index||this.index===0){
                this.task=this.service.tasks[this.index];

                // alert("Got i= "+this.index);
            }
        });

    }


    submit(){
        if(this.index){
            // this.service.tasks[this.index]=this.task;
            this.service.update(this.index, this.task);
        }else{
            // this.service.tasks.push(this.task);
            this.service.add(this.task);
        }

        this.router.navigate(['show']);
        // alert(JSON.stringify(this.task));
    }

}
