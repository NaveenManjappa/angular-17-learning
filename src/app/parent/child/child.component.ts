import { Component, ContentChild, ContentChildren, ElementRef, QueryList } from '@angular/core';
import { TestComponent } from '../../test/test.component';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

@ContentChildren('para') paraElements:QueryList<ElementRef>;

@ContentChildren(TestComponent) testComponents:QueryList<TestComponent>;

StylePara(){
  // this.paraElements.forEach(el =>{
  //   console.log(el.nativeElement);
  //  });

  this.testComponents.forEach(el=>{
    console.log(el.name);
  });
}
}
