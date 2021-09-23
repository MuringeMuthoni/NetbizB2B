import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab-orders',
  templateUrl: './tab-orders.page.html',
  styleUrls: ['./tab-orders.page.scss'],
})
export class TabOrdersPage implements OnInit {
  daBuilding;
  thelist
  constructor(private router: Router) {
    
    this.daBuilding = [
      { id: 0,avatarimage:'assets/Tomato_je.jpg', prodname: 'New wireless headphone subwoofer stereo card headset blue tooth wireless',pricerangeA: 'KSH 2000',pricerangeB: 'Ksh 4000',pricerangec: 'Ksh 6000',descrangeA: '3-499 pieces',descrangeB: '500-999 pieces',descrangeC: '1000 pieces',minorders:' 3 pieces' },  
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
  
   letsviewvariations(){
    this.router.navigate(['/variation']);
   }
   letsviewlist(){
    this.thelist = [
      { id: 0,avatarimage:'assets/headphones.jpg'},
         {id: 1,avatarimage:'assets/headphones3.jpg'},
         {id: 2,avatarimage:'assets/headphone4.jpg'},
   
    ];
   }
}
