import { Component, OnInit } from '@angular/core';
import {User} from './user';
import { SampleService } from '../services/sample.service';

@Component({
  selector: 'app-tdfforms',
  templateUrl: './tdfforms.component.html',
  styleUrls: ['./tdfforms.component.css']
})
export class TdfformsComponent implements OnInit {

  public course =['.net','html','css','angular'];
  topicHasError = true;
  staticData = new User('arun','arun@gmail.com',14234324,'default','male',true);
  submitted = false;
  errorMsg ='';

  constructor(private _enrollmentService: SampleService) { }
  public subjects = [
    {'id':1,'name':'pandu','course':'html'},
    {'id':2,'name':'manoher','course':'css'},
    {'id':3,'name':'sai','course':'anglar'}
  ]
  myArray = ['Hardik', 'Paresh', 'Vimal', 'Harshad', 'Kiran'];

  ngOnInit(): void {
    this.duplicateArray();
  }
  uniqueArray:any[]=[];
  duplicateArray(){
    const arr = [1,2,3,4,5,5,5,5,5];

    this.uniqueArray = Array.from(new Set(arr)); 
 
    console.log(this.uniqueArray);
    
  }

  validateTopic(value){
   if (value === 'default'){
     this.topicHasError =true;
   }else{
    this.topicHasError =false;
   }
  }

  onSubmit(){
    // console.log(this.staticData);
    this.submitted = true;
    this._enrollmentService.enroll(this.staticData)
    .subscribe(
      data => console.log('success',data),
      error => this.errorMsg = error.statusText
    );
  }
  onAdd(x){
   alert(x);
  }
  data:number;
  mul:number;

  name:string;
  sam:string;

  sam1:string;

  ramesh(santhosh){
    alert(santhosh);
    this.sam1=santhosh;
  }

  nums =[1, 2, 3, 4,5,6,7,8];

  addNumber(number: number) {    
    this.nums.push(number);
}
public items = ['java','html','css'];

 // Create an array of objects
  //           books = [ 'pandu','sai','ravi','mani','pandu' ];

  
   // OR
;

   // result for both of them is [1,2,3,4,5]
   //uniqueArray = this.arr.filter((el, idx) => this.arr.indexOf(el) === idx);
  // arr = [1,2,3,4,5,5,5,5,5];
  
}
