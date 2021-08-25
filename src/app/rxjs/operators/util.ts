import { observable } from "rxjs";

  export function createHttpObservable(url:string){
      return observable.create(observer => {
          fetch(api/courses)
          .then(responce => {
              return responce.json();
          })
          .then(body => {
            observer.next(body);
            observer.complete();
          })
          .catch(err => {
            observer.error(err);
          })
        })
   }