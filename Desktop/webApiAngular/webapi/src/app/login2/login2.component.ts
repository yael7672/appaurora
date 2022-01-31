import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../classes/User';
import { UserService } from '../services/user.service';
import swal from 'sweetalert';
@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {
 
  
  password!: string;
  name!: string;
  manager!: string;
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }
  
  login2() {
    this.name="test1"
    this.password="1234"
    // this.userService.logIn(this.name, this.password).subscribe(
      // this.userService.logIn(this.name, this.password).subscribe(
      // res => {
        // console.log(res);
        // localStorage.setItem('user', res.UserName.toString());
        // this.userService.user = res;
        // swal("מנהל מחובר");
        // this.manager = "מנהל מחובר";

        // this.router.navigate([])
      // }
      // ,
      // err =>
        // alert("not found")
        // swal("not found")
    // )
  }
  login() {
  var promise = new Promise((resolve, reject) => { 
    resolve("Promise Resolved"); 
}) 

promise.then((success) => { 
        console.log(success); 
        localStorage.setItem('user', (this.name,this.password));
        this.manager = "מנהל מחובר";
        swal(" found")
    }) 
    .catch((error) => { 
        console.log(error); 
        swal("not found")
    }); 
}

  logOut()
  {
    localStorage.removeItem('user')
    localStorage.clear;
    swal("מנהל התנתק")
  }

}
