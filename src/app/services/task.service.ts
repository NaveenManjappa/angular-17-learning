import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

 // CreateTask:EventEmitter<string>=new EventEmitter<string>();

  CreateTask=new Subject<string>();

  OnCreateTask(task:string){
    //this.CreateTask.emit(task);
    this.CreateTask.next(task);
  }
}
