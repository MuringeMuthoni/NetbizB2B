import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { MyDbService } from '../my-db.service';
import { WcfService } from '../wcf.service';
import { CategoriesService } from '../categories.service';
import { DefaultService } from '../default.service';
import { ModalController } from '@ionic/angular';
import { PopMessagePage } from '../pop-message/pop-message.page';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  daBuilding;
  pname = "";
  
  filterTerm: string;
  usage={     
    searchQuery:'',
    bname:'',

  }
  Awaiting_interval;
  dataReturned:any;
  slideOptions = {
    initialSlide: 1,
    speed: 90000,
  };
  sliderOne: any;
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true
  };
 
 
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
 
  
  slideOpts_special = {
   slidesPerView: 1,
   freeMode: false,
   coverflowEffect: {
     rotate: 50,
     stretch: 0,
     depth: 100,
     modifier: 1,
     slideShadows: true,
   }
 };
 
  items_ziko:boolean=false;
  no_items_found:boolean=false;
  constructor(private router: Router,private Loc: Location,
    private defalt:DefaultService,private Cat_service: CategoriesService,
    private wcf:WcfService,private modalController:ModalController
    ) { 

 this.daBuilding = [
      { id: 0,avatarimage:'assets/Tomato_je.jpg', prodname: 'Tomato',proddesc: 'Tomato',currentksh: 'Ksh 6000'   },
      { id: 1,avatarimage:'assets/kales.jpg', prodname: 'Kales',proddesc: 'Kales',currentksh: 'Ksh 1000'     },
      { id: 2,avatarimage:'assets/red_onions.jpg', prodname: 'Red Onions',proddesc: 'Red Onions',currentksh: 'Ksh 1000 '     },
      { id: 3,avatarimage:'assets/cabbage.jpg', prodname: 'Cabbage"',proddesc: 'test',currentksh: 'Ksh 2000 '   },
      { id: 4,avatarimage:'assets/hoho.jpeg', prodname: 'Hoho"',proddesc: 'Hoho',currentksh: 'Ksh 1000 '   },
      { id: 5,avatarimage:'assets/MweaPishori.png', prodname: 'Mwea Pishori"',proddesc: 'Mwea Pishori',currentksh: 'Ksh 31000 '     },   
    ];

      if (this.filterTerm === " "){
        this.router.navigate(['/create-order']);
      }
    }

   
    
    ngOnInit() {
      this.Load_default();
    }
  
    subscription2;
    Load_default(){ 
  
      this.defalt.Complete_service()
        .then((data) => {     
          this.Load_services();
        })
     
    }
  
  
    
    currentitems;
    yeswefix;
    yesserices;
    Checkitems;
  
    Load_services(){
      console.log('on services');
      this.yeswefix =[]
            
     
      var datas  =  this.Cat_service.getCart_services(); 
      if ( datas != undefined){  
            console.log('Loading services: ' + datas )
  
            this.yesserices=[]
            var counts=0;
            datas.forEach( (element) => {
            counts +=1
            // if (counts <5){
                this.yesserices.push({ 
                  image_id:element.id,
                  image_name: element.image_name,
                 // image_url: element.image_url,
                 // image_desciption: element.description     
                })
            // } 
              console.log('services: ' + element.image_name, )
            })
  
            try {
              clearInterval(this.Checkitems);
            } catch (error) {                    
            }
  
           
          }else{
            if (this.Checkitems == null){            
              this.Checkitems = setInterval(()=> { this.Load_services() }, 1000); 
            } 
  
          }
  
    }
    
  
    
  orderclicked(event, item) {
  
    this.router.navigate(['/view-cart']);
  
    // this.wcf.Category_selected = item.image_name;       
    // this.wcf.Category_id = item.image_id;
  
    // console.log('category: ' + item.image_name + ' : ' + item.image_id)
    this.router.navigate(['/view-cart']);
  
  }
  
  
  
    // proceed(){
    //   this.router.navigate(['/request-description']);
    // }
  
  
       
    go_home(){
    
    this.Loc.back();
   }
   
   products = [];
   getItems(ev: any) {
    const vals = ev.target.value;
    console.log('val|' + vals)
    this.pname = vals;

    if (vals != undefined){
      if (vals.length>1){
        this.wcf.Contents =  this.pname 
        console.log("search: " + this.wcf.Contents)
          this.openModal(this.wcf.Contents);       
      }else{
        this.products = []
        this.items = ""
        this.no_items_found=false;
      }
    }

   
  }
  items=""
 
