import { Component } from '@angular/core';
import { HumanComponent } from './human.component';

@Component({
  selector: 'app-saiyan',
  templateUrl: './human.component.html',
  styleUrls: ['./human.component.css']
})
export class SaiyanComponent extends HumanComponent {
  multiplier:number = 10;
}