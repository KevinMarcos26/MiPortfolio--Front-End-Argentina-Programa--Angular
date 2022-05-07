import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { ExperienciaService } from 'src/app/servicios/Experiencia/experiencia.service';
import { Experiencia } from 'src/app/servicios/Experiencia/experiencia';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
