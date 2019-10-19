import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '.appAppSimpleStyle'
})
export class SimpleStyleDirective {

  constructor(private eleRef: ElementRef) {
    eleRef.nativeElement.style.color = "red"
  }

}