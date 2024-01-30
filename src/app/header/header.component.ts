import { Component } from '@angular/core';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,AdminComponent,HomeComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
selectedTab:string ='home';

AdminClicked(){

}

HomeClicked(){

}

}
