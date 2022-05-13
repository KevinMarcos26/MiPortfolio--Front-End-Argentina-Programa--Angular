import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/interfaces/ipersona';
import { TraerInfoService } from 'src/app/servicios/traer-info.service';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public personas!: Persona[];
  public pathPersona: String = "home";
  public edit! : Persona;
  public isUserLogged: Boolean = false;

  constructor( private infoService : TraerInfoService,
    private loginService : LoginService  ) { 

  }

  ngOnInit(): any {
    this.isUserLogged = this.loginService.isUserLogged();
    this.getPersonas();
  }

  public getPersonas(): any {
    this.infoService.getInfo(this.pathPersona).subscribe({
      next: (response: Persona[]) => 
        (this.personas = response),
      
      error: (error : HttpErrorResponse) =>
        (alert(error.message))
    })
  }

  public editPersona(persona: Persona): void {
    this.infoService.editInfo(this.pathPersona, persona ).subscribe({
      next: () => this.getPersonas(),

      error: (error: HttpErrorResponse) => {
        (alert(error.message))
      }
    })
  }

  public setInfo(info : any): void {
    this.edit = info;
  }

}