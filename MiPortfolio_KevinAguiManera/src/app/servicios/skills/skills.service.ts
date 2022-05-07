import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Skills } from './skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  private url:string="http://localhost:8080/viewskills";

  constructor( private http:HttpClient ) {

   }

   get(): any {
    return this.http.get(this.url);
  }
}