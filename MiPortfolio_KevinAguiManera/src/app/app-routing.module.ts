import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { SesionComponent } from './components/sesion/sesion.component';
//import { GuardGuard } from './servicios/guard.guard';


const routes: Routes = [
{path:'portfolio',component:PortfolioComponent}, //, canActivate: [GuardGuard] //*  
  {path:'sesion', component:SesionComponent},
  {path:'',redirectTo:'portfolio',pathMatch:'full'}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
