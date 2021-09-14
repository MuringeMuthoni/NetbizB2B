import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-shows',
  templateUrl: './list-shows.page.html',
  styleUrls: ['./list-shows.page.scss'],
})
export class ListShowsPage implements OnInit {
  daBuilding;
  CourseLable

  constructor() {
    
    this.daBuilding = [
      { id: 0,avatarimage:'assets/Tomato_je.jpg', prodname: 'Tomato',proddesc: 'Tomato',currentksh: 'Ksh 6000'   },
      { id: 1,avatarimage:'assets/kales.jpg', prodname: 'Kales',proddesc: 'Kales',currentksh: 'Ksh 1000'     },
      { id: 2,avatarimage:'assets/red_onions.jpg', prodname: 'Red Onions',proddesc: 'Red Onions',currentksh: 'Ksh 1000 '     },
      { id: 3,avatarimage:'assets/cabbage.jpg', prodname: 'Cabbage"',proddesc: 'test',currentksh: 'Ksh 2000 '   },
      { id: 4,avatarimage:'assets/hoho.jpeg', prodname: 'Hoho"',proddesc: 'Hoho',currentksh: 'Ksh 1000 '   },
      { id: 5,avatarimage:'assets/MweaPishori.png', prodname: 'Mwea Pishori"',proddesc: 'Mwea Pishori',currentksh: 'Ksh 31000 '     },   
    ];


   }

  ngOnInit() {
    this.CourseLable = "MY ACTIVE LIST"
  }

}
