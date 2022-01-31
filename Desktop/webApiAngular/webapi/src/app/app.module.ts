import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MyServiceCallComponent } from './my-service-call/my-service-call.component';
import { IncidntComponent } from './incidnt/incidnt.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchIncidentComponent } from './search-incident/search-incident.component';
import { Login2Component } from './login2/login2.component';
import { CallComponent } from './call/call.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { AllIncidentsComponent } from './all-incidents/all-incidents.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MyServiceCallComponent,
    IncidntComponent,
    HomePageComponent,
    SearchIncidentComponent,
    Login2Component,
    CallComponent,
    AllIncidentsComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    FormsModule,
    MatFormFieldModule,
    NgxMatSelectSearchModule,
      // HttpModule,
      RouterModule.forRoot([
      

      ]),
      
      BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
