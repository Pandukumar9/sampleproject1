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
  }

  getApiData(){
    this.service.getDetails()
    .subscribe(res => {
      console.log(res.meals);
     this.arrayData = [...res.meals];
    })
  }
}
