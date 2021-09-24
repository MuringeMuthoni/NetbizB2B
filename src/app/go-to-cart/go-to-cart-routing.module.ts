import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoToCartPage } from './go-to-cart.page';

const routes: Routes = [
  {
    path: '',
    component: GoToCartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoToCartPageRoutingModule {}
