import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sqaure',
})
export class SqaurePipe implements PipeTransform {

  transform(num: number): number {
    return num*num;
  }

}
