export class Task{
    date:string;
    title:string;
    description:string;
    priority:string;

    constructor(date?: string, title?: string, description?: string, priority?: string) {
        if(date&&title&&description&&priority){
            this.date = date;
            this.title = title;
            this.description = description;
            this.priority = priority;
        }else{
            date=null;
            title=null;
            description=null;
            priority=null;
        }
    }
}