import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
 

  quotes:Quote[]=[
    new Quote(1, "I hated every minute of training, but I said, 'Don't quit. Suffer now andlive the rest of your life as a champion.'","Muhammed Ali",0,0,new Date(2022,4,12)),
    new Quote(2, "When we are no longer able to change a situation - we are challenged to change ourselves."," Viktor E. Frankl",0,0,new Date(2022,4,12)),
    new Quote(3, "Progress is impossible without change, and those who cannot change their minds cannot change anything.", "George Bernard Shaw",0, 0, new Date(2022,4,12))
  ]

  arr: number[]=this.quotes.map(quote=>quote.upvotes)
  ishighestVotes=Math.max(...this.arr)

  quoteDelete(canDelete:boolean, index:number){
    if (canDelete) {
      let toDelete = confirm(`Do you really want to delete this quote?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  addNewQuote(quote:any){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.postDate = new Date(quote.postDate)
    this.quotes.push(quote)
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
