import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import {Quote} from "../quote";
@Component({
  selector: 'app-quotes-detail',
  templateUrl: './quotes-detail.component.html',
  styleUrls: ['./quotes-detail.component.css']
})
export class QuotesDetailComponent implements OnInit {
  voteup:number = 0;
  showVote = ""
  @Input() showQuote:Quote;
  @Output() addVote = new EventEmitter();

 
  
  constructor() { }

  ngOnInit() {
  }

}
