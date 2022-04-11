import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

@Input() quote!: Quote
@Output() canDelete = new EventEmitter<boolean>();
  upvotes: number=0;
  downvotes: number=0;


upvote(){
  this.upvotes++
}
downvote(){
  this.downvotes++
}

quoteDelete(readquote:boolean){
  this.canDelete.emit(readquote);
}
  
  constructor() { }

  ngOnInit(): void {
  }

}
