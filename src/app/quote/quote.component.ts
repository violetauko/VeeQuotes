import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[]=[
    new Quote(1, "I hated every minute of training, but I said, 'Don't quit. Suffer now andlive the rest of your life as a champion.'","Muhammed Ali",0, 0),
    new Quote(1, "Change will not come if we wait for some other person or some other time. We are the ones we've been waiting for. We are the change that we seek.", "Barack Obama",0, 0),
    new Quote(1, "Progress is impossible without change, and those who cannot change their minds cannot change anything.", "George Bernard Shaw", 0, 0),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
