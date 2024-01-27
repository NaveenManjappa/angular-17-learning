import {Directive, ElementRef } from '@angular/core';

@Directive({
    selector:'[setBackground]'
})

export class SetBackground {

        constructor(private element:ElementRef){
            
        }

        ngOnInit(){
            this.element.nativeElement.style.backgroundColor='#36454F';
            this.element.nativeElement.style.color='white';
        }
}