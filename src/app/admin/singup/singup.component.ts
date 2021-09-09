import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
export class Admin {
  username:string;
  password:string;
}

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})

export class SingupComponent implements OnInit {

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
  console.log(this.Admindata);

 }
  }

}
