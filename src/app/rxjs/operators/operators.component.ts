import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit {

  constructor() { }
  // biggenerCourses$: Observable<Course[]>;
  
  // advancedCourses$: Observable<Course[]>;
  ngOnInit(){
    // const http$ = observable.create(observer => {
    //   fetch(api/courses)
    //   .then(responce => {
    //       return responce.json();
    //   })
    //   .then(body => {
    //     observer.next(body);
    //     observer.complete();
    //   })
    //   .catch(err => {
    //     observer.error(err);
    //   })
    // })

    // http$.subscribe(
    //   courses =>console.log(courses);
    //   () => {};
    //   () => console.log("completed");
    // )


//example 2

  //   const http$ = createHttpObservable('/api/courses');

  //   http$.subscribe(
  //     courses =>console.log(courses);
  //     () => {};
  //     () => console.log("completed");
  //   )
  //  import util file

  //  const courses$ = http$
  //  .pipe(
  //    map(res => Object.values(res["Payload"]))
  //  ); 

// this.biggenerCourses$ = http$
// .pipe(
//   .map(courses =>courses 
//      filter(course => course.category == 'BEGINNER')
//      );
// )

// this.advancedCourses$ = http$
// .pipe(
//   .map(courses =>courses 
//      filter(course => course.category == 'ADVANCED')
//      );
// )

  
  }



}
