import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Projects } from './projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private url:string="http://localhost:8080/viewprojects";

  constructor( private http:HttpClient ) { 

  }

  get(): any {
    return this.http.get(this.url);
  }
}