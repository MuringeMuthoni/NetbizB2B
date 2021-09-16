import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.page.html',
  styleUrls: ['./view-cart.page.scss'],
})
export class ViewCartPage implements OnInit {
  daBuilding;
  dalist
  constructor() {
    
    this.daBuilding = [
      { id: 0,avatarimage:'assets/Tomato_je.jpg', prodname: '100% Better Tomatoes red in color and ripe',proddesc: 'To receive every Monday 12th',currentksh: 'Ksh 6000' ,scheduledate: '02-02-2021'  },
      // { id: 1,avatarimage:'assets/kales.jpg', prodname: 'Kales',proddesc: 'To receive every 12th day of the month',currentksh: 'Ksh 1000' ,scheduledate: '02-02-2021'    },
      // { id: 2,avatarimage:'assets/red_onions.jpg', prodname: 'Red Onions',proddesc: 'To receive every sunday ',currentksh: 'Ksh 1000 ' ,scheduledate: '02-02-2021'    },
      // { id: 3,avatarimage:'assets/cabbage.jpg', prodname: 'Cabbage"',proddesc: 'To receive every sunday',currentksh: 'Ksh 2000 ' ,scheduledate: '02-02-2021'  },
      // { id: 4,avatarimage:'assets/hoho.jpeg', prodname: 'Hoho"',proddesc: 'To receive every sunday',currentksh: 'Ksh 1000 ' ,scheduledate: '02-02-2021'  },
      // { id: 5,avatarimage:'assets/MweaPishori.png', prodname: 'Mwea Pishori"',proddesc: 'To receive every sunday',currentksh: 'Ksh 31000 '  ,scheduledate: '02-02-2021'   },   
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
    this.clearlinee()
  }
   clearlinee(){
    this.dalist = [
      { id: 0,avatarimage:'assets/BetterBoy_Silo.jpg', prodname: 'Tomato',proddesc: 'To receive every Monday 12th',currentksh: 'Ksh 6000' ,scheduledate: '02-02-2021'  },
    
    ];
   }
}
