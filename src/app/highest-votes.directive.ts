import { Directive ,ElementRef} from '@angular/core';

@Directive({
  selector: '[appHighestVotes]'
})
export class HighestVotesDirective {

  constructor(private elem:ElementRef) {
    this.elem.nativeElement.style.textDecorationColor='red';

   }

}
