import {Injectable} from '@angular/core'
import {Task} from "./task";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Http, Headers} from "@angular/http";

@Injectable()
export class AppService{

    constructor(private http:Http){}

    tasks: Task[] = [];

    add(task:Task){
        if (this.tasks.indexOf(task) == -1) {
            this.tasks.push(task);
        }
    }

    delete(index:number){
        this.tasks.splice(index, 1);
    }

    update(index:number, task:Task){
        if (this.tasks.indexOf(task) == -1) {
            this.tasks[index] = task;
        }
    }

    getDataWithObservable():Observable<any>{
        return Observable.of<any>(this.tasks);
      // return Observable.throw<any>(new Error("error"));

    }

    getDataWithPromise(){
        return Promise.resolve<any>(this.tasks);
        // return Promise.reject<any>(new Error("error"));
    }

    getData():Observable<any> {
        //First we define header before every http call.
        let jsonHeaders = new Headers({
            'Content-Type': 'application/json'
        })

        return this.http.get('http://localhost:9000/get/all', {headers:jsonHeaders})
            .map((response:any)=>{
            return this.extractData(response);
        });

    }

    postData():Observable<any>{
        //First we define header before every http call.
        let jsonHeaders = new Headers({
            'Content-Type': 'application/json'
        })

        let obj = {
            date: '2018-08-20',
            title: 'another task',
            description: 'asdf',
            priority: 'high'
        };

        return this.http.post('http://localhost:9000/add', obj, {headers:jsonHeaders})
            .map((response:any)=>{
                return this.extractData(response)
                }).catch((e:any)=>{
                alert("Something went wrong.");
                return Observable.throw<any>(new Error("error"));
            });
    }

    extractData(res:any){
        let errMsg:string;
        let body = res.json();
        return body;
    }
}