import { Component } from '@angular/core';

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css'
})
export class MainMenuComponent {
mainMenuItems: string[]=['Home','Products','Sale','New Arrivals','Contact','Services'];
}
