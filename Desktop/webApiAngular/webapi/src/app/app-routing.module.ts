import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllIncidentsComponent } from './all-incidents/all-incidents.component';
import { CallComponent } from './call/call.component';
import { HomePageComponent } from './home-page/home-page.component';
import { IncidntComponent } from './incidnt/incidnt.component';
import { LoginComponent } from './login/login.component';
import { Login2Component } from './login2/login2.component';
import { MyServiceCallComponent } from './my-service-call/my-service-call.component';
import { SearchIncidentComponent } from './search-incident/search-incident.component';
// import {CrudTableComponent} from './crud-table/crud-table.component'

const routes: Routes = [
  {
    path:'',
    component:HomePageComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'login2',
    component:Login2Component
  },
  {
    path:'myServiceCall',
    component:MyServiceCallComponent
  },
  {
    path:'incidnt',
    component:IncidntComponent
  },
  {
    path:'searchIncident',
    component:SearchIncidentComponent
  },
  {
    path:'allIncidents',
    component:AllIncidentsComponent
  },
  {
    path:'call/:id',
    component:CallComponent
  }
  ,
  // {
  //   path:'crudTable',
  //   component:CrudTableComponent
  // },
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
