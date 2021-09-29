import { Component, OnInit } from '@angular/core';
import { WcfService } from '../wcf.service';
import { MenuController, ModalController, Platform } from '@ionic/angular';
import { PopMessagePage } from '../pop-message/pop-message.page';
import { NgZone } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.page.html',
  styleUrls: ['./create-order.page.scss'],
})
export class CreateOrderPage implements OnInit {
 prodname
 
 usage={
  prodname:'',
  prodqty:'',
  proddesc:'',
}
  constructor(private Wcf:WcfService,public modalController: ModalController,private zone: NgZone,private router:Router) {
     this.prodname = this.Wcf.content;
    console.log("this.prodname" + this.prodname)
   }
 
  ngOnInit() {
    
  }
  pprodname
  pprodqty
  pproddesc
  create_order(){
    
    

    var prodqty  = this.usage['prodqty'];
    console.log(" prodqty" + prodqty)
    if(prodqty.length<2) {             
       alert("Sorry, the product name is invalid")
      return
    }
    this.pprodqty = prodqty


    var proddesc  = this.usage['proddesc'];
    console.log(" proddesc;" + proddesc)
    if(proddesc.length<2) {        
      alert("Sorry, the product description is invalid")
      return
    }
    this.pproddesc = proddesc


  
    this.openModal();

  //  this.Wcf.Content_back =""
   
 
}
dataReturned
async openModal() {

       
  var prodname = this.usage['prodname']
  var pprodname = prodname.trim()

  var prodqty  = this.usage['prodqty'];
     
      var proddesc  = this.usage['proddesc'];
      
      var data =  "1;" + this.prodname   + ";" + this.pprodqty + ";" + this.pproddesc  + ";7979"

      console.log('data ' + data)
      const modal = await this.modalController.create({
        component: PopMessagePage ,
        swipeToClose: false,
        componentProps: {
          "paramID": 1,   //this for reaching the right function
          "paramTitle": data,
          },
        cssClass: 'posting-popup',
        backdropDismiss:false,      
      });
      modal.onDidDismiss().then((dataReturned) => {
        if (dataReturned !== null) {
          this.dataReturned = dataReturned.data;
          
          console.log("this.dataReturned" + this.dataReturned)
          var feedback = this.dataReturned;  
          console.log(feedback + "rt")   
          
          if (feedback.indexOf("Error") >= 0){       
              alert(this.Wcf.Error_message);
          }else if (feedback.indexOf("Exists") >= 0){ 
                //alert("Account Exists, please sign up");
               
                alert("Exist") 
          }else if (feedback.indexOf("Success") >= 0){ 
          // this.userid=feedback;
             console.log("na save user DATA " + feedback)
             alert("Saved Successfully") 
            
          }
    
        }
      });
    
      return await modal.present();
}
items
enter_expense(){

   

  var prodqty  = this.usage['prodqty'];
  console.log(" prodqty" + prodqty)
  if(prodqty.length<2) {             
     alert("Sorry, the product name is invalid")
    return
  }
  this.pprodqty = prodqty


  var proddesc  = this.usage['proddesc'];
  console.log(" proddesc;" + proddesc)
  if(proddesc.length<2) {        
    alert("Sorry, the product description is invalid")
    return
  }
  this.pproddesc = proddesc

this.items = []
  this.zone.run(() => {
    this.items.push({                   
      name: this.prodname ,  
      amount:this.usage.prodqty,
      desc:this.usage.proddesc,
    });   
    
  });
 
 
  if (this.items.length >0){
    var expenses = 0
    for(let i=0; i<this.items.length; i++){  
      var name = this.items[i].amount    
      console.log('item: ' + name)
      var expcost = this.items[i].amount     
      expenses += +expcost      
    }

   

  }else{
    var prodname = this.usage.prodname
    var pprodqty = +this.usage.prodqty
    var proddesc = this.usage.proddesc 

   }

  this.usage['prodname'] =""
  this.usage['pprodqty'] = ""
  this.usage['proddesc'] = ""

}
letsviewquotation(){
  this.router.navigate(['/list-of-orders']);
 }

}
