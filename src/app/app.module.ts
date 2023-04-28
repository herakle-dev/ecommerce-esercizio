import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductAlertComponent } from './components/product-alert/product-alert.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import{HttpClientModule} from '@angular/common/http';

import { CartService } from './services/cart.service';
import { MatCardModule } from '@angular/material/card';
import { ShippingComponent } from './components/shipping/shipping.component';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertComponent,
    ProductDetailsComponent,
    CheckoutComponent,
    ShippingComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatCardModule,
    RouterModule.forRoot([
      {
        path: '', component: ProductListComponent,children: [
          { path: 'products/:productId', component: ProductDetailsComponent },

        ]},
     { path: 'checkout', component: CheckoutComponent },
     { path: 'shipping', component: ShippingComponent },

    ]),
  ],
  providers: [CartService],
  bootstrap: [AppComponent],
})
export class AppModule {}
