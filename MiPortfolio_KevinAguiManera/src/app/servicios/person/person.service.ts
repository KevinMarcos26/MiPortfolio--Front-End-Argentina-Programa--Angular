import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private url:string="http://localhost:8080/viewperson";

  constructor( private http:HttpClient ) { 

  }

  get(): any {
    return this.http.get(this.url);
  }

  create(person:Person[]):Observable<Person[]> {
    return this.http.post<Person[]>(this.url, person);
  }
  
}