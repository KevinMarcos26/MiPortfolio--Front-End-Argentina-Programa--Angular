import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Educacion } from 'src/app/interfaces/ieducacion';
import { Explaboral } from 'src/app/interfaces/iexplaboral';
import { TraerInfoService } from 'src/app/servicios/traer-info.service';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  public edus!: Educacion[];
  public explaborales!: Explaboral[];
  public pathEdu : String = "educacion";
  public pathExp : String  = "explaboral";
  public edit : any;
  public isUserLogged: Boolean = false;

  constructor( private infoService : TraerInfoService,private loginService : LoginService ) { 

  }

  ngOnInit(): any {
    this.isUserLogged = this.loginService.isUserLogged();
    this.getEducaciones();
    this.getExpLaborales();
  }

  public getEducaciones(): any {
    this.infoService.getInfo(this.pathEdu).subscribe({
      next: (response: Educacion[]) => 
        (this.edus = response),
      
      error: (error : HttpErrorResponse) =>
        (alert(error.message))
    })
  }

  public addEducacion(addFormEdu: NgForm): void {
    this.infoService.addInfo(this.pathEdu, addFormEdu.value ).subscribe({
      next: () => {
        this.getEducaciones();
        addFormEdu.reset();
      },
      error: (error: HttpErrorResponse) => {
        (alert(error.message));
        addFormEdu.reset();
      }
    })
  }

  public editEducacion(educacion: Educacion): void {
    this.infoService.editInfo(this.pathEdu, educacion ).subscribe({
      next: () => this.getEducaciones(),

      error: (error: HttpErrorResponse) => {
        (alert(error.message))
      }
    })
  }

  public deleteEducacion(eduId: number): void {
    this.infoService.deleteInfo(this.pathEdu, eduId ).subscribe({
      next: () => this.getEducaciones(),

      error: (error: HttpErrorResponse) => {
        (alert(error.message))
      }
    })
  }

  public getExpLaborales(): any {
    this.infoService.getInfo(this.pathExp).subscribe({
      next: (response: Explaboral[]) => 
        (this.explaborales = response),
      
      error: (error : HttpErrorResponse) =>
        (alert(error.message))
    })
  }

  public addExpLab(addFormExp: NgForm): void {
    this.infoService.addInfo(this.pathExp, addFormExp.value ).subscribe({
      next: () => {
        this.getExpLaborales();
        addFormExp.reset();
      },
      error: (error: HttpErrorResponse) => {
        (alert(error.message));
        addFormExp.reset();
      }
    })
  }

  public editExpLab(explab: Explaboral): void {
    this.infoService.editInfo(this.pathExp, explab ).subscribe({
      next: () => this.getExpLaborales(),

      error: (error: HttpErrorResponse) => {
        (alert(error.message))
      }
    })
  }

  public deleteExpLab(expLabId: number): void {
    this.infoService.deleteInfo(this.pathExp, expLabId ).subscribe({
      next: () => this.getExpLaborales(),

      error: (error: HttpErrorResponse) => {
        (alert(error.message))
      }
    })
  }

  public setInfo(info : any): void {
    this.edit = info;
  }

}