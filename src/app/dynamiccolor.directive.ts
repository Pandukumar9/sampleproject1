import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDynamiccolor]'
})
export class DynamiccolorDirective {

  @Input('appDynamiccolor') appDynamiccolor: string;  
  @Input() defaultValue: string;  
  constructor(private elRef: ElementRef) {  
  }  
  @HostListener('mouseover') onMouseOver() {  
    this.changeBackgroundColor(this.appDynamiccolor || this.defaultValue);  
  }  
  @HostListener('mouseleave') onMouseLeave() {  
    this.changeBackgroundColor('white');  
  }  
  private changeBackgroundColor(color: string) {  
    this.elRef.nativeElement.style.backgroundColor = color;  
  }    
}
