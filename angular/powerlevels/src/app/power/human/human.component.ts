import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-human',
  templateUrl: './human.component.html',
  styleUrls: ['./human.component.css']
})
export class HumanComponent implements OnChanges {
  @Input()
  currentPower:number;
  multiplier:number = 1;
  message:string;

  appName = this.constructor.name;
  ngOnChanges() {    
    this.currentPower = this.multiplier * this.currentPower;
    if(this.currentPower >= 50000) {
      this.message = "The One!";
    } else if(this.currentPower > 20000) {
      this.message = "Superlative!";
    } else if(this.currentPower > 9000) {
      this.message = "Over 9000!";
    } else {
      this.message = "";
    }
  }
}
