import { Component, OnInit } from '@angular/core';
import { interval, of } from 'rxjs';
import { filter, map, switchMap, take } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
@Component({
  selector: 'app-switchmap',
  templateUrl: './switchmap.component.html',
  styleUrls: ['./switchmap.component.css']
})
export class SwitchmapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // of(1,2,3,4).pipe(switchMap(id => {
    //   return ajax(`https://jsonplaceholder.typicode.com/posts/${id}`);
    // })).subscribe((data => {
    //   console.log(data)
    // }))


    interval(30).pipe(
      filter((id) => id >0),
      switchMap((id) =>  {
      return ajax(`https://jsonplaceholder.typicode.com/posts/${id}`).pipe(
        map((data:any) => {
           return data.responce;
        })
      )
    }),
      take(5)
    ).subscribe((data => {
      console.log(data)
    }))
  }

}
