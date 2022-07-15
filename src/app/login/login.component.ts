import { Component, OnInit } from '@angular/core';
//import credentials from './credentials.json';
import { SignupComponent } from '../signup/signup.component';
import {UsersService} from '../users.service';
import { FormControl , Validators} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private signupcomponent:SignupComponent,private userService: UsersService) {
   // console.log(signupcomponent.credentials);
   }
   correct:boolean=false;
   users:any;
   email:any='';
   pwd:any='';
   err:string='';
   email_err:string='';
   pwd_err:string='';

  


  ngOnInit(): void {
    
    this.getUsers();
  }
  login(){
    this.err='';
    console.log("login called");
    if(this.email.length == 0 ){
    this.email_err  = 'Please enter your email to get started';
  
   }  
    if (this.pwd.length == 0){
      this.pwd_err  = 'Please enter your password';
    }
    else{
    for(var i=0;i<this.users.length;i++){
      if(this.users[i]['email'] == this.email ){
        console.log('found the key, associated value is ' + this.users[i]['pwd']);
        if(this.users[i]['pwd'] === this.pwd){
          console.log("Logged in");
          const ele = document.getElementById('before_login');
          if(ele!=null)
          ele.style.display='none';
          alert("Logged In");
          this.correct=true;
          this.getLogin();
        }
        break;
      }
    }
    if(this.correct===false){
    this.err  = 'Username or passwords do not match, please try again';
    alert("Username or passwords do not match, please try again");
    this.getErrMsg();
    }
    }
   // console.log(this.signupcomponent.credentials);
        //this.router.navigate(['login']);
    
  }
  getUsers(): void {
    this.users = this.userService.getUsers();
    console.log(this.users);
  }

  getErrMsg(){
    return this.err;
  }
  getLogin(){
    if(this.correct===true)
    return 'Logged In';
    return '';
  }
  getEmailErrMsg(){
    return this.email_err;
  }
  getPwdErrMsg(){
    return this.pwd_err;
  }

}
