import { CommonModule } from '@angular/common';
import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent implements OnChanges,OnInit,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit {
title:string ='Demo component';
@Input() message: string;
@ViewChild('temp') tempPara:ElementRef;

@ContentChild('parentPara') paraContent:ElementRef;

constructor() {
  console.log('Demo component constructor called');
  console.log(this.title);
  console.log(this.message);
}

//1. On Changes life cycle hook
  ngOnChanges(changes:SimpleChanges){
    console.log('On Changes life cycle hook called');
    console.log(changes);
}

//2. On Init life cycle hook
  ngOnInit(){
    console.log('ng OnInit life cycle hook');
    
    //this line will throw error as the view template is not initialized completely 
    //console.log(this.tempPara.nativeElement);
  }

  //3. On DoCheck life cycle hook
  ngDoCheck(){
    console.log('ng DoCheck life cycle hook');
    console.log('paraContent:',this.paraContent);
  }

  //4 ng AfterContentInit life cycle hook
  ngAfterContentInit(){
    console.log('ng AfterContentInit life cycle hook');
    console.log('paraContent:',this.paraContent);
  }

  //5 ng AfterContentChecked life cycle hook
  ngAfterContentChecked(){
    console.log('ng AfterContentChecked life cycle hook');
  }

  //6 ng AfterViewInit
  ngAfterViewInit(){
    console.log('ng AfterViewInit life cycle hook');
  }

  //7 ng AfterViewChecked
}
