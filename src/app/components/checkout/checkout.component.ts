import { Component , OnInit} from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit{
  constructor(
    private cartService:CartService,
    private formBuilder :FormBuilder,
    ){}
  ngOnInit(): void {

  }
  items= this.cartService.getItems()
  checkoutForm = this.formBuilder.group({
    name :'',
    address:''
  })
onSubmit(){
  this.items = this.cartService.clearCart()
  console.warn('your order has been submitted', this.checkoutForm.value)
  this.checkoutForm.reset()
}

}
