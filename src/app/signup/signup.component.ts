import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { LoginComponent } from '../login/login.component';
import { CredModel } from '../models/cred-model';
//import credentials from '../login/credentials.json';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})

export class SignupComponent implements OnInit {

  constructor(private router: Router,private userService: UsersService) { }

  ngOnInit(): void {
    this.getUsers();
  }
  cred = new CredModel('','','','','');
  
   users:any;
   err:string='';


  signUp(){
    console.log("sign up called");
    this.err='';
    this.pwdCheck();
    this.emailCheck();
    this.nameCheck();
   // this.emailCheck();
     if(this.err.length>1){

      alert("error");
     
     }else{
    this.users = this.userService.addUser({"fname":this.cred.fname,"lname":this.cred.lname,"email":this.cred.email,"pwd":this.cred.pwd});
     console.log(this.users);
     
    this.router.navigate(['login']);
     }
    
  }
  nameCheck(): void{
    if(this.cred.fname.length<1 || this.cred.lname.length<1 ){
      this.err +='The first name or last name field is empty';
      this.err +='\n';
    }
  }
  
  
  emailCheck(): void{

    for(var i=0;i<this.users.length;i++){
      if(this.users[i]['email'] == this.cred.email ){
        console.log('this account already exists');
        this.err +='Account already exists, Please login';
        this.err +='\n';
        }
      }

    var  check:boolean;

    var regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

        check = regexp.test(this.cred.email);

        console.log(check);
        if(check === false)
        {
        this.err +='Email is not in right format';
        this.err +='\n';
        }
       // return serchfind
  }
  getUsers(): void {
    this.users = this.userService.getUsers();
    console.log(this.users);
  }
  getErrMsg(){
    return this.err;
  }
  pwdCheck(){
    console.log("inside pwd check");
    if(this.cred.pwd != this.cred.cpwd){
      this.err  += 'Passwords do not match, Try again';
      this.err +='\n';
      alert('Passwords do not match, Try again');
   }else if(this.cred.pwd.length <8){
     this.err +='Password must be atleast 8 letters long';
     this.err +='\n';
   }
   
  }


}

