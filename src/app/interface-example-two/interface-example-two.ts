import { Component } from '@angular/core';

interface User{
  username:string,
  password:string
}

class Admin implements User{
  username: string='admin';
  password: string='Admin@12345';
}

@Component({
  selector: 'app-interface-example-two',
  imports: [],
  templateUrl: './interface-example-two.html',
  styleUrl: './interface-example-two.css',
})
export class InterfaceExampleTwo {

  admin=new Admin()

}
