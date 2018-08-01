import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-gamma',
  templateUrl: './gamma.component.html',
  styleUrls: ['./gamma.component.css']
})
export class GammaComponent implements OnInit {

  diff: number = 0;
  clicked : boolean = false;
  constructor(private _dataService: DataService) { }

  ngOnInit() {
  }

  getDiff(){
    this.diff = this._dataService.gamma();
    this.clicked = true;
  }

}
