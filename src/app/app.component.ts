import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Observable, filter, from, fromEvent, map, of } from 'rxjs';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  
})
export class AppComponent  {
title='angular-observables';
data:any[]=[];

  array1 = [1,2,3,4,5];
  array2 = ['A','X','C','V'];

  @ViewChild('createBtn') createBtn:ElementRef;
  createBtnObservable;

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
  //myObservable=from(this.promiseData);
  myObservable = from([2,4,6,8,10]).pipe(map((val)=>{
    return val*5;
  }),filter((val,i)=>{
    return val % 4 ===0;
  }));

  // transformedObservable=this.myObservable.pipe(map((val)=>{
  //   return val*5;
  // }));

  // filteredObs=this.transformedObservable.pipe(filter((val,i)=>{
  //   return val % 4 ===0;
  // }));
  
 
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

  // ngAfterViewInit(){
  //   this.buttonClicked();
  // }

  // buttonClicked(){
  //   let count=0;
  //   this.createBtnObservable= fromEvent(this.createBtn.nativeElement,'click').subscribe({
  //     next:(data)=>
  //         {
  //           console.log(data);
  //           this.showItem(++count);
  //         }
  //   });
  // }

  // showItem(val){
  //   let div=document.createElement('div');
  //   div.innerText='Item'+val;
  //   div.className='data-list';
  //   document.getElementById('contDiv').appendChild(div);
  // }
}
