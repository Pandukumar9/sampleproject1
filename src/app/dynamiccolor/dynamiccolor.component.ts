import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamiccolor',
  templateUrl: './dynamiccolor.component.html',
  styleUrls: ['./dynamiccolor.component.css']
})
export class DynamiccolorComponent implements OnInit {

  constructor() { }
  txtsize = '25px';  
  colors = ['CYAN', 'GREEN', 'YELLOW'];  
  myColor = '';  
  ngOnInit(): void {
  }

}
