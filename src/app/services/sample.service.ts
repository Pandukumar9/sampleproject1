import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SampleService {
public baseURL = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
public baseURL2 = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian';

  constructor(private _http:HttpClient) { }

  getDetails():Observable<any>{
    return this._http.get<any>(`${this.baseURL}`);
  }

  getDetails2():Observable<any>{
    return this._http.get<any>(`${this.baseURL2}`);
  }


}
