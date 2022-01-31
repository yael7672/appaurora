import { Component, OnInit } from '@angular/core';
import { IncidentService } from '../services/incident.service';
import {Incident} from '../classes/Incident';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../classes/User';
import swal from 'sweetalert';
import { Calling } from '../classes/Calling';
@Component({
  selector: 'app-incidnt',
  templateUrl: './incidnt.component.html',
  styleUrls: ['./incidnt.component.css']
})
export class IncidntComponent implements OnInit {
  isManager:boolean=false;
  incident:Incident=new Incident("","","");
  call:Calling=new Calling("","","","");
  constructor( public incidentService : IncidentService ,public userService:UserService) { }
  manager:boolean=true
  ngOnInit(): void {
   
  }
//   addincident()
// {
//   this.incident.ContactGuid="c3371126-f0e1-ea11-a813-000d3a3a10cd";
//   this.incidentService.addIncident(this.incident).subscribe(s=>swal("הקריאה נשלחה בהצלחה!", "", "success"));

// }

addcalling()
{
  this.incident.ContactGuid="c3371126-f0e1-ea11-a813-000d3a3a10cd";
  //this.incident.ContactGuid=localStorage.getItem(userId)
  this.userService.addCallling(this.incident).subscribe(s=>swal("הקריאה נשלחה בהצלחה!", "", "success"));

}


addincident2()
{
  
 //  this.eventService.addEvent(this.event).subscribe(s=>alert("הקריאה נשלחה בהצלחה!"));
swal("הקריאה נשלחה בהצלחה!", "", "success")
   // swal("Hello world!"); 

}


}



