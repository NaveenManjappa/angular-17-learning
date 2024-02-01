import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  
})
export class AppComponent {
title='angular-observables';
data:any[]=[];

//1.Creata an Observable
  myObservable=new Observable((observer)=>{
    setTimeout(()=>observer.next(1),1000);
    setTimeout(()=>observer.next(2),2000);
    setTimeout(()=>observer.next(3),3000);
    setTimeout(()=>observer.next(4),4000);
    setTimeout(()=>observer.next(5),5000);
  });
  
 
  GetAsyncData(){

     //2.Observer
     //next,error,complete
    this.myObservable.subscribe(
      (val:any)=>{
        this.data.push(val);
      }
    );
  }
}
