import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchJsonService {
  info:any={};
  cargada=false;
  constructor( private http:HttpClient ) { 
    
  }

  loadInfo() {
    return this.http.get("../../assets/domains/b2b/b2b-pay.json");
  }
}
