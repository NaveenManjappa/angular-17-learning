import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-show-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './show-task.component.html',
  styleUrl: './show-task.component.css'
})
export class ShowTaskComponent implements OnInit {
  tasks: string[] = ['Task 1','Task 2','Task 3'];
  taskService:TaskService = inject(TaskService);
  
  ngOnInit(){
    this.taskService.CreateTask.subscribe((data)=>{
      this.tasks.push(data);
    });
  }
}
