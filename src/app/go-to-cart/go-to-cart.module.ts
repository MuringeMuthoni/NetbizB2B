import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GoToCartPageRoutingModule } from './go-to-cart-routing.module';

import { GoToCartPage } from './go-to-cart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoToCartPageRoutingModule
  ],
  declarations: [GoToCartPage]
})
export class GoToCartPageModule {}
