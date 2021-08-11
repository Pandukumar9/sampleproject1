import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustamdirective]'
})
export class CustamdirectiveDirective {

  constructor(private el:ElementRef) { 
    this.el.nativeElement.style.color= "red";
  }

 @HostListener('mouseenter') mouseEnter(){
   this.changeColor("green");
 }

 @HostListener('mouseleave') mouseLeave(){
  this.changeColor("red");
}

 changeColor(color){
  this.el.nativeElement.style.color=color;
 }

}
