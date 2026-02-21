import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reversestr',
})
export class ReversestrPipe implements PipeTransform {

  transform(value:string): string {
    return value.split('').reverse().join('');
  }

}
