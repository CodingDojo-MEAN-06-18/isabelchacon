import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../weather.service';
import { switchMap, map, tap } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent implements OnInit{

  newlocation: string = '';
  pictureURL: string;
  tie: boolean = false;
  planet: object = {name : '',
                    climate : '',
                    terrain : '',
                    population : '',
                    gravity: ''
  };

  constructor(@Inject(DOCUMENT) document, private _route:ActivatedRoute, private _service: WeatherService) { }

  ngOnInit() {
    this.tie = true;
    //document.getElementsByClass('element').addEventListener("click", () => console.log("flying"));
    this._route.paramMap
      .pipe(
        map(params => params.get('location')),
        tap(id => {this.newlocation = id; this.tie=false}),
        switchMap(id => this._service.fetchData(id)))
      .subscribe(
          (planet) => {
            this.tie = true;  
            this.planet = planet;
            this.pictureURL = `../../assets/img/${this.newlocation}.jpg`;
          }
      );
  }

}

