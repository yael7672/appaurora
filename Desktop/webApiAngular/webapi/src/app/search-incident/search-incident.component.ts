import { Component, OnInit } from '@angular/core';
import { IncidentService } from '../services/incident.service';
import {Incident} from '../classes/Incident';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../classes/User';
import { ContactGuid } from '../classes/ContactGuid';
import { Pipe, PipeTransform } from '@angular/core';
import { Calling } from '../classes/Calling';
import { IncidentsArray } from '../classes/IncidentsArray';

@Component({
  selector: 'app-search-incident',
  templateUrl: './search-incident.component.html',
  styleUrls: ['./search-incident.component.scss']
})
export class SearchIncidentComponent implements OnInit {

  constructor(public incidentService :IncidentService ,private router: Router ,public userService:UserService ) { }
  manager:boolean=true
  //listIncident : IncidentsArray= new IncidentsArray(this.name1);
  //name1:string | undefined

  ngOnInit(): void {
  }

    Incidents:Calling[] = [
   { IncidentNumber: "CAS-01039-M6Y7J3", Subject: "fffffff", Description: "null",CreatedOn: "12/7/2020 8:50:55 AM"},
   { IncidentNumber: "CAS-01043-R4M4T1", Subject: "test", Description: "CAS-01039-M6Y7J3",CreatedOn: "12/5/2021 4:49:59 PM"},
   { IncidentNumber: "CAS-01044-D5R2F3", Subject: "test",Description: "blablalbla", CreatedOn: "12/6/2021 2:23:37 PM"},
   { IncidentNumber: "CAS-01045-L1Q8N5",Subject: "test",Description: "blablalbla",CreatedOn: "12/6/2021 2:24:05 PM"},
   { IncidentNumber: "CAS-01046-M6G6T5",Subject: "test", Description: "CAS-01039-M6Y7J3",CreatedOn: "12/6/2021 9:43:37 PM"},

    ];
//   selectEvent(id:string)
// {
// this.userService.getIncidentById(id).subscribe((s:Event_Tbl)=>{
 



// }
// })
// }
searchText(name: string){
let name1=name
this.userService.getIncidentById(name).subscribe((obj)=>{console.log(obj)})
}




}
