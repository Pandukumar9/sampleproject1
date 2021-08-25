import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, timer } from 'rxjs';

@Component({
  selector: 'app-example2',
  templateUrl: './example2.component.html',
  styleUrls: ['./example2.component.css']
})
export class Example2Component implements OnInit {

  constructor() { 
    document.addEventListener('click', evt => {
      console.log(evt);
    })

    let counter =0;
    setInterval(() => {
      console.log(counter)
      counter++;
    },1000)

    setTimeout(() => {
      console.log("...finished");
    }, 3000);

  }

  ngOnInit() {

    document.addEventListener('click', evt => {
      console.log(evt);

      setTimeout(() => {
        console.log("...finished");

        let counter =0;
        setInterval(() => {
          console.log(counter)
          counter++;
        },1000)
    
      }, 3000);
    })

   //example 3 streams

   const interval$ = interval(1000);

   interval$.subscribe(valu => {console.log("stream 1 =>"+ valu)});

   interval$.subscribe(valu => {console.log("stream 2 =>"+ valu)});

  //sep
   const interval1$ = timer(3000,1000);

   interval$.subscribe(valu => {console.log("stream 3 =>"+ valu)});

   //sep
   const click$ = fromEvent(document,'click');

   click$.subscribe(
     evet => console.log(evet),
     err => console.log(err),
     () => console.log("..completed")
     
     );

  //sep

     const interval2$ = interval(1000);

    const sub$ = interval2$.subscribe(valu => {console.log("stream 1 =>"+ valu)});

    setTimeout(() => sub$.unsubscribe(), 5000);
    
  }

}
