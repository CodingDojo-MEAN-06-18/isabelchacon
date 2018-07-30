import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Quote } from '../quote';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  quo: Quote = new Quote();

  @Output() onQuoteSubmit = new EventEmitter();

  handleQuoteSubmit(e:Event , form: NgForm){
    this.quo.id  = uuidv4();
    this.onQuoteSubmit.emit(this.quo);
    this.quo = new Quote();
    form.reset();
  }
}
