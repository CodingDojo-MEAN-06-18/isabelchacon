import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css', '../app.component.css']
})
export class Component2Component implements OnInit {

  constructor(private _dataService: DataService) { }

  messages: Array<string> = [];

  ngOnInit() {
    this.messages=this._dataService.messages;
  }

}
