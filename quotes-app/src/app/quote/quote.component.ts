import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
  new Quote(1,'Marylin Monroe','I am selfish,impatient and a little insecure.I make mistakes,I am out of control and at times hard to handle.But if you cant handle me at my worst then you sure as hell dont deserve me at my best.','admin', new Date(2020,5,10)),
  new Quote( 2,'Oscar Wilde','Be yourself; everyone else is already taken','admin',new Date(2020,5,10)),
  new Quote(3,'Albert Einstein','Two things are infinite;the universe and human stupidity;and I am not sure about the universe','admin',new Date(2020,5,10))  
  
]

showDescription= false;//boolean setting to hide and display

  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

    deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Do you want to delete this Quote? ${this.quotes[index].name}`)//alert

      if (toDelete) { this.quotes.splice(index, 1) }//removes quote
    }
  }

  toggleQuote() {
    this.showDescription = !this.showDescription;//show or hide content
  }



ngOnInit() {
}

}
