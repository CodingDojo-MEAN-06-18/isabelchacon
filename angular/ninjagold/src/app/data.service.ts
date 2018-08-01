import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root'
})
export class DataService {
  counter: any = { gold: 0 };
  messages: Array<string> = [];
  constructor() { } 

  getCounter(){
    return this.counter;
  }

  updateGold(type: number){
    const map = [Math.trunc(Math.random() * 3 + 2), Math.trunc(Math.random() * 5 + 5), Math.trunc(Math.random() * 100 - 50), Math.trunc(Math.random() * 8 + 7)];
    
    this.counter.gold += map[type];

    const stringmap = ["Farm", "Cave", "Casino", "House"];

    const string = map[type] < 0 ? `Lost ${map[type]} gold from ${stringmap[type]}` : `Earned ${map[type]} gold from ${stringmap[type]}`;

    this.messages.push(string);
    console.log(this.messages);

  }

  
}
