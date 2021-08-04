import { Component, OnInit } from '@angular/core';
import { SampleService } from '../services/sample.service';

@Component({
  selector: 'app-mealslist',
  templateUrl: './mealslist.component.html',
  styleUrls: ['./mealslist.component.css']
})
export class MealslistComponent implements OnInit {

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
