import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'intro',
    loadChildren: () => import('./intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'pop-message',
    loadChildren: () => import('./pop-message/pop-message.module').then( m => m.PopMessagePageModule)
  },
  {
    path: 'default',
    loadChildren: () => import('./default/default.module').then( m => m.DefaultPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'pop-alert',
    loadChildren: () => import('./pop-alert/pop-alert.module').then( m => m.PopAlertPageModule)
  },
  {
    path: 'login-initial',
    loadChildren: () => import('./login-initial/login-initial.module').then( m => m.LoginInitialPageModule)
  },
  {
    path: 'list-creation',
    loadChildren: () => import('./list-creation/list-creation.module').then( m => m.ListCreationPageModule)
  },
  {
    path: 'list-shows',
    loadChildren: () => import('./list-shows/list-shows.module').then( m => m.ListShowsPageModule)
  },
  {
    path: 'view-cart',
    loadChildren: () => import('./view-cart/view-cart.module').then( m => m.ViewCartPageModule)
  },
  {
    path: 'tab-orders',
    loadChildren: () => import('./tab-orders/tab-orders.module').then( m => m.TabOrdersPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'variation',
    loadChildren: () => import('./variation/variation.module').then( m => m.VariationPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
