import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  alphanumbers: number[] = [];
  betanumbers: number[] = [];

  constructor() { }

  getnumbers(num: number): number[] {
    return num == 1 ? this.alphanumbers : this.betanumbers;
  }

  pushnumbers(comp: number): void {
    if (comp == 1 ){
      this.alphanumbers = [...this.alphanumbers, Math.trunc(Math.random() * 100)];
      //console.log (this.alphanumbers);
    }
    else {
      this.betanumbers = [...this.betanumbers, Math.trunc(Math.random() * 100)]
    }
  }

  gamma(): number{
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return (this.alphanumbers.reduce(reducer) - this.betanumbers.reduce(reducer));
  }

}
