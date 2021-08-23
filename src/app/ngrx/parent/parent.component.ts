import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush //1  //3
})
export class ParentComponent implements OnInit {

  constructor(private cdr:ChangeDetectorRef) { 
   // this.cdr.detach();  //2 its works like onpush
   //this.cdr.reattach();  //3 all works but effect all so we need to use markforcheck again
   if(this.value){
     this.cdr.detach();
   }else{
     this.cdr.reattach();
   }
  }
  parentmsg;
  @Input() value;
  ngOnInit(): void {
    setTimeout(() =>{
      this.parentmsg="welcome";
      this.cdr.markForCheck(); //1  // 3
      //this.cdr.detectChanges();  //2
    },2000)
  }

  triggerParent(){
    console.log("parent triggered");
  }
}
