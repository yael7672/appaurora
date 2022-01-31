import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Calling } from '../classes/Calling';
import { Incident } from '../classes/Incident';
import { UserService } from '../services/user.service';
import swal from 'sweetalert';
import { __param } from 'tslib';
import { IncidentService } from '../services/incident.service';


@Component({
  selector: 'app-call',
  templateUrl: './call.component.html',
  styleUrls: ['./call.component.scss']
})
export class CallComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
    public UserService: UserService ,
    public incidentService :IncidentService) { }
   call : Calling[] = [];
   id: number | string | undefined;
  // id!: number  ;
  //  id2=parseFloat(this.id)
  v:any[]=[];
  public detail:any;
  
  
    
 
  

  ngOnInit(): void {
   this.v=this.incidentService.listIncident.Incidents;
   //id = this.activatedRoute.snapshot.paramMap.get('id');
// ומדפיס אותו מקבל את ה  ID שנשלח אליו בתור PARAMS
   //  this.id = this.activatedRoute.snapshot.paramMap.get('id');
    // this.activatedRoute.params
    //   .subscribe(
    //     (params: Params) => {
    //     this.id2 = +params['id'];
    //       console.log(params);
    //       alert("hi"+ +params)
         
    //     }
    //   );



    let id2 = this.activatedRoute.snapshot.paramMap.get('id');
    this.detail = this.v.find(detail => {
      return detail.IncidentNumber == id2;
    });
    debugger;
       console.log(this.detail);

    // this.activatedRoute.url.subscribe((data)=>{
    //   console.log(data)
    //   this.id=data;
    //   alert(`${this.id}`)
    // })
      }
      add(){console.log("i")}
  

}
