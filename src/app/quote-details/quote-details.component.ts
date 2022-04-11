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

quoteDelete(readquote:boolean){
  this.canDelete.emit(readquote);
}



  upvotes=0
  downvotes=0
  upvote(){
    this.upvotes++
  }
  downvote(){
    this.downvotes++
  }
  constructor() { }

  ngOnInit(): void {
  }

}
