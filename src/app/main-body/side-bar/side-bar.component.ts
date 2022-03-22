import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit { 
 
  @Input() f1:string;
  filteredString: string = '';
  nameSearchA=[];
  price=0;
  currentRate = 0;
  @Output() Te2: EventEmitter<string> =   new EventEmitter();
  @Output() sendStar: EventEmitter<any> =   new EventEmitter();
  @Output() sendPrice: EventEmitter<any> =   new EventEmitter();


  checkBox=[
    {title:'Free breakfast'}, 
    {title:'Free parking'}, 
    {title:'Free internet'}, 
    {title:'Free cancellation'}, 
    {title:'Free airport shuttle'}
  ];

 
  reData(event: any){
      // console.log(event);
      this.filteredString=event;
      this.nameSearchA.push(this.filteredString);
      console.log( this.nameSearchA);
      this.Te2.emit(this.filteredString);
  }
  sendStarNumber(){
    this.sendStar.emit(this.currentRate);
    console.log(this.currentRate)
  }
  sendPriceNumber(){
    this.sendPrice.emit(this.price);
  }

  constructor() { 
   
  }

  ngOnInit(): void {
   
  }

}
