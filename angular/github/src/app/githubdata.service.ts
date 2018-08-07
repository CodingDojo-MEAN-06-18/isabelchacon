import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'Rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubdataService {

  user: BehaviorSubject <any> = new BehaviorSubject({});

  constructor(private _http: HttpClient ) { }

  retrieveUser(user: string){
    this._http.get(`http://api.github.com/users/keephopealive`).subscribe(
      (user: any) => { this.user.next(user); }
    );
  }

}
