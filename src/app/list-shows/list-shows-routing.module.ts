import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListShowsPage } from './list-shows.page';

const routes: Routes = [
  {
    path: '',
    component: ListShowsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListShowsPageRoutingModule {}
