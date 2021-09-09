import { Component, OnInit } from '@angular/core';

export class Stduent {
  email:string;
  password:string;
  adress1:string;
  adress2:string;
  city:string;
  state:string;
  zip:string;
  isvalid:boolean;
  fname:string;
  lname:String;
  branch:string;
  yop:string;
}

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  studentdata: Stduent = new Stduent();
  submitted:boolean=false;
  hiding:boolean=false;

  onSubmit(){
    
    console.log(this.studentdata); 
  }

  saving(){
    alert("successfully submitted...")
    this.hiding=true;
  }
}
