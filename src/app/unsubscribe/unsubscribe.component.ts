import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-unsubscribe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './unsubscribe.component.html',
  styleUrl: './unsubscribe.component.css'
})
export class UnsubscribeComponent {
  counter = interval(1000);
  dataList1:number[]=[];
  dataList2:number[]=[];
  dataList3:number[]=[];
  subscriber1;
  subscriber2;
  subscriber3;

  OnSubscribe(num:number){
    if(num==1){
      this.subscriber1=this.counter.subscribe(res=>{
      
        this.dataList1.push(res);
      });
    }    
      else if(num==2){
        this.subscriber2=this.counter.subscribe(res=>{
      
          this.dataList2.push(res);
        });
      }
      else {
        this.subscriber3=this.counter.subscribe(res=>{
      
          this.dataList3.push(res);
        });
      }
    }
  

  OnUnsubscribe(){
    this.subscriber1.unsubscribe();
    this.subscriber2.unsubscribe();
    this.subscriber3.unsubscribe();
  }
}
