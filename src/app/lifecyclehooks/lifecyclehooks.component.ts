import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecyclehooks',
  templateUrl: './lifecyclehooks.component.html',
  styleUrls: ['./lifecyclehooks.component.css']
})
export class LifecyclehooksComponent implements OnInit,OnChanges,DoCheck{

  @Input() myNumber : number;
  constructor() { }
  ngOnChanges(chnages: SimpleChanges){
    const newNumberChange: SimpleChange= chnages.myNumber;
    console.log("OnChanges() -> previous value: ",newNumberChange.previousValue);
    console.log("OnChanges() -> current value: ",newNumberChange.currentValue);
      }
  ngOnInit() {
    console.log("ngOnInit() -> value: ",this.myNumber);
  }
  ngDoCheck(){
    console.log("ngDoCheck() -> value: ",this.myNumber);
  }
  ngAfterContentInit(){
    console.log("ngAfterContentInit() -> only get called once");
  }
  ngAfterContentChecked(){
    console.log("ngAfterContentChecked() -> it get called every change ");
  }
  ngAfterViewInit(){
    
    console.log("ngAfterViewInit() -> it get called only once after ngAfterContentChecked");
  }
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked() -> it gets called every time after ngAfterContentInit");
  }
  ngOnDestroy(){
    console.log("component has destroyed!!");
  }

}
