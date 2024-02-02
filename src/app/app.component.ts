import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Observable, from, of } from 'rxjs';



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

  array1 = [1,2,3,4,5];
  array2 = ['A','X','C','V'];

//1.Creata an Observable
  // myObservable=new Observable((observer)=>{
  //   setTimeout(()=>observer.next(1),1000);
  //   setTimeout(()=>observer.next(2),2000);
  //   setTimeout(()=>observer.next(3),3000);

  //   //After error is emitted no other data will get emitted
  //   //setTimeout(()=>{observer.error(new Error('Something went wrong'))},3000);


  //   setTimeout(()=>observer.next(4),4000);
  //   setTimeout(()=>observer.complete(),4500);

  //   //the below value won't be emitted as complete is executed above
  //   setTimeout(()=>observer.next(5),5000);


  // });

  //of operator
  // myObservable=of(this.array1,this.array2,200,false,'naveen');

  promiseData=new Promise((resolve,reject)=>{
    resolve([10,20,30,40]);
  })
  //from operator
  myObservable=from(this.promiseData);
  
 
  GetAsyncData(){

     //2.Observer
     //next,error,complete
    // this.myObservable.subscribe(
    //   (val:any)=>{
    //     this.data.push(val);
    //   },
    //   (error)=>{
    //     alert(error.message);
    //   },
    //   ()=>{
    //     alert('Observable completed');
    //   }
    // );

      this.myObservable.subscribe({
        next: (val:any)=>{
          this.data.push(val);
          console.log(val);
        },
        error:(err)=>{
          alert(err.message);
        },
        complete:()=>{
          alert('Observable completed');
        }
      });
  }
}
