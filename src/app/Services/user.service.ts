import { Injectable } from '@angular/core';
import { User } from '../Models/User';
import { LoggerService } from './logger.service';

@Injectable()
export class UserService {

  constructor(private loggerService:LoggerService) { }

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

    this.loggerService.LogMessage(user.name,user.status);
  }
}
