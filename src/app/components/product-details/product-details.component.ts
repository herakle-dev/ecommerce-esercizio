import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {Product , products} from 'src/app/products';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent  implements OnInit{

  product: Product | undefined;
products=products

constructor(
  private route : ActivatedRoute,
  private cartService:CartService
  ){}


ngOnInit() {
  this.route.params.subscribe(params => {
    const productIdFromRoute = Number(params['productId']);
    this.product = products.find(product => product.id === productIdFromRoute);
  });
}
items: Product[];
addToCart(product: Product): void {
  this.cartService.addToCart(product);
  window.alert('Your product has been added to the cart!');
}
getItems(): Product[] {
  throw new Error('Method not implemented.');
}
clearCart(): Product[] {
  throw new Error('Method not implemented.');
}
}


