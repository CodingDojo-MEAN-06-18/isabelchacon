import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-component0',
  templateUrl: './component0.component.html',
  styleUrls: ['./component0.component.css', '../app.component.css']
})
export class Component0Component implements OnInit {

  counter: any = 0;
  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.counter = this._dataService.getCounter();
  }

}
