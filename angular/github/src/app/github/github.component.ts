import { Component, OnInit } from '@angular/core';
import { GithubdataService } from '../githubdata.service';


@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})

export class GithubComponent implements OnInit {

  request_user: string = '';
  score: number = 0;

  constructor(private _githubService : GithubdataService ) {
   }

  ngOnInit() {
    this._githubService.user.subscribe(
      (userData) => {
        this.score = userData.public_repos + userData.followers;
      }
    )
    this._githubService.retrieveUser(this.request_user);
  }
  
  onSubmit(){
    this._githubService.retrieveUser(this.request_user);
  }


 
}
