import { Component, OnInit, inject } from '@angular/core';
import { User } from '../../../Models/User';
import { USER_TOKEN } from '../../../app.config';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent implements OnInit {
    selectedUser:User;
    userService = inject(USER_TOKEN);

    ngOnInit(){
    this.userService.OnUserDetailClicked.subscribe((data:User)=>{
      this.selectedUser=data;
    });
    }
}
