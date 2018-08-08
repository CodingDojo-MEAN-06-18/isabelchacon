import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private starwarsAPI: string = 'https://swapi.co/api';

  planet: object = {name : '',
                    climate : '',
                    terrain : '',
                    population : '',
                    gravity: ''
  };

  //Map my locations to the value for API request
  planetIdx: object = {
                    tatooine: 1,
                    alderaan: 2,
                    yavin: 3,
                    hoth: 4,
                    dagobah: 5,
                    endor: 7
  }

  planetInfo: BehaviorSubject<any> = new BehaviorSubject(this.planet);

  constructor(private http: HttpClient) {
   }


  fetchData(newlocation){
    const locationURL = this.planetIdx[newlocation];
    return this.http.get(`${this.starwarsAPI}/planets/${locationURL}`).toPromise()
      .then((planet) => {
        const newPlanet = {
          name : planet['name'],
          climate : planet['climate'],
          terrain : planet['terrain'],
          population : planet['population'],
          gravity: planet['gravity']
        };
        this.planetInfo.next(newPlanet);})
      .catch((err) => {
        this.planetInfo.next(err);
      });
  }
}
