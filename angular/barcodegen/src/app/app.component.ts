import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Retro Barcode Generator';
  colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

  randomize(){
    return Math.floor(Math.random() * 6) + 1;
  }
}



