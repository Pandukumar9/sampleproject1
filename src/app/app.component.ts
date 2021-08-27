import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { SampleService } from './services/sample.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  name = '';
  arrayData =[];
  constructor(private service:SampleService){

  }
  ngOnInit(){
    this.getApiData();
    this.getApidata2();
  }

  getApiData(){
    this.service.getDetails()
    .subscribe(res => {
      console.log(res.meals);
     this.arrayData = [...res.meals];
    })
  }
   
  scholdata: any[]=[];
  getApidata2(){
    this.service.geturlData()
    .subscribe((res:any) => {

      console.log(typeof(res ));
      this.scholdata.push(res);
      console.log(this.scholdata );

      let arr = [];  
      Object.keys(res).map(function(key){  
          arr.push({[key]:res[key]})  
          // this.scholdata.push(arr);
          return arr;  
      });  
      console.log('Object=',res)  
      console.log('Array=',arr) 
       
        
    });
    
  }


}
