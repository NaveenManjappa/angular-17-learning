import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
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
    let obs = new Observable((observer)=>{
      observer.next(Math.random())
    });

    //Subscriber 1
    obs.subscribe((data)=>console.log(data));

    //Subscriber 2
    obs.subscribe((data)=>console.log(data));

    const subject=new Subject();

    //Subscriber 1
    subject.subscribe((data)=>console.log(data));
    
    //Subscriber 2
    subject.subscribe((data)=>console.log(data));

    subject.next(Math.random());

    //Ajax call
    const sub=new Subject();
    const data = ajax('https://randomuser.me/api/');

    // data.subscribe((res)=>{
    //   console.log(res);
    // });

    // data.subscribe((res)=>{
    //   console.log(res);
    // });

    // data.subscribe((res)=>{
    //   console.log(res);
    // });

    sub.subscribe((res)=>{
      console.log(res);
    });

    sub.subscribe((res)=>{
      console.log(res);
    });

    sub.subscribe((res)=>{
      console.log(res);
    });

    data.subscribe(sub);

  }
}
