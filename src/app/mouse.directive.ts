import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMouse]'
})
export class MouseDirective {

  constructor(private elRef: ElementRef) {   
  }  
  @HostListener('mouseover') onMouseOver() {  
    this.changeBackgroundColor('orange');  
  }  
  @HostListener('mouseleave') onMouseLeave() {  
    this.changeBackgroundColor('green');  
  }  
  private changeBackgroundColor(color: string) {  
    this.elRef.nativeElement.style.backgroundColor = color;  
  }    

}
