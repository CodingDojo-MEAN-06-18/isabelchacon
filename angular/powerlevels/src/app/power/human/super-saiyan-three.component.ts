import { Component } from '@angular/core';
import { HumanComponent } from './human.component';

@Component({
  selector: 'app-super-saiyan-three',
  templateUrl: './human.component.html',
  styleUrls: ['./human.component.css']
})
export class SuperSaiyanThreeComponent extends HumanComponent {
  multiplier: number = 250;
}