import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel-search',
  templateUrl: './hotel-search.component.html',
  styleUrls: ['./hotel-search.component.css']
})
export class HotelSearchComponent implements OnInit {

  constructor() { }

 roomCounter = 1;
 adultCounter = 1;
 childrenCounter = 0;
 child=0;
 a=0;
 childCounter=[];


  increment() {
    this.roomCounter++;
  }
  decrement() {
    if(this.roomCounter>1){
      this.roomCounter--;
    }
  }

  adultI(){
    this.adultCounter++;
  }
  adultD(){
    if(this.adultCounter>1){
      this.adultCounter--;
    }
  }

  childrenI(){
    this.childrenCounter++;
    this.childCounter.push(this.childCounter.length+1);
  }
  childrenD(){
    if(this.childrenCounter>0){
      this.childrenCounter--;
      this.childCounter.pop();
    }
  }
  childI(c){
    this.child++;
  }
  childD(c){
    this.child--;
  }

  ngOnInit(): void {
  }

}
