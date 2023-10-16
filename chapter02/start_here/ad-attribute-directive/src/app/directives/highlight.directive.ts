import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnChanges{

  @Input() highlightText = '';
  @Input() highlightColor = 'yellow';
  originalHtml = '';

  constructor(private el: ElementRef) { }

  ngOnChanges(changes: SimpleChanges){
    if(changes.highlightText.firstChange){
      this.originalHtml = this.el.nativeElement.innerHTML;
      return;
    }

    const { currentValue } = changes.highlightText;
    if(currentValue) {
      const regExp = new RegExp(`(${currentValue})`, 'gi');
      console.log(regExp);
      this.el.nativeElement.innerHTML = this.originalHtml.replace(regExp, `<span style="background-color: ${this.highlightColor}">\$1</span>`);
    }else {
      this.el.nativeElement.innerHTML = this.originalHtml;
    }
  }
}
