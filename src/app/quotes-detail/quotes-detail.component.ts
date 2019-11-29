import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import {Quote} from "../quote";
@Component({
  selector: 'app-quotes-detail',
  templateUrl: './quotes-detail.component.html',
  styleUrls: ['./quotes-detail.component.css']
})
export class QuotesDetailComponent implements OnInit {
  voteUp:number = 0;
  showVote = ""
  @Input() showQuote:Quote;
  @Output() addVote = new EventEmitter();

  upVote(){
    this.voteUp = this.voteUp + 1;
    this.showVote  = "" + this.voteUp
 
  } 

  downVote(){
    this.voteUp = this.voteUp-1;
    this.showVote = ""+this.voteUp;
  }
  
  constructor() { }

  ngOnInit() {
  }

}
