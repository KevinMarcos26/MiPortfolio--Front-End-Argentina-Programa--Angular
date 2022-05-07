import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { PdfViewerModule } from 'ng2-pdf-viewer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoAPComponent } from './components/logo-ap/logo-ap.component';
import { SocialmediaComponent } from './components/socialmedia/socialmedia.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HyskComponent } from './components/hysk/hysk.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {PortfolioService} from './servicios/portfolio.service';
import { SesionComponent } from './components/sesion/sesion.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InterceptorService } from './servicios/interceptor.service';







@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAPComponent,
    SocialmediaComponent,
    BannerComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    HyskComponent,
    ProyectosComponent,
    FooterComponent,
    SesionComponent,
    PortfolioComponent,

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    ReactiveFormsModule,
    //PdfViewerModule
    
  ],
  providers: [PortfolioService,
  {provide: HTTP_INTERCEPTORS, useClass:InterceptorService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
