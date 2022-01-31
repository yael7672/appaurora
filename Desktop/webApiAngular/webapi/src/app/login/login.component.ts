import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../classes/User';
import { ContactGuid } from '../classes/ContactGuid';
import { UserService } from '../services/user.service';
import swal from 'sweetalert';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  
  password!: string;
  name!: string;
  manager!: string;
  user:User=new User("","");
  userId1: ContactGuid = new ContactGuid("c3371126-f0e1-ea11-a813-000d3a3a10cd");
  userId: ContactGuid = new ContactGuid("");
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

   //לוגין מדומה שהAPI לא עובד
  login2() {
 
    this.user.UserName=this.name;
    this.user.Password=this.password;
    if(this.user.UserName=="test1" && this.user.Password=="1234")
    { 
    localStorage.setItem("user",JSON.stringify(this.user));
    localStorage.setItem("userId",JSON.stringify(this.userId));
         swal(" ברוך הבא "+ this.user.UserName);
    
      this.router.navigate(["myServiceCall"]);   
      this.userService.logIn(this.user).subscribe(x=>
      {
        if(x=="contact not found!")
       swal("משתמש לא קיים במערכת");
       else
       {
         localStorage.setItem("user",JSON.stringify(this.user));
      //   this.userId.ContactGuid=x;
         localStorage.setItem("userId",JSON.stringify(x));
         swal(" ברוך הבא "+ this.user.UserName);
       }
      });
      }
      else{swal("משתמש לא נמצא")}


  // promise.then((success) => { 
  //   debugger;
  //         console.log(success); 
  //         localStorage.setItem('user', (this.name,this.password));
  //         this.manager = "מנהל מחובר";
  //         swal(" found")
  //     }) 
  //     .catch((error) => { 
  //         console.log(error); 
  //         swal("not found")
  //     }); 
    }
  
//לוגין עם API


      login111(){
        this.user.UserName=this.name;
        this.user.Password=this.password;
        // localStorage.setItem("user",JSON.stringify(this.user));
        // localStorage.setItem("userId",JSON.stringify(this.userId));  
        this.userService.logIn(this.user).subscribe( 
            
            (data) =>
            {
              console.log(data);
              localStorage.setItem("user",JSON.stringify(this.user));
              //  this.userId.ContactGuid=x;
               localStorage.setItem("userId",JSON.stringify(data));
               swal(" ברוך הבא "+ this.user.UserName);
                this.router.navigate(["myServiceCall"]);
            }  ,
           (error) => 
           {
            swal("משתמש לא קיים במערכת");
        }
          );
        
          // this.userService.logIn(this.user).subscribe(x =>
          // {
          //    if(x=="contact not found!")
          //  swal("משתמש לא קיים במערכת");
          //  else
          //  {
          //    debugger;
          //    localStorage.setItem("user",JSON.stringify(this.user));
          //   //  this.userId.ContactGuid=x;
          //    localStorage.setItem("userId",JSON.stringify(x));
             
          //    swal(" ברוך הבא "+ this.user.UserName);
          //     this.router.navigate(["myServiceCall"]);  
          //  }
          // });
        }

  logOut()
  {
    localStorage.removeItem('user')
    localStorage.removeItem('userId')
    localStorage.clear;
    swal("יצאת בהצלחה")
  }

}
