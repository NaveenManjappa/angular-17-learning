import { Component } from '@angular/core';
import { SubscribeService } from '../../../Services/subscribe.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'

})
export class SidebarComponent {
  constructor(private subscribeService:SubscribeService){

  }

  onSubscribe(){
      this.subscribeService.Subscribe('Quarterly');
  }
}
