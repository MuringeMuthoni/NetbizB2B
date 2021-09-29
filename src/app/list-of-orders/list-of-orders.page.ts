import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-of-orders',
  templateUrl: './list-of-orders.page.html',
  styleUrls: ['./list-of-orders.page.scss'],
})
export class ListOfOrdersPage implements OnInit {
  daBuilding:any;
  CourseLable

  constructor() {
    
    this.daBuilding = [
      { id: 0,avatarimage:'assets/Tomato_je.jpg', prodname: 'Tomato',proddesc: 'To receive every Monday 12th',orderdate: '02-02-2021',qty:"12"  },
      { id: 1,avatarimage:'assets/kales.jpg', prodname: 'Kales',proddesc: 'To receive every 12th day of the month',orderdate: '02-02-2021',qty:"12"     },
      { id: 2,avatarimage:'assets/red_onions.jpg', prodname: 'Red Onions',proddesc: 'To receive every sunday ',scheduledate: '02-02-2021',qty:"12"     },
      { id: 3,avatarimage:'assets/cabbage.jpg', prodname: 'Cabbage"',proddesc: 'To receive every sunday' ,scheduledate: '02-02-2021',qty:"12"   },
      { id: 4,avatarimage:'assets/hoho.jpeg', prodname: 'Hoho"',proddesc: 'To receive every sunday',scheduledate: '02-02-2021',qty:"12"   },
      { id: 5,avatarimage:'assets/MweaPishori.png', prodname: 'Mwea Pishori"',proddesc: 'To receive every sunday',scheduledate: '02-02-2021',qty:"12"    },   
    ];
   }

  ngOnInit() {
    this.CourseLable = "MY ACTIVE LIST"
  }

}
