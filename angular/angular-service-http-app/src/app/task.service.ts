import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'Rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class TaskService {

  tasks: BehaviorSubject<any[]> = new BehaviorSubject([]);

  constructor(private _http: HttpClient) { 
    this.retrieveTask();
  }

  retrieveTask(){
    this._http.get('http://5b62842712fe9900141d2ede.mockapi.io/task').subscribe(
      (serverTasks: any[]) => { this.tasks.next(serverTasks); }
    );
  }

  addTask(newTask: any){
    this._http.post('http://5b62842712fe9900141d2ede.mockapi.io/task', newTask).subscribe(
      (response) => { this.retrieveTask(); }
    );
  }
  
}
