import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  credentials = [
    {"email":"s123","pwd":"123"},
    {"email":"123","pwd":"123"}
  ];

  constructor() { }
  getUsers(){
    return this.credentials;
  }
  addUser(user:any){
     this.credentials.push(user);
     return this.credentials;
    // console.log(this.credentials);
    // console.log("inside service");
  }
}
