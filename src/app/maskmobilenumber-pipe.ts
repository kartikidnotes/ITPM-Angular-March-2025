import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maskmobilenumber',
})
export class MaskmobilenumberPipe implements PipeTransform {

  transform(value:string,visible:number=4): string {
    const maskedLength=value.length-visible;
    return '*'.repeat(maskedLength)+value.slice(-visible);
  }

}
