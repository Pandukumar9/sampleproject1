import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appCustomTheme]'
})
export class CustomThemeDirective {

  @Input() tcolor: string;  
    @Input() bcolor: string;  
    @Input() tsize: string;   
    constructor(private elRef: ElementRef) {  
    }  
    ngAfterViewInit(): void {  
       this.tcolor = this.tcolor || 'red';  
       this.bcolor = this.bcolor || 'orange';  
       this.tsize = this.tsize || '40px';  
       this.elRef.nativeElement.style.color = this.tcolor;  
       this.elRef.nativeElement.style.backgroundColor = this.bcolor;  
       this.elRef.nativeElement.style.fontSize = this.tsize;  
    }    

}
