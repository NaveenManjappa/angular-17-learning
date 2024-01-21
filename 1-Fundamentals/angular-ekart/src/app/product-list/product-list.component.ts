import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

//name= 'John Smith'
addToCart:number=0;
product = {
  name: 'iPhone 15',
  price: 789,
  color: 'Mate Black',
  discount:8.5,
  inStock:10,
  pImage:'/assets/images/iPhone.png'
}


getDiscountedPrice(){
  return this.product.price-(this.product.price*this.product.discount/100);
}

onNameChange(event:any){
  //console.log(event.target.value);
  //this.name=event.target.value;
}

incrementValue(){
  if(this.addToCart < this.product.inStock)
    this.addToCart++;
}

decrementValue(){
  if(this.addToCart > 0)
    this.addToCart--;
}

}
