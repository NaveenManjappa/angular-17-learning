import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {

//name= 'John Smith'
// addToCart:number=0;
// product = {
//   name: 'iPhone 15',
//   price: 789,
//   color: 'Mate Black',
//   discount:8.5,
//   inStock:10,
//   pImage:'/assets/images/iPhone.png'
// }


// getDiscountedPrice(){
//   return this.product.price-(this.product.price*this.product.discount/100);
// }

// onNameChange(event:any){
  
// }

// incrementValue(){
//   if(this.addToCart < this.product.inStock)
//     this.addToCart++;
// }

// decrementValue(){
//   if(this.addToCart > 0)
//     this.addToCart--;
// }

names: string[] = ['Mark','Jake','Blake','Ted']

searchText:string='';
onSearchTextChanged(value){
  this.searchText=value;
}

}
