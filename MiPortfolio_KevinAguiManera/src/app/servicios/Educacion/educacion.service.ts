import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Educacion } from './educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  private url:string="http://localhost:8080/vieweducation";

  constructor( private http:HttpClient ) { 

  }
  
  get(): any {
    return this.http.get(this.url);
  }
}