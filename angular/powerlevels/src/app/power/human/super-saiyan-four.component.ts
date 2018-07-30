import { Component } from '@angular/core';
import { HumanComponent } from './human.component';

@Component({
  selector: 'app-super-saiyan-four',
  templateUrl: './human.component.html',
  styleUrls: ['./human.component.css']
})
export class SuperSaiyanFourComponent extends HumanComponent {
  multiplier: number = 500;
}