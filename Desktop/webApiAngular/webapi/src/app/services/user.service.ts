import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { User } from '../classes/User';
import { Incident } from '../classes/Incident';
import { ContactGuid } from '../classes/ContactGuid';
import {map} from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'; 
import { Calling } from '../classes/Calling';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  api = "https://homeworkserviceswebapi.azurewebsites.net/api";
  user!: User;
  isLoggedIn!: boolean;
  currentUser:User =new User("","");
  call:Calling=new Calling("","","","")
  userId:ContactGuid=new ContactGuid ("")
  constructor(private http: HttpClient) { }

 //כניסה למערכת
  logIn2(user:User){
   const myHeaders = new HttpHeaders();
     myHeaders.append("Content-Type",  "application/json; charset=utf-8");
    
 const headers = new Headers;
   myHeaders.set('Access-Control-Allow-Origin', '*');
   myHeaders.set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
   

  //  res.header("Access-Control-Allow-Origin", "*");
  //  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    //if (req.method === "OPTIONS") {
      myHeaders.set("Access-Control-Allow-Methods", "PUT, POST, PATCH ,DELETE, GET, delete,OPTIONS");
 return this.http.post(this.api+ "/GetContactDetail", user, { headers: myHeaders });

    
    }
   
    logIn(user:User){
    return this.http.post<any>(this.api+ "/GetContactDetails",user);
    }   
 
  getCalling( userId:ContactGuid)
  {
     //let userId1: ContactGuid= new ContactGuid(this.userId);
   return this.http.post<any>(this.api+ "/GetContactIncidents",userId);


  }
  getAllCalling( userId:ContactGuid)
  {
     //let userId1: ContactGuid= new ContactGuid(this.userId);
   return this.http.post<any>(this.api+ "/GetIncident",userId);


  }
  addCallling(call:Incident)
  {
   return this.http.post<any>(this.api+ "/CreateIncident",call);

  }
  getIncidentById(name: string): Observable<any> {
    return this.http.post<any>(this.api + "/GetIncident/",name);
  }

  // addCallling2(call:Calling)
  // {
  //  return this.http.post<any>(this.api+ "/CreateIncident",call);

  // }
  // getEventById2(id: string): Observable<any> {
  //   return this.http.get<any>(`${this.api + "/GetIncident/"}${id}`);
  // }
  // findCalling()
  // {
  //  return this.http.post<any>(this.api+ "/GetIncident",user);

  // }
}