import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DemoComponent } from './demo/demo.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,DemoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-app-component';
  inputValue:string='';
  toDestroy:Boolean=false;

  constructor(){
    console.log('App component constructor called');
  }

  ngAfterViewInit(){
    console.log('This is ngAfterViewInit life cycle hook of app component');
  }

  ngAfterViewChecked(){
    console.log('This is ngAfterViewChecked life cycle hook of app component')
  }

  onSubmit(inputEl:HTMLInputElement){
    this.inputValue=(inputEl.value);
  }

  DestroyComponent(){
    this.toDestroy=!this.toDestroy;
  }

}
