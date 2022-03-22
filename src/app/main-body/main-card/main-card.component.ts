import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.css']
})
export class MainCardComponent implements OnInit {

  @Input() carImg: string;
  @Input() cardName: string;
  @Input() cardPlace: string;
  @Input() cardPrice: string;
  @Input() cardTotalPrice: string;
  @Input() cardTaxFee: string;
  @Input() cardStar;

  range(number: number){
    var data: number[] = [];
    for(var i = 1; i <= number; i++){
      data.push(i);
    }
    return data;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
