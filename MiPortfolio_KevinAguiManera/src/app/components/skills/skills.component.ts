import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Idioma } from 'src/app/interfaces/iidioma';
import { Skill } from 'src/app/interfaces/iskill';
import { TraerInfoService } from 'src/app/servicios/traer-info.service';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  public skills!: Skill[];
  public idiomas!: Idioma[];
  public pathSkills : String = "skills";
  public pathIdiomas : String  = "idioma";
  public edit : any;
  public isUserLogged: Boolean = false;

  constructor( private infoService : TraerInfoService, private loginService : LoginService ) { 

  }

  ngOnInit(): any {
    this.isUserLogged = this.loginService.isUserLogged();
    this.getSkills();
    this.getIdiomas();
  }

  public getSkills(): any {
    this.infoService.getInfo(this.pathSkills).subscribe({
      next: (response: Skill[]) => 
        (this.skills = response),
      
      error: (error : HttpErrorResponse) =>
        (alert(error.message))
    })
  }

  public addSkills(addFormSkill: NgForm): void {
    this.infoService.addInfo(this.pathSkills, addFormSkill.value ).subscribe({
      next: () => {
        this.getSkills();
        addFormSkill.reset();
      },
      error: (error: HttpErrorResponse) => {
        (alert(error.message));
        addFormSkill.reset();
      }
    })
  }

  public editSkills(skills: Skill): void {
    this.infoService.editInfo(this.pathSkills, skills ).subscribe({
      next: () => this.getSkills(),

      error: (error: HttpErrorResponse) => {
        (alert(error.message))
      }
    })
  }

  public deleteSkills(skillId: number): void {
    this.infoService.deleteInfo(this.pathSkills, skillId ).subscribe({
      next: () => this.getSkills(),

      error: (error: HttpErrorResponse) => {
        (alert(error.message))
      }
    })
  }

  public getIdiomas(): any {
    this.infoService.getInfo(this.pathIdiomas).subscribe({
      next: (response: Idioma[]) => 
        (this.idiomas = response),
      
      error: (error : HttpErrorResponse) =>
        (alert(error.message))
    })
  }

  public addIdiomas(addFormIdioma: NgForm): void {
    this.infoService.addInfo(this.pathIdiomas, addFormIdioma.value ).subscribe({
      next: () => {
        this.getIdiomas();
        addFormIdioma.reset();
      },
      error: (error: HttpErrorResponse) => {
        (alert(error.message));
        addFormIdioma.reset();
      }
    })
  }

  public editIdiomas(idioma: Idioma): void {
    this.infoService.editInfo(this.pathIdiomas, idioma ).subscribe({
      next: () => this.getIdiomas(),

      error: (error: HttpErrorResponse) => {
        (alert(error.message))
      }
    })
  }

  public deleteIdiomas(idiomaId: number): void {
    this.infoService.deleteInfo(this.pathIdiomas, idiomaId ).subscribe({
      next: () => this.getIdiomas(),

      error: (error: HttpErrorResponse) => {
        (alert(error.message))
      }
    })
  }

  public setInfo(info : any): void {
    this.edit = info;
  }

}