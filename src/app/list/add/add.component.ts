import { Component, OnInit, EventEmitter,Output } from '@angular/core';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})


export class AddComponent implements OnInit {

  @Output() taskAdded = new EventEmitter<{Title:string, Discription:string, Category:number, TaskStart: Date,TaskEnd: Date}>();//creating a custom event emmiter
  constructor() { }
  start: Date = new Date();
  end: Date = new Date();
  task:task;
  addTime(title:string, discription:string, category:number, taskStart: Date,taskEnd: Date)
  {
    this.taskAdded.emit({Title: title, Discription: discription, Category:category, TaskStart: taskStart,TaskEnd: taskEnd});
    console.log('my title' + title);
    console.log('my discription' + discription);
    console.log('my category' + category);
    console.log('MY start '+ (taskStart.getHours()-12));
    console.log('MY start '+ taskStart.getMinutes());
    console.log('My end '+ (taskEnd.getHours()-12));
    console.log('My end '+ taskEnd.getMinutes())
  }
  ngOnInit() {
  }

}
//might not need
interface task{
  name: string;
  discription?:string;
  startHrs: number;
  startMins: number;
  endHrs: number;
  endMins: number;
  category: number;
  meridiem: string;

}
