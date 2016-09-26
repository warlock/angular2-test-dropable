import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  lol = 'lol'
  lolarray : Array<any> = ["lol","lol2"]

  constructor(){
    setInterval(() => {
      console.log("aaa")
      this.lolarray.push(new Date())
    },3000)
  }


}
