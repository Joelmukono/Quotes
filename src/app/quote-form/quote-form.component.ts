import { Component,OnInit,Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  author:string;
  submitter:string;
  quote:string;

  date: Date = new Date();
  newQuote:any;


  constructor() { }

  ngOnInit() {
  }

}
