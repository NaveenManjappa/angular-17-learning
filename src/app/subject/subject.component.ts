import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject, delay } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-subject',
  standalone: true,
  imports: [],
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.css'
})
export class SubjectComponent implements OnInit {
  ngOnInit(){
    // let obs = new Observable((observer)=>{
    //   observer.next(Math.random())
    // });

    // //Subscriber 1
    // obs.subscribe((data)=>console.log(data));

    // //Subscriber 2
    // obs.subscribe((data)=>console.log(data));

    //const subject=new Subject();

    //Subscriber 1
   // subject.subscribe((data)=>console.log(data));
    
    //Subscriber 2
    //subject.subscribe((data)=>console.log(data));

    //subject.next(2024);

    
    // const bSubj=new BehaviorSubject<number>(2020);
  
    // bSubj.subscribe((data)=>console.log('Subscriber 1:'+data));
    // bSubj.next(2024);

    // bSubj.subscribe((data)=>console.log('Subscriber 2:'+data));
    

    

    // //Ajax call
    // const sub=new Subject();
    // const data = ajax('https://randomuser.me/api/');

    // data.subscribe((res)=>{
    //   console.log(res);
    // });

    // data.subscribe((res)=>{
    //   console.log(res);
    // });

    // data.subscribe((res)=>{
    //   console.log(res);
    // });

    // sub.subscribe((res)=>{
    //   console.log(res);
    // });

    // sub.subscribe((res)=>{
    //   console.log(res);
    // });

    // sub.subscribe((res)=>{
    //   console.log(res);
    // });

    // data.subscribe(sub);

    // const rSub=new ReplaySubject(1,2000);
    // rSub.next(50);
    // rSub.next(70);
    // rSub.subscribe(data => console.log('Subscriber 1: '+data));

    // rSub.next(100);

    // //delay(2000);

    // //Subscriber 1
    // rSub.subscribe(data => console.log('Subscriber 2: '+data));

    // rSub.next(200);
    // rSub.next(300);

    // rSub.subscribe(data => console.log('Subscriber 3: '+data));

      //Async subject
      const asyncSub=new AsyncSubject();
      asyncSub.next(100);
      asyncSub.next(200);
      asyncSub.subscribe(data=>console.log('Subscriber 1: '+data));
      asyncSub.next(300);
      asyncSub.subscribe(data=>console.log('Subscriber 2: '+data));

      

      asyncSub.complete();
      asyncSub.subscribe(data=>console.log('Subscriber 3: '+data));
      asyncSub.next(400);

      const promise=new Promise((resolve,reject)=>{
        console.log('Promise called');
        resolve(100);
        resolve(200);
        resolve(300);
      });

      promise.then((data)=>console.log(data));

      const obs=new Observable((observer)=>{
        console.log('Observable called');
        observer.next(100);
        observer.next(200);
        observer.next(300);
      });

      obs.subscribe({
        next: (data)=>{
          console.log(data);
        }
      });


  }
}
