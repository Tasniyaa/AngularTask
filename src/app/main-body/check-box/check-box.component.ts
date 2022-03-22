import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.css']
})
export class CheckBoxComponent implements OnInit {

  @Input() title: string;
  @Output() Te: EventEmitter<string> =   new EventEmitter();
  
  nameSearch:string='';
  // nameSearchA=[];
  isChecked = false;


  data(){
    if(this.isChecked != true){
      this.nameSearch=this.title;
    }
    else if(this.isChecked == true){
      this.nameSearch='';
     
    }
  }

  sendTe(){
    if(this.isChecked != true){
        this.Te.emit(this.nameSearch);
      }
      else if(this.isChecked == true){
        this.nameSearch='';
        this.Te.emit(this.nameSearch);
      }
    }
  constructor() { }

  ngOnInit(): void {
  }

}
