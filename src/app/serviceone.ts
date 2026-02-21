import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Serviceone {
  
  getMessage():string{
    return 'Hello From Service one !!!! '
  }
}
