import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { SkillsService } from 'src/app/servicios/skills/skills.service';
import { Skills } from 'src/app/servicios/skills/skills';

@Component({
  selector: 'app-hysk',
  templateUrl: './hysk.component.html',
  styleUrls: ['./hysk.component.css']
})

export class SkillsComponent implements OnInit {
  
  skills!: Skills[];

  constructor(private skillsService:SkillsService) { }

  ngOnInit(): void {
    this.skillsService.get().subscribe((sk : Skills[]) =>
      this.skills=sk);
   }
   faEdit = faEdit;
  }
  