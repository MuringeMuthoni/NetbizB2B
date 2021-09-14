import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ModalController, Platform } from '@ionic/angular';
import { DatePipe, Location } from '@angular/common';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { AlertController, LoadingController } from '@ionic/angular';
import { MyDbService } from '../my-db.service';
import { ConnectService } from '../connect.service';
import { WcfService } from '../wcf.service';
import { PopMessagePage } from '../pop-message/pop-message.page';
import { PopAlertPage } from '../pop-alert/pop-alert.page';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  segmentModel = "all";
  usage={
    detcompanyname:'',
    detindustryname:'',
    detdescription:'',
    detTelphone:'',
    detfulnames:'',
   
    detemail: '',   
  }

  chart: Array <any>;
  
 
  public dbname: String ="db_ins_master";
  dep : string;
 
  pointerVisible: boolean =false;
  constructor(private router: Router,private menuCtrl:MenuController,private Loc: Location,
    private Wcf:WcfService,private sqlite: SQLite,public mydb:MyDbService,
    private Conn:ConnectService,private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,public modalController: ModalController,
    private datepipe:DatePipe
    ) { 

      
    }

    detcompanyname
    detindustryname
    detdescription
    detTelphone;
    tel;
    Useremail;
     create_account(){
       
           var detcompanyname  = this.usage['detcompanyname'];
           console.log("company name;" + detcompanyname)
           if(detcompanyname.length<2) {        
             var msg = "Sorry, your company name is invalid "
             this.pop_alert(msg)
             return
           }
           this.detcompanyname = detcompanyname
   
   
           var detindustryname  = this.usage['detindustryname'];
           console.log("Industry name;" + detindustryname)
           if(detindustryname.length<2) {        
             var msg = "Sorry, your industry name is invalid "
             this.pop_alert(msg)
             return
           }
           this.detindustryname = detindustryname
   
   
   
           var detdescription  = this.usage['detdescription'];
           console.log("Description;" + detdescription)
           if(detdescription.length<2) {
             var msg = "Sorry, your description is invalid "
             this.pop_alert(msg)
             return
           }
           this.detdescription = detdescription
   
            var detTelphone  = this.usage['detTelphone']; 
            console.log("Telephone;" + detTelphone)
            if(detTelphone.length<10) {
              
              var msg = "Sorry, your your phone number + " + detTelphone + " is invalid "
              this.pop_alert(msg)
   
              return
            }
           var User 
         
   
           var phone = detTelphone.toString()
           console.log('phone: ' + phone)
   
           var start = phone.substring(0,1)
           var sdigit = +start
           console.log('sdigit: ' + sdigit)
   
           if (phone.length < 12){
             if (sdigit != 2){
               var trimuser =  phone   
               User = "254" + trimuser
             }else{
               User =  detTelphone
             }
           }else{
             User = phone
           }
         
           var tels = User //.trim()
   
   
           var emails  = this.usage['detemail'];
           console.log("create_account email;" + emails)
           // var pass  = this.usage['pass'];
           // var pass2  = this.usage['pass2'];
   
           
             var res = /[A-Za-z0-9._%+-]{2,}@[a-zA-Z-_.]{2,}[.]{1}[a-zA-Z]{2,}/
            // var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
             if(!res.test(emails)) {
               
               var msg = "Sorry, your your email  + " + emails + " is invalid "
               this.pop_alert(msg)
   
               return
             }
   
           
   
           this.tel = tels;
          // this.colpassword = pass;
           this.Useremail = emails
   
           this.openModal();
   
           this.Wcf.Content_back =""
          
        
       }
          
         dataReturned:any;     
             
         async openModal() {          
            
               var data =     this.detcompanyname  + ";" + this.detindustryname + ";" + this.detdescription + ";" +  this.tel + ";" + this.Useremail + ";7979"
   
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
                         var msg = "The phone number already in use on another account. Please sign in"
                         this.pop_alert(msg)
                   }else if (feedback.indexOf("Success") >= 0){ 
                   // this.userid=feedback;
                      console.log("na save user DATA " + feedback)
                     this.Save_user(feedback);
                     
                 
                    this.alert_mode = 1
                    var msg = "Success! "
                    this.pop_alert(msg)
   
                 
                   }else{
   
                     var msg = this.Wcf.Error_message
                     this.pop_alert(msg)
                   }
             
                 }
               });
             
               return await modal.present();
         }
           
  ngOnInit() {
  }

  alert_mode=0 
  async pop_alert(idata) { 
    const modal = await this.modalController.create({
      component: PopAlertPage ,
      swipeToClose:false,
      componentProps: {
        "paramID": 0,
        "paramTitle": idata,
       },
      cssClass: 'info2',     
    });
  
    modal.onDidDismiss().then((dataReturned) => {
      
      if (this.alert_mode == 1 ) {      
        this.router.navigate(['/tabs']);
       // this.router.navigate(['/document-registration']); 
      }
  
    });
  
    return await modal.present();
  }
  
Save_user(feedback){

  this.mydb.initializeDatabase();   
  var zote =  feedback.split(";");  
  this.Wcf.User_id = zote[1]; 

 
  var uname =  this.Wcf.Username
  if (uname == undefined){
    uname ="none"
  }
  try {
           
    this.mydb.db.executeSql('INSERT INTO reginfo VALUES (NULL, ? )', [ this.Wcf.User_id ])  
    .then(res => {          
              console.log("na save user " + this.Wcf.User_id )

        })
        .catch(e => {
          console.log('error 1 is: ' + e);         
        });
  } catch (error) {
    console.log(error);
  }



}

Quicksolution(){
  this.router.navigate(['/tabs']);
}
registration(){
  this.router.navigate(['/login']);
}
}
