import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userstatus',
})
export class UserstatusPipe implements PipeTransform {

  transform(status:string): string {
    if (!status) return 'black';
  
    switch(status.toLowerCase())
    {
      case 'active':
        return 'green'
      
      case 'inactive':
        return 'grey'

      case 'pending':
        return 'orange'
      
      case 'blocked':
        return 'red'

      default:
        return 'black'
    }
    
  }

}
