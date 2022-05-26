import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { SesionComponent } from './components/sesion/sesion.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { TraerInfoService } from './servicios/traer-info.service';
import { FooterComponent } from './components/footer/footer.component';
import { SpinnerComponent } from './components/spinner/spinner.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AcercaDeComponent,
    EducacionComponent,
    ProyectosComponent,
    SkillsComponent,
    SidebarComponent,
    SesionComponent,
    FooterComponent,
    SpinnerComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
    
  ],
  providers: [
    TraerInfoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
