import { HttpErrorResponse } from '@angular/common/http';
import { Component, NgZone, OnInit } from '@angular/core';
import { Persona } from 'src/app/interfaces/ipersona';
import { TraerInfoService } from 'src/app/servicios/traer-info.service';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public personas!: Persona[];
  public pathPersona : String = "home";
  public edit! : Persona;
  public isUserLogged: Boolean = false;

  constructor( private infoService : TraerInfoService, private loginService : LoginService) { 

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

  public logOut():void {
    this.loginService.logout();
    this.isUserLogged = false;
    window.location.reload();
  }
}
