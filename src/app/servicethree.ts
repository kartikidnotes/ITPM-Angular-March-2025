import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Servicethree {
 
  getLanguages():string[]{
    return ['Python','C#','Dotnet','Java','Angular']
  }
}
