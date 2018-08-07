import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from '../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  score: BehaviorSubject <number> = new BehaviorSubject(-2);

  constructor(private http: HttpClient) { }
  
  retrieveUser(username: string){
    this.http.get(`http://api.github.com/users/${username}`).subscribe(
      (user) => {this.score.next(user['followers'] + user['public_repos']);},
      (error) => this.score.next(-1)
    );
  
  }


}
