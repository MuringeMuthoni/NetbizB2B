import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-variation',
  templateUrl: './variation.page.html',
  styleUrls: ['./variation.page.scss'],
})
export class VariationPage implements OnInit {
  itemsorders
  avatarimage1
  pricerange1
  MOQ1
  qty
  constructor() {
    this.itemsorders = [
      { id: 0,avatarimage:'assets/headphones.jpg',pricerange:'200-1000',MOQ:'10 pieces'},
         {id: 1,avatarimage:'assets/headphones3.jpg',pricerange:'200-1000'},
         {id: 2,avatarimage:'assets/headphone4.jpg',pricerange:'200-1000'},  
    ];


   }

  ngOnInit() {
    this.avatarimage1= "assets/headphones.jpg"
     this.pricerange1= "200-1000"
     this.MOQ1 ="10 pieces"
      this.qty = "5"
  }

}
