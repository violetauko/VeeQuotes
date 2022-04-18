import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {


  @Input()
  quote!: Quote;
  @Output() canDelete = new EventEmitter<number>();
  @Output() addVotes = new EventEmitter<number>();
  downvotes: number=0;


upvote(id:number){
  this.addVotes.emit(id);
}
downvote(){
  this.downvotes++
}

quoteDelete(id:number){
  this.canDelete.emit(id);
}
  
  constructor() { }

  ngOnInit(): void {
  }

}
