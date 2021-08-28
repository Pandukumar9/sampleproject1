import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { concatMap, map } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';


@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.css']
})
export class ConcatComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    of(1,2,3,4).pipe(concatMap(id => {
      return ajax(`https://jsonplaceholder.typicode.com/posts/${id}`).pipe(
        map((data:any) => {
           return data.responce;
        })
      )
    })).subscribe((data => {
      console.log(data)
    }))
  }

}
