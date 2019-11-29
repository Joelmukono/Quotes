import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timePassed'
})
export class TimePassedPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let currentDate = new Date();
    let dateInSeconds = currentDate.getSeconds()

    return dateInSeconds;
    
  }

  



}
