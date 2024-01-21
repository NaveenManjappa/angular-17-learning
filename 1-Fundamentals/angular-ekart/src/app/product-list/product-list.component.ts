import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

name= 'John Doe'
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
}
