import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  url:string="";

  constructor(private http:HttpClient){ } 

  obtenerDatos():Observable<any>{
    return this.http.get(this.url+"");
  }
}
