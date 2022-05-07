import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { faEdit }  from '@fortawesome/free-solid-svg-icons';
import { EducacionService } from 'src/app/servicios/Educacion/educacion.service';
import { Educacion } from 'src/app/servicios/Educacion/educacion';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})


export class EducacionComponent implements OnInit {

  educacion!: Educacion[];

  constructor(private educacionService:EducacionService) { 

  }

  ngOnInit(): void {
    this.educacionService.get().subscribe((ed: Educacion[]) =>
      this.educacion=ed);
   }
   faEdit= faEdit;
} 
