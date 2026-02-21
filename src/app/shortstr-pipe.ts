import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortstr',
})
export class ShortstrPipe implements PipeTransform {

  transform(value: string,limit:number): string {
    return value.length>limit ? value.substring(0,limit)+'...': value;
  }

}
