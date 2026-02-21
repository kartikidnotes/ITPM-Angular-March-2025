import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countrycode',
})
export class CountrycodePipe implements PipeTransform {

  transform(phone:string): string {
    return `+91 ${phone.slice(0,5)} ${phone.slice(5)}`;
  }

}
