import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appScrollTo]'
})
export class ScrollToDirective {

  @Input() target = '';
  @HostListener('click') onClick() {
    // console.log(this.target);
    const targetElement = document.querySelector(this.target);
    targetElement.scrollIntoView({behavior: 'smooth'});
  }

  constructor() { }

}
