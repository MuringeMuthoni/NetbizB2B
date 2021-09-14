import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListShowsPageRoutingModule } from './list-shows-routing.module';

import { ListShowsPage } from './list-shows.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListShowsPageRoutingModule
  ],
  declarations: [ListShowsPage]
})
export class ListShowsPageModule {}
