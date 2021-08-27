import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../tdfforms/user';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SampleService {
public baseURL = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
public baseURL2 = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian';
public baseURL3 = 'https://reqres.in/api/users?delay=3';
  constructor(private _http:HttpClient) { }

  getDetails():Observable<any>{
    return this._http.get<any>(`${this.baseURL}`);
  }

  getDetails2():Observable<any>{
    return this._http.get<any>(`${this.baseURL2}`);
  }

  geturlData():Observable<any>{
    return this._http.get<any>(`${this.baseURL3}`);
  }

  _Url ='http://localhost:3000/enroll';
  enroll(users: User){
    return this._http.post<any>(this._Url, users)
    .pipe(catchError(this.errorHandler))
  }
  errorHandler(error: HttpErrorResponse){
      return throwError(error);
  }

}
