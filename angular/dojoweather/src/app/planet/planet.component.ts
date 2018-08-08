import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent implements OnInit {

  newlocation: string = '';
  pictureURL: string;
  tie: boolean = false;
  planet: object = {name : '',
                    climate : '',
                    terrain : '',
                    population : '',
                    gravity: ''
  };

  constructor(private _route:ActivatedRoute, private _service: WeatherService) { 
    this._route.paramMap.subscribe( params => {
      this.newlocation = params.get('location');
      this._service.fetchData(this.newlocation);
      this.tie = false;
    })
  }

  ngOnInit() {
    this._service.planetInfo.subscribe(
      (planet) => {
        this.planet = planet;
        this.pictureURL = `../../assets/img/${this.newlocation}.jpg`;
        this.tie = true;
      },
      (err) => {
        //error
      });
  }

}
