import { Component } from '@angular/core';

interface AuthService{
  login(username:string,password:string):boolean

  logout():void
}

class DemoAuth implements AuthService{

  login(username:string,password:string){
    return username==='admin' && password==='admin@1234'
  }

  logout(): void {
    console.log('User has logged Out !!!!')
  }
}

@Component({
  selector: 'app-interfacethree',
  imports: [],
  templateUrl: './interfacethree.html',
  styleUrl: './interfacethree.css',
})
export class Interfacethree {

    auth=new DemoAuth();
    message=''

    doLogin(){
      const result=this.auth.login('admin','admin@1234');
      this.message=result?'Login Successful':'Invalid Credentials ';
    }
}
