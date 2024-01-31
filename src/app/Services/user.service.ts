import { Injectable } from '@angular/core';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  users:User[]=[
    new User('Steve Smith','Male','Monthly','Active'),
    new User('Mary Jane','Female','Yearly','Inactive'),
    new User('Mark Tyler','Male','Quarterly','Active')
  ];

  GetAllUsers(){
    return this.users;
  }

  CreateUser(name:string,gender:string,subType:string,status:string){
    let user = new User(name,gender,subType,status);
    this.users.push(user);
  }
}
