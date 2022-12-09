import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ByCountryService {
  // public BYCOUNTRYAPI=`https://mrp-function-app-1.azurewebsites.net/api/DocumentwiseSourceDetails`

  // constructor(private http:HttpClient) {}
  // getByCountry():Observable<any>{
  //   return this.http.get(`${this.BYCOUNTRYAPI}`)
  // }

  constructor(private http:HttpClient) { }
  getbytag(){
    let url="https://mrp-function-app-1.azurewebsites.net/api/DocumentwiseSourceDetails";
    return this.http.get(url);
  }
  
}
