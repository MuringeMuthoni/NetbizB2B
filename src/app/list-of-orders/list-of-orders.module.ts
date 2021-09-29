import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListOfOrdersPageRoutingModule } from './list-of-orders-routing.module';

import { ListOfOrdersPage } from './list-of-orders.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListOfOrdersPageRoutingModule
  ],
  declarations: [ListOfOrdersPage]
})
export class ListOfOrdersPageModule {}
