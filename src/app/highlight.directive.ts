import { Directive, ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {


   constructor(private elem:ElementRef){}

  @HostListener("click") onClicks(){
    this.color("purple")
  }

  @HostListener("dblclick") onDoubleClicks(){
    this.color("white")
  }

  private color(action:string){
    this.elem.nativeElement.style.color=action;

  }
}