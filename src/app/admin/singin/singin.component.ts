import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../singup/singup.component';


@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit {
  Admindata: Admin = new Admin();
  submitted:boolean=false;
  constructor(private route:Router) { }

  ngOnInit(){
  }
name:any;
  onSubmit(){
 console.log(this.Admindata);
 
  }

  onsave(){
    this.name =  localStorage.setItem('username',"apkd123a");
    alert("hello");
 if(this.name  == ''){
   alert("please enter valid usename and apaassword");
 }else{
  this.route.navigate(['signin']);

 }
  }

}