async openModal(idata) {
 
  //console.log( "this.pnamethis.Wcf.Contents " + this.Wcf.Contents)
  const modal = await this.modalController.create({
    component: PopMessagePage ,
    swipeToClose: false,
    componentProps: {
      "paramID": 3,   //this for reaching the right function
      "paramTitle": idata,
     
     },
    cssClass: 'posting-popup',     
    backdropDismiss:false, 
    
  });
  modal.onDidDismiss().then((dataReturned) => {
    if (dataReturned !== null) {
      this.dataReturned = dataReturned.data;
      console.log("this.dataReturned: " + this.dataReturned);
      this.products = []

      
    

      if (this.dataReturned == "no data"){
        this.no_items_found=true;
        this.items_ziko=false
        this.items = ""
      }else{
        this.no_items_found=false;
        this.items_ziko=true
        this.Load_products(this.dataReturned);
      }
     
      
    }
  });

  return await modal.present();
}
  
Load_products(data) {

  this.products = []

  var zote = data.split("|");  
  if (zote == undefined){
    this.items = ""
    return
  }
  var itemslength = zote.length
  var lens =0
  lens = itemslength -1;
  this.items = lens + " products found"

  for(let i=0; i<itemslength; i++){               

         var Desc = zote[i].split(";");                     
            if (Desc.length>2) { 
             
              console.log('id: ' + Desc[0])
                var P_id = Desc[0];
                var P_name = Desc[1];
                var P_desc = Desc[2];                         
                var unit_cost = Desc[3];                        
                var vat_per = Desc[4];
                var Icon_path = Desc[5]; 
                var Icon_path2 = Desc[6]; 
                var Icon_path3 = Desc[7]; 
                var pole = Desc[8]; 
                var var_type = Desc[9]
                var cost_min = Desc[10]
                var cost_max = Desc[11]
                var vids_url = Desc[12]

                if (Desc[12] != undefined){
                  vids_url = "none"
                }
                console.log('vids_url ' + vids_url)

                var currency
                if (var_type == "Simple Product"){
                  currency = "Ksh." + unit_cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")             
                 }else{
                   var min = "Ksh." + cost_min.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") 
                   var max = "Ksh." + cost_max.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") 
                   currency =  min + " - " + max
                }

                this.products.push({
                  id:P_id,
                  p_name: P_name, 
                  p_desc: P_desc,                           
                  p_cost: unit_cost,
                  vatper: vat_per,  
                  currentksh: currency,
                  image_url: 'https://b2b.netbizholdings.com/images/Products_images/'+Icon_path,   
                  image_url2: 'https://b2b.netbizholdings.com/images/Products_images/'+Icon_path2,   
                  image_url3: 'https://b2b.netbizholdings.com/images/Products_images/'+Icon_path3,   
                  pole:pole, 
                  var_type: var_type, 
                  vids_url:vids_url
                });                                
            }
    }
      
}

ServicesClicked(event, names) {
  
  
  var proname = names.p_name;
  var proid = names.id;
  var cat_url = names.image_url;     
  var cat_url2 = names.image_url2;     
  var cat_url3 = names.image_url3;    
  var cat_desc = names.p_desc;     
  var cat_pcost = names.unit_cost//.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  var cat_vat = names.vatable; 
  var pole = names.polepole;   
  var var_type = names.var_type;
  var costsho = names.costsho;
  var vids_url = names.vids_url
 
    
  
  
  this.router.navigate(['/view-cart']); 




}


  }
  

