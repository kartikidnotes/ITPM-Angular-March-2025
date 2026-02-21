import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'agepipe',
})
export class AgepipePipe implements PipeTransform {

  transform(dob:string| Date): number {
    const diff=Date.now()-new Date(dob).getTime();
    return Math.floor(diff/(1000*60*60*24*365.25));
  }

}
