import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  numbers: number[] = [1,2,3];

  constructor() { }

  retrieve(): number[]{
    return this.numbers;
  }

  add(num: number){
    this.numbers.push(num);
  }

}
