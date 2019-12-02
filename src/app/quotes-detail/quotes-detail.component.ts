import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import {Quote} from "../quote";
@Component({
  selector: 'app-quotes-detail',
  templateUrl: './quotes-detail.component.html',
  styleUrls: ['./quotes-detail.component.css']
})
export class QuotesDetailComponent implements OnInit {
  voteUp:number = -1;
  voteDown:number = -1;
  showUpVote = "";
  showDownVote = "";
  @Input() showQuote:Quote;
  @Output() addVote = new EventEmitter();

  upVote(){
    this.voteUp = this.voteUp;
    
    this.voteUp = this.voteUp+1;

   

    this.showUpVote = "" +this.voteUp;
 
  } 

  downVote(){
    this.voteDown = this.voteDown+1;
    
    this.showDownVote = ""+this.voteDown;
  }
  
  constructor() { }

  ngOnInit() {
  }

}
