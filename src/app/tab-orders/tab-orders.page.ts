import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab-orders',
  templateUrl: './tab-orders.page.html',
  styleUrls: ['./tab-orders.page.scss'],
})
export class TabOrdersPage implements OnInit {
  daBuilding;
  thelist;
  segmentModel = "Details";
  constructor(private router: Router) {
    
    this.daBuilding = [
      { id: 0,avatarimage:'assets/cabbage.jpg', prodname: 'White Cabbage ',pricerangeA: 'KSH 2000',Bysupplier: 'Bella hut', },  
    ];
    
   }

   slideOpts_stores = {
    slidesPerView: 4,
    freeMode: true,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }
  };
  ngOnInit() {
   
  }
  
   letsviewbag(){
    this.router.navigate(['/go-to-cart']);
   }
   letsviewlist(){
    this.thelist = [
      { id: 0,avatarimage:'assets/headphones.jpg'},
         {id: 1,avatarimage:'assets/headphones3.jpg'},
         {id: 2,avatarimage:'assets/headphone4.jpg'},
   
    ];
   }
}
