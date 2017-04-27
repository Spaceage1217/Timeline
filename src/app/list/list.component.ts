import { Component, OnInit, EventEmitter } from '@angular/core';
//code below used to get script and reload
//code modifed from here http://stackoverflow.com/questions/41226910/executing-jquery-each-in-angular-2-on-route-change
/*import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
//declare var $:any;
declare var $:JQueryStatic;*/

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  //add options for breaks
 snapShot_name: string;
 current: any = new Date();
 //converts to pm format if pm
 convert(){
   if (this.current.getHours() > 12)
   {
       this.task[this.top].startHrs  += 12;
       this.task[this.top].endHrs  += 12;
       this.task[this.top].meridiem ="pm";
   }
 }

//to be displayed in dom
hour: any = 0;
minute: any = 0;
second: any = 0;
finished: boolean= false;
//keep index of the current top
top: number =-1;
task: task[]=[];
  constructor(
    /*private router: Router,
  private activatedRoute: ActivatedRoute*/) {

   }

   addTask(newTask:{ title:string, discription:string, category:number, taskStart: Date,taskEnd: Date}){
    this.top++;
     console.log("I EMIITED "+ newTask.title);
     this.task.push({
       name: prompt('Name of task'),
       discription: 'clean your room when your at home',
       startHrs: parseInt(prompt('Enter start hour')),
       startMins: parseInt(prompt('Enter start min')),
       endHrs: parseInt(prompt('Enter end hour')),
       endMins: parseInt(prompt('Enter end min')),
       category: 1,//set to defaut for now
       meridiem: 'am',//might not use
       started: false,
       finished: false,
     });
      this.convert();
      this.setSeconds();
   }
   setSeconds(){

      var counter = 0;//counter that will be used to subtract current seconds from time enterd if start time is entered in between times
      var done=false;//once timer has started this flag should turn ture letting other else if statement know its ok to start
      var that = this; //saving the this reference to that...do not delete
      that.task.forEach(function(alarm, index){
      var time = setInterval(function() {

            var current = new Date();
            counter = current.getSeconds();

            if ( (alarm.startHrs === current.getHours() && alarm.startMins === current.getMinutes()))
            {     console.log(index + ' has started');
                  alarm.started=true;

                  that.snapShot_name = alarm.name;
            }
                if ( (alarm.finished==false && alarm.started) &&(current.getHours()!=alarm.endHrs || current.getMinutes() != alarm.endMins) )// working?
                {
              //    document.getElementById("time").innerHTML = seconds(counter, alarm);
                  seconds(counter, alarm);

                }
                else if(alarm.started){
                    alarm.finished = true;
                    that.finished=true;
                    seconds(counter, alarm);
                    //document.getElementById("time").innerHTML = 'DONE';
                    clearInterval(time);
                }

          function  seconds (counter, alarm:task) {
              //takes hours and mins converts them into mins and secs
              ///should have passed just the alarm insted of the index
              //will change later makes code more clean
              console.log("counter = "+ counter);
              var subtract=0;
              var hour_to_sec = (((alarm.endHrs - alarm.startHrs) * 60)*60);
              var min_to_sec = ((alarm.endMins - alarm.startMins) * 60);
              var total_sec = (hour_to_sec + min_to_sec)-counter;
              var hours = Math.floor(total_sec/ 60/60);
              var min = Math.floor(total_sec / 60);
              var sec = (total_sec % 60);
              that.hour=hours+' H';
              that.minute=min+' M';
              that.second=sec+' S';
              console.log(alarm.finished);
              if( alarm.finished)
              {
                that.hour='F';
                that.minute='I';
                that.second='N';
                return '';
              }


              if(hours>=0&&min>=0&&sec>=0)
              {
                return hours + ':'+ min + ':' + sec;
              }
              else
              {
                if( alarm.finished)
                {
                  that.hour='F';
                  that.minute='I';
                  that.second='N';
                  return '';
                }
                // delete task once completed-might save to new array later
              //    that.task.splice((index),1);
              }
          }
           }, 1000)
      })



     }

showSnap(index: number) {
  //show snap that you click on
  this.snapShot_name = this.task[index].name;
}


  ngOnInit() {

  /*  this.router.events
    .filter(event => event instanceof NavigationEnd)
    .map(() => this.activatedRoute)
    .subscribe((event) => {
     $.getScript('./js/index.js');
   });
   $('.open').click(function(){

     $('.snapshot').toggleClass('open-snap');
       $('#timeline').toggleClass('close-timeline');

   })*/



  }

}
interface task{
  name: string;
  discription?:string;
  startHrs: number;
  startMins: number;
  endHrs: number;
  endMins: number;
  category: number;
  meridiem: string;
  started: boolean;
  finished: boolean;
}
