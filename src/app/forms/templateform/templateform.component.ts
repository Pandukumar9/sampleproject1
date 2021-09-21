import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
export class User {
  firstname:string;
  lastname: string;
  phone:number;
  select1:string;
  gender:string;
  isActive:boolean;
}
@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {
  topicHasError: boolean;

  constructor() { }
  public course =['.net','html','css','angular'];
  ngOnInit(): void {
  }
  userdata:User = new User();
  
  // staticData = new User('arun','arun@gmail.com',14234324,'default','male',true);
  submitted = false;
  errorMsg ='';

  onSubmit(){
    console.log(this.userdata);
    alert("successfully submitted....!");
    this.userdata = new User();

    //  this.submitted = true;
    //  this._enrollmentService.enroll(this.staticData)
    //  .subscribe(
    //    data => console.log('success',data),
       
    //    error => this.errorMsg = error.statusText,
       
    //  );
  }

  validateTopic(value){
    if (value === 'default'){
      this.topicHasError =true;
    }else{
     this.topicHasError =false;
    }
   }
}
