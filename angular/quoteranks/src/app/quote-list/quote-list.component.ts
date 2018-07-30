import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() quoteArr: Array<Quote>;

  handleDelete(quote){
    //console.log("Delete "  + event);
    const idx = this.quoteArr.indexOf(quote);
    this.quoteArr.splice(idx, 1);
  }

  handleUpdate(){
    this.quoteArr = [...this.quoteArr];
  }
  
}
