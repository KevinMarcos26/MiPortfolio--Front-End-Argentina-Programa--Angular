import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  
  
  api = 'https://localhost:3000/api';
    
  token:any; 

  constructor(private http:HttpClient, private router:Router) { }

  login(email: string, password: string) {
    this.http.post(this.api + '/authenticate', {email: email, password: password})
    .subscribe((resp: any) => {
      //redirection
      this.router.navigate(['profile'])
      //saving token
      localStorage.setItem('authToken', resp.token);
    })
    }

    //close session
    logOut(){
      localStorage.removeItem('token');
    }

    //verify session
    public get logIn(): boolean {
      return (localStorage.getItem('token') !== null)
    }
  }