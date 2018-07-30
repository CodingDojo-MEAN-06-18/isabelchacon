import { Component } from '@angular/core';
import { HumanComponent } from './human.component';

@Component({
  selector: 'app-super-saiyan-two',
  templateUrl: './human.component.html',
  styleUrls: ['./human.component.css']
})
export class SuperSaiyanTwoComponent extends HumanComponent {
  multiplier: number = 150;
}