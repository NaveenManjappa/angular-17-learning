import { Directive,  Input,  TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIf]',
  standalone: true
})
export class IfDirective {

  //1. Get access to DOM element which should be added/removed which is TemplateRef
  //2. Place from where we want to add or remove DOM element
  constructor(private view:TemplateRef<any>,private viewTemplate:ViewContainerRef) { }

  @Input('appIf') set display(value:boolean){
    if(value){
      this.viewTemplate.createEmbeddedView(this.view);
    }
    else{
      this.viewTemplate.clear();
    }
  }

  
}
