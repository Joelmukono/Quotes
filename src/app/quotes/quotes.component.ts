import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  

  newQuotes : Quote[] = [
    new Quote("Arnorld","Mukono","I'll be back",new Date()),
  ]

  deleteQuote(index){
    this.newQuotes.splice(index,1)

  }

  addNewQuote(quote:any){
    
    this.newQuotes.push(quote);

  }

  
  constructor() { }

  ngOnInit() {
  }

}
