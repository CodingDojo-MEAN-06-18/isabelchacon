import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { Quote } from '../../quote';

@Component({
  selector: 'app-quo',
  templateUrl: './quo.component.html',
  styleUrls: ['./quo.component.css']
})
export class QuoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() quote: Quote;
  @Output() deletequote= new EventEmitter();
  @Output() updatequote = new EventEmitter();

  voteup(quote){
    quote.votes ++;
    this.updatequote.emit();
  }

  votedown(quote){
    quote.votes --;
    this.updatequote.emit();
  }

  delete(quote){
    this.deletequote.emit(quote);
  }
}
