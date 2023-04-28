import { Component , OnInit} from '@angular/core';
import { CheckoutComponent } from '../checkout/checkout.component';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit{

ngOnInit(): void {
  console.log(this);
}

}
