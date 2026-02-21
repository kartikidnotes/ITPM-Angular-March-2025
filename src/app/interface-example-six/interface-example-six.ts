import { Component } from '@angular/core';


interface Notification{
    sendMessage(message:string):string;
}

class EmailNotification implements Notification{

  sendMessage(message: string): string {
    return `Email is received Successfully. Message is : ${message}`
  }
}
@Component({
  selector: 'app-interface-example-six',
  imports: [],
  templateUrl: './interface-example-six.html',
  styleUrl: './interface-example-six.css',
})
export class InterfaceExampleSix {

  notify=new EmailNotification();
}
