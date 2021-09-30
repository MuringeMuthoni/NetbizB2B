import { Component, OnInit } from '@angular/core';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.page.html',
  styleUrls: ['./invoice.page.scss'],
})
export class InvoicePage implements OnInit {
selected_date;
  daBuilding
  segmentModel = "confirmation";
  divsec2:boolean=false
  divsec3:boolean=false
  divsec:boolean=true
  divSeldate: boolean =false;
  divselocation:boolean=true;
  divselocation2:boolean=false
  divcheckout:boolean=true;
  divtosummary:boolean=true;
  deli;
  sched;
  pesa ='mpesa';
  Delivery_fee = 0;
  products_fee;
  Products_fee_show
  divPaynow:boolean=true
  divPaylater:boolean=false
  divPaylaterNot:boolean=false
  divshowmpesaadvice: boolean =false;
  items_sum: Array<{ prodtotal: string,prodplus:string }>;
  constructor( private datePicker: DatePicker,public datepipe: DatePipe,) {
      
    this.daBuilding = [
      { id: 0,avatarimage:'assets/cabbage.jpg', prodname: 'White Cabbage ',pricerangeA: 'KSH 2000',Bysupplier: 'Bella hut',proquantity:"2" },  
      { id: 1,avatarimage:'assets/red_onions.jpg', prodname: 'red onions',pricerangeA: 'KSH 2000',Bysupplier: 'Bella hut',proquantity:"2" },  
       
   
    ];
    this.items_sum = [];
    this.deli ='no_del';
    this.sched = 'soonest';
    this.pesa = "mpesa";
    //this.deli[0] = 'no_del';
   }

  ngOnInit() {
  }

  get_dates(){
  
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      date =>
      // console.log('Got date: ', date
       this.selected_date = this.datepipe.transform(date, 'yyyy-MM-dd')
      // this.selected_date = '' + date
       ),
      err => console.log('Error occurred while getting date: ', err)
    //);
  }


  mode=0
  deliChecked(){

    console.log('sel ' + this.deli);   

    if (this.deli == 'out'){
      this.divselocation2 = true
      this.divsec=false
      //this.wcf.Delivery_latlng="";   
      this.mode=1
   
     // this.router.navigate(['/delivery-location']);
    }else{
      this.divselocation2 = false
      this.divsec=true
     /// this.wcf.Delivery_latlng = this.wcf.user_Geo_loc
      this.divselocation=false
      this.divcheckout=true
    //  this.Delifee = ""
    //  console.log('deli: ' + this.wcf.Delivery_latlng)
    
    }
  }
  notavailreasons
  TotalCheckout 
  product_sales_mode
  Pay_method_Checked(){
  
    console.log('selected money ' + this.pesa);   

    if (this.pesa == 'mpesa'){
      this.divPaynow = true
      this.divPaylater = false
      this.divtosummary = true
      this.divPaylaterNot =false
     // this.wcf.paymode ="pay now"

    }else{
      this.divPaynow = false
      //this.wcf.paymode ="pay later"

      if (this.TotalCheckout < 1000){
        this.divPaylaterNot =true
        this.divPaylater = false
        this.divtosummary = false
        this.notavailreasons = "below"
      }else if (this.TotalCheckout > 20000){
        this.divPaylaterNot =true
        this.divPaylater = false
        this.divtosummary = false
        this.notavailreasons = "above"
      }else{
        this.divPaylaterNot =false
        this.divPaylater = true
        this.divtosummary = true
        this.notavailreasons = "none"
      }


      if (this.product_sales_mode != "none"){
        this.divPaylaterNot =true
        this.divPaylater = false
        this.divtosummary = false
        this.notavailreasons = "on deal"
      }



      
    }
  }


}
