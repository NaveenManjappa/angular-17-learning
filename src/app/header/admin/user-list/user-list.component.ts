import { Component, Inject } from '@angular/core';
import { UserService } from '../../../Services/user.service';
import { CommonModule } from '@angular/common';
import {USER_TOKEN} from '../../../app.config';
import { User } from '../../../Models/User';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'

})
export class UserListComponent {
  constructor(@Inject(USER_TOKEN) private userService:UserService){

  }
  userList =this.userService.GetAllUsers();

  ShowUserDetails(user:User){
    this.userService.OnShowUserDetails(user);
  }
}
