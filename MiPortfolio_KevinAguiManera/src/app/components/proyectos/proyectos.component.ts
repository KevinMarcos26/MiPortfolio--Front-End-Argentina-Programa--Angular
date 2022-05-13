import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Proyecto } from 'src/app/interfaces/iproyecto';
import { TraerInfoService } from 'src/app/servicios/traer-info.service';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  public proyectos!: Proyecto[];
  public pathProyecto : String = "proyectos";
  public edit!: Proyecto;
  public isUserLogged: Boolean = false;

  constructor( private infoService : TraerInfoService,
    private loginService : LoginService ) { 

  }

  ngOnInit(): any {
    this.isUserLogged = this.loginService.isUserLogged();
    this.getProyectos();
  }

  public getProyectos(): any {
    this.infoService.getInfo(this.pathProyecto).subscribe({
      next: (response: Proyecto[]) => 
        (this.proyectos = response),
      
      error: (error : HttpErrorResponse) =>
        (alert(error.message))
    })
  }

  public addProyecto(addProyecto: NgForm): void {
    this.infoService.addInfo(this.pathProyecto, addProyecto.value ).subscribe({
      next: () => {
        this.getProyectos();
        addProyecto.reset();
      },
      error: (error: HttpErrorResponse) => {
        (alert(error.message));
        addProyecto.reset();
      }
    })
  }

  public editProyecto(explab: Proyecto): void {
    this.infoService.editInfo(this.pathProyecto, explab ).subscribe({
      next: () => this.getProyectos(),

      error: (error: HttpErrorResponse) => {
        (alert(error.message))
      }
    })
  }

  public deleteProyecto(expProyectoId: number): void {
    this.infoService.deleteInfo(this.pathProyecto, expProyectoId ).subscribe({
      next: () => this.getProyectos(),

      error: (error: HttpErrorResponse) => {
        (alert(error.message))
      }
    })
  }

  public setInfo(info : any): void {
    this.edit = info;
  }

}

