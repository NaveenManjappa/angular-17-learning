import { Component } from '@angular/core';
import { SubscribeService } from '../../../Services/subscribe.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'

})
export class HeroComponent {
  constructor(private subscribeService:SubscribeService){

  }
  onSubscribe(){
    
      this.subscribeService.Subscribe('Monthly');
    
  }
}
