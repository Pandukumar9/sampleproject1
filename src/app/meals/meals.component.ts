import { Component, OnInit } from '@angular/core';
import { SampleService } from '../services/sample.service';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class MealsComponent implements OnInit {

  arrayData2 =[];
  constructor(private service:SampleService){

  }
  ngOnInit(){
    this.getApiData2();
  }

  getApiData2(){
    this.service.getDetails2()
    .subscribe(res => {
      console.log(res.meals);
     this.arrayData2 = [...res.meals];
    })
  }
}
