import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginInitialPageRoutingModule } from './login-initial-routing.module';

import { LoginInitialPage } from './login-initial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginInitialPageRoutingModule
  ],
  declarations: [LoginInitialPage]
})
export class LoginInitialPageModule {}
