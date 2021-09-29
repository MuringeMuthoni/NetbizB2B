import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListOfOrdersPage } from './list-of-orders.page';

const routes: Routes = [
  {
    path: '',
    component: ListOfOrdersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListOfOrdersPageRoutingModule {}
