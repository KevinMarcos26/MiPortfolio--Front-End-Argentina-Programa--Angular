import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Experiencia } from './experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  private url:string="http://localhost:8080/viewexperience";

  constructor( private http:HttpClient ) { 

  }

  get(): any {
    return this.http.get(this.url);
  }
}