import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-view-children';

  @ViewChildren('inputElementRef') inputElements :QueryList<ElementRef>
  fullName:string ='';
  
  show(){
    let name='';
    this.inputElements.forEach(el =>{
      name+=el.nativeElement.value+' ';
    });
      this.fullName=name.trim();

  }
}
