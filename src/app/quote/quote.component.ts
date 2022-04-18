import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
 

  quotes:Quote[]=[
    new Quote(1, "I hated every minute of training, but I said, 'Don't quit. Suffer now andlive the rest of your life as a champion.'","Muhammed Ali",0,0,"Ellah", new Date(2022,3,2)),
    new Quote(2, "When we are no longer able to change a situation - we are challenged to change ourselves."," Viktor E. Frankl",0,0,"Joe",new Date(2022,3,13)),
    new Quote(3, "Progress is impossible without change, and those who cannot change their minds cannot change anything.", "George Bernard Shaw",0, 0,"Vee",new Date(2022,2,14))
  ]


  addVotes(index:number){
    this.quotes[index].upvotes++;
  }
  quoteDelete(index:number){
    if (this.quotes.length > index) {
      let toDelete = confirm(`Do you really want to delete this quote?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  addNewQuote(quote:any){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.postDate = new Date(quote.postDate);
    this.quotes.push(quote)
  }

  ishighestVotes() {
        
    let highestupvote: number
    let quoteWithHighest= this.quotes[0]

    for (let count = 0; count < this.quotes.length; count++) {
      if (this.quotes[count].upvotes > quoteWithHighest.upvotes ) {
        quoteWithHighest = this.quotes[count];
      }
    }

    highestupvote = quoteWithHighest.upvotes
    return highestupvote;
  }
  
  constructor() { }
  
  ngOnInit(): void {
  }

}
