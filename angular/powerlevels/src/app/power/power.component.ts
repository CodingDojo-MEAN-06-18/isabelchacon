import { Component } from '@angular/core';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent {
  initialPower:number = 1;
  onSubmit(data) {
    console.log('submitted data', data.value.initialPower);
    this.initialPower = data.value.initialPower;
  }
}
