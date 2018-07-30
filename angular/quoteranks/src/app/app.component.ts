import { Component } from '@angular/core';
import { Quote } from '../app/quote';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Array<Quote> = [
    {id: '1', content: 'I never am really satisfied that I understand anything; because, understand it well as I may, my comprehension can only be an infinitesimal fraction of all I want to understand about the many connections and relations which occur to me.', author: 'Ada Lovelace', votes: 25},
    {id:'2', content: 'To be, or not to be', author: 'Prince Hamlet', votes: 2},
    {id: '3', content: 'There are risks and costs to action. But they are far less than the long range risks of comfortable inaction.', author: 'John F. Kenndy', votes: 23}
  ];

  addQuote(newquote: Quote){
    //console.log("Author:" + newquote.author + "Content: "+ newquote.content);
    this.quotes.push (newquote);
    //console.log(this.quotes);
  }

}
