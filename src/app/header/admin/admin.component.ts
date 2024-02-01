import { Component, Inject } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from '../../Services/user.service';
import { FormsModule } from '@angular/forms';
import { USER_TOKEN } from '../../app.config';
import { UserDetailComponent } from './user-detail/user-detail.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [UserListComponent,FormsModule,UserDetailComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'

})
export class AdminComponent {

  constructor(@Inject(USER_TOKEN) private userService:UserService){

  }

  name:string='';
  gender:string='Male';
  subType:string='Yearly';
  status:string='Inactive';

  CreateNewUser(){
    this.userService.CreateUser(this.name,this.gender,this.subType,this.status);
    console.log(this.userService.users);
  }
}
