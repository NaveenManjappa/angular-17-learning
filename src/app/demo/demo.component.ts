import { Component, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent implements OnChanges {
title:string ='Demo component';
@Input() message: string;

constructor() {
  console.log('Demo component constructor called');
  console.log(this.title);
  console.log(this.message);
}

  ngOnChanges(changes:SimpleChanges){
    console.log('On Changes life cycle hook called');
    console.log(changes);
}

}
