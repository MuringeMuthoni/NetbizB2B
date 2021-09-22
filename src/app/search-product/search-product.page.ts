import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.page.html',
  styleUrls: ['./search-product.page.scss'],
})
export class SearchProductPage implements OnInit {
  products = [];
  items_ziko:boolean=false;
  no_items_found:boolean=false;
  constructor() { }

  ngOnInit() {
    console.log("nimefika hapa kwa search1")
  }
  pname
  items=""
  getItems(ev: any) {
    const vals = ev.target.value;
    console.log('val|' + vals)
    this.pname = vals;

    if (vals != undefined){
      if (vals.length>1){
        this.no_items_found=false;
        this.items_ziko=true
      
        this.Load_products()
           
      }else{
        this.userRecords = []
        this.no_items_found=true;
        this.items_ziko=false
      }
    }

   
  }
  // async openModal(idata) {
 
  //   //console.log( "this.pnamethis.Wcf.Contents " + this.Wcf.Contents)
  //   const modal = await this.modalController.create({
  //     component: PopMessagesPage ,
  //     swipeToClose: false,
  //     componentProps: {
  //       "paramID": 3,   //this for reaching the right function
  //       "paramTitle": idata,
       
  //      },
  //     cssClass: 'posting-popup',     
  //     backdropDismiss:false, 
      
  //   });
  //   modal.onDidDismiss().then((dataReturned) => {
  //     if (dataReturned !== null) {
  //       this.dataReturned = dataReturned.data;
  //       console.log("this.dataReturned: " + this.dataReturned);
  //       this.products = []
  
        
  //       this.fb.logEvent(this.fb.EVENTS.EVENT_PARAM_SEARCH_STRING)
  //      // this.fb.logEvent(this.fb.EVENTS.EVENT_PARAM_SEARCH_STRING,this.pname,0)
  
  
  //       if (this.dataReturned == "no data"){
  //         this.no_items_found=true;
  //         this.items_ziko=false
  //         this.items = ""
  //       }else{
  //         this.no_items_found=false;
  //         this.items_ziko=true
  //         this.Load_products(this.dataReturned);
  //       }
       
        
  //     }
  //   });
  
  //   return await modal.present();
  // }

  userRecords
  Load_products() {

    this.userRecords = [{
      "id": 1,
      "name": "Leanne Graham",
      "email": "Sincere@april.biz",
      "avatarimage":"assets/Tomato_je.jpg"
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "email": "Shanna@melissa.tv",
      "avatarimage":"assets/Tomato_je.jpg"
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "email": "Nathan@yesenia.net",
      "avatarimage":"assets/Tomato_je.jpg"
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "email": "Julianne.OConner@kory.org",
      "avatarimage":"assets/Tomato_je.jpg"
    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "email": "Lucio_Hettinger@annie.ca",
      "avatarimage":"assets/Tomato_je.jpg"
    },
    {
      "id": 6,
      "name": "Mrs. Dennis Schulist",
      "email": "Karley_Dach@jasper.info",
      "avatarimage":"assets/Tomato_je.jpg"
    },
    {
      "id": 7,
      "name": "Kurtis Weissnat",
      "email": "Telly.Hoeger@billy.biz",
      "avatarimage":"assets/Tomato_je.jpg"
    },
    {
      "id": 8,
      "name": "Nicholas Runolfsdottir V",
      "email": "Sherwood@rosamond.me",
      "avatarimage":"assets/Tomato_je.jpg"
    },
    {
      "id": 9,
      "name": "Glenna Reichert",
      "email": "Chaim_McDermott@dana.io",
      "avatarimage":"assets/Tomato_je.jpg"
    },
    {
      "id": 10,
      "name": "Clementina DuBuque",
      "email": "Rey.Padberg@karina.biz",
      "avatarimage":"assets/Tomato_je.jpg"
    }
  ]
 }

}
