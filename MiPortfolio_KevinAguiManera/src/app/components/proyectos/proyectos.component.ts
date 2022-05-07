import { Component, OnInit } from '@angular/core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Projects } from 'src/app/servicios/Projects/projects';
import { ProjectsService } from 'src/app/servicios/Projects/projects.service';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})


export class ProjectsComponent implements OnInit {

  projects!: Projects[];

  constructor(private projectsService:ProjectsService) { }

  ngOnInit(): void {
    this.projectsService.get().subscribe((pj: Projects[]) =>
      this.projects=pj);
   }
   faEdit = faEdit;
} 



