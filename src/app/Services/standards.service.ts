import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StandardsService {

  constructor( private http:HttpClient) { }
    getstand(){
      let STAND_API="https://mrp-function-app-1.azurewebsites.net/api/StandardsPage";
      return this.http.get(STAND_API);
  }
}
