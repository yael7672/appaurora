import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Incident } from '../classes/Incident';
import { IncidentsArray } from '../classes/IncidentsArray';
import { Calling } from '../classes/Calling';


@Injectable({
  providedIn: 'root'
})
export class IncidentService {
  api = "https://homeworkserviceswebapi.azurewebsites.net/api";

 public callings:Calling[]=[];

 public listIncident : IncidentsArray= new IncidentsArray(this.callings);
 constructor(private http: HttpClient) { }

  //  apiCreate = 'https://homeworkserviceswebapi.azurewebsites.net/api/CreateIncident'
  // apiGet="https://homeworkserviceswebapi.azurewebsites.net/api/GetContactIncidents"
  //  constructor(private http: HttpClient) { }
  // addIncident( incident : Incident): Observable<Incident> {
  //   // return this.http.post<any>(this.apiCreate + "/add",incident);
  //   return this.http.post<any>(this.apiCreate ,incident);
    
  // }
  // getIncident(): Observable<Incident[]> {
  //   // return this.http.get<Incident[]>(`${this.apiGet + "/incident"}`);
  //   return this.http.get<Incident[]>(`${this.apiGet }`);
  // }


}
