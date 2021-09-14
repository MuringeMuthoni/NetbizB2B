import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopMessagePageRoutingModule } from './pop-message-routing.module';

import { PopMessagePage } from './pop-message.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopMessagePageRoutingModule
  ],
  declarations: [PopMessagePage]
})
export class PopMessagePageModule {}
