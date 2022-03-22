import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pricePipe'
})
export class PricePipePipe implements PipeTransform {

  transform(value: any, filterPrice:any){
    if(value.length === 0 || filterPrice == ''){
      return value;
    }

    const allPrices = [];
    for(const allPrice of value){
      if(allPrice['price'] == filterPrice ){
        allPrices.push(allPrice);
      }
    }
    return allPrices;
  }

}
