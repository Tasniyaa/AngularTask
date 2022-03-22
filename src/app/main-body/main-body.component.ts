import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css']
})
export class MainBodyComponent implements OnInit {

  @Input() nameSearch:string;
  Te2Recive:string='';
  sendStarRecive="";
  sendPriceRecive="";
  
  // nameSearch:string='';
  // selected:boolean=false;
  // getselected(){
  //   if(!this.selected){
  //     this.nameSearch="Free";
  //     this.selected=true;
  //   }
  //   else{
  //     this.nameSearch='';
  //     this.selected=false;
  //   }
  // }
  cardDetails=[ 
    { carImg:'https://cdn.thecrazytourist.com/wp-content/uploads/2015/03/shutterstock_1218765286.jpg', cardName: 'Novotel New Delhi Aerocity', cardPlace: '5-A, Hospitality District, Aerocity', cardPrice: '$109.21', cardTotalPrice: 'Total price:112.49', cardTaxFee: 'Inclusive taxes and fees', option:'Free breakfast Free internet', rating: '5', price:'50'},
    { carImg:'https://cdn.thecrazytourist.com/wp-content/uploads/2015/03/shutterstock_720444505.jpg', cardName: 'Radisson Blu Plaza Delhi Airport', cardPlace: 'Near Mahipalpur Extension NH 8', cardPrice: '$119.21', cardTotalPrice: 'Total price:122.19', cardTaxFee: 'Inclusive taxes and fees', option:'Free parking', rating: '2', price:'50'},
    { carImg:'https://cdn.thecrazytourist.com/wp-content/uploads/2019/03/ccimage-shutterstock_433813189.jpg', cardName: 'Novotel New Delhi Aerocity', cardPlace: '5-A, Hospitality District, Aerocity', cardPrice: '$109.21', cardTotalPrice: 'Total price:112.49', cardTaxFee: 'Inclusive taxes and fees', option:'Free internet', rating: '3', price:'50'},
    { carImg:'https://cdn.thecrazytourist.com/wp-content/uploads/2015/03/shutterstock_310961075.jpg', cardName: 'Novotel New Delhi Aerocity', cardPlace: '5-A, Hospitality District, Aerocity', cardPrice: '$109.21', cardTotalPrice: 'Total price:112.49', cardTaxFee: 'Inclusive taxes and fees', option:'Free cancellation', rating: '5', price:'50'},
    { carImg:'https://cdn.thecrazytourist.com/wp-content/uploads/2015/03/shutterstock_1459726691.jpg', cardName: 'Novotel New Delhi Aerocity', cardPlace: '5-A, Hospitality District, Aerocity', cardPrice: '$109.21', cardTotalPrice: 'Total price:112.49', cardTaxFee: 'Inclusive taxes and fees', option:'Free airport shuttle', rating: '5', price:'50'},
    { carImg:'https://cdn.thecrazytourist.com/wp-content/uploads/2015/03/shutterstock_1443919955.jpg', cardName: 'Novotel New Delhi Aerocity', cardPlace: '5-A, Hospitality District, Aerocity', cardPrice: '$109.21', cardTotalPrice: 'Total price:112.49', cardTaxFee: 'Inclusive taxes and fees', option:'Free parking', rating: '2', price:'50'},
    { carImg:'https://blog.thomascook.in/wp-content/uploads/2017/01/fairypools.jpg', cardName: 'Novotel New Delhi Aerocity', cardPlace: '5-A, Hospitality District, Aerocity', cardPrice: '$109.21', cardTotalPrice: 'Total price:112.49', cardTaxFee: 'Inclusive taxes and fees', option:'Free breakfast', rating: '3', price:'50'},
    { carImg:'https://blog.thomascook.in/wp-content/uploads/2017/01/fairypools.jpg', cardName: 'Novotel New Delhi Aerocity', cardPlace: '5-A, Hospitality District, Aerocity', cardPrice: '$109.21', cardTotalPrice: 'Total price:112.49', cardTaxFee: 'Inclusive taxes and fees', option:'Free breakfast', rating: '4', price:'60'},
    { carImg:'https://blog.thomascook.in/wp-content/uploads/2017/01/fairypools.jpg', cardName: 'Novotel New Delhi Aerocity', cardPlace: '5-A, Hospitality District, Aerocity', cardPrice: '$109.21', cardTotalPrice: 'Total price:112.49', cardTaxFee: 'Inclusive taxes and fees', option:'Free breakfast', rating: '5', price:'70'}
   
  ];

  // createRange(number: number){
  //   var data: number[] = [];
  //   for(var i = 1; i <= number; i++){
  //     data.push(i);
  //   }
  //   return data;
  // }

  constructor() { }

  ngOnInit(): void {
  }
  cboxTitle(event:any){
    this.Te2Recive=event
  }
  checkStar(event:any){
    this.sendStarRecive=event
    // console.log(this.sendStarRecive)
  }
  checkPrice(event:any){
    this.sendPriceRecive=event
    // console.log(this.sendPriceRecive)
  }
}
