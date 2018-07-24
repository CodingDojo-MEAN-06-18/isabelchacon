import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Switchboard';
  switches =[1,0,1,0,1,1,1,1];

  on(index){
    this.switches[index]=1;
  }

  off(index){
    this.switches[index]=0;
  }
}
