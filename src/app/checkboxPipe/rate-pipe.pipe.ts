import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ratePipe'
})
export class RatePipePipe implements PipeTransform {

  transform(value: any, filterStar:string){
    if(value.length === 0 || filterStar == ''){
      return value;
    }

    const rateStars = [];
    for(const rateStar of value){
      if(rateStar['rating'] == filterStar ){
        rateStars.push(rateStar);
      }
    }
    return rateStars;
  }
}
