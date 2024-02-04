import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
newTask:string ='';

  constructor(private taskService:TaskService){

  }

  OnCreateTask(){
    this.taskService.OnCreateTask(this.newTask);
  }

}
