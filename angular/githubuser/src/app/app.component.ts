import { Component, OnInit } from '@angular/core';
import { GithubService } from '../app/github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Github Score';
  score: number = -1;
  username: string = '';
  submitted: boolean = false;

  constructor (private _gitService: GithubService){}

  ngOnInit() {
    this._gitService.score.subscribe(
      (score) => this.score = score);
  }

  onSubmit(){
    this._gitService.retrieveUser(this.username);
    this.submitted = true;
  }

}
