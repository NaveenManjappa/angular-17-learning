import { Component } from '@angular/core';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { SubscribeService } from '../Services/subscribe.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,AdminComponent,HomeComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
selectedTab:string ='home';
  constructor(private subscribeService:SubscribeService){

  }
    AdminClicked(){
    this.selectedTab='admin';
    }

    HomeClicked(){
    this.selectedTab='home';
    }

    onSubscribe(){
      this.subscribeService.Subscribe('Yearly');
    }

}
