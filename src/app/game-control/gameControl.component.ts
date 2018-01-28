import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'game-control',
  templateUrl: './gameControl.component.html',
  styleUrls: ['./gameControl.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() oddNumberEvent = new EventEmitter<{num:number}>();
  @Output() evenNumberEvent = new EventEmitter<{num: number}>();
  num: number = 0;
  timer: any;

  constructor() { }


  ngOnInit() {
  }

  start(){

    /*Every 1 Second the number will increment by 1*/

    this.timer = setInterval( () => {
      this.num += 1;
      if(this.num%2 === 0){

        /*If number is even*/
        this.evenNumberEvent.emit({
          num: this.num
        })
      }
      else {
        /*If number is odd*/
        this.oddNumberEvent.emit({
          num: this.num
        })
      }

    },
      1000);
  }

  stop(){
    clearInterval(this.timer);
  }
}
