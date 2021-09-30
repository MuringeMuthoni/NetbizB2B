import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-of-orders',
  templateUrl: './list-of-orders.page.html',
  styleUrls: ['./list-of-orders.page.scss'],
})
export class ListOfOrdersPage implements OnInit {
  daBuilding:any;
  CourseLable

  constructor(private router:Router) {
    
    this.daBuilding = [
      { id: 0,avatarimage:'assets/Tomato_je.jpg', prodname: 'Tomato',proddesc: 'To receive every Monday 12th',orderdate: '02-02-2021',qty:"12",pricerangeA:"100",pricerangeB:"120"  },
      { id: 1,avatarimage:'assets/kales.jpg', prodname: 'Kales',proddesc: 'To receive every 12th day of the month',orderdate: '02-02-2021',qty:"12",pricerangeA:"100" ,pricerangeB:"120"      },
     
    ];
   }

  ngOnInit() {
    this.CourseLable = "MY ACTIVE LIST"
  }
  letsviewinvoice(){
    this.router.navigate(['/invoice']);
   }

}
