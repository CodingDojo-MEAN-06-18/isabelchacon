import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css', '../app.component.css']
})
export class Component1Component implements OnInit {

  constructor(private _dataService: DataService) { }

  ngOnInit() {
  }

  getPoints(type: number){
    this._dataService.updateGold(type);
  }


}
