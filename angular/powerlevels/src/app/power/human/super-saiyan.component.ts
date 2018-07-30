import { Component } from '@angular/core';
import { HumanComponent } from './human.component';

@Component({
  selector: 'app-super-saiyan',
  templateUrl: './human.component.html',
  styleUrls: ['./human.component.css']
})
export class SuperSaiyanComponent extends HumanComponent {
  multiplier: number = 90;
}