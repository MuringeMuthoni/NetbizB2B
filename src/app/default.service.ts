import { Injectable } from '@angular/core';
import { WcfService } from './wcf.service';
import { Platform, ModalController } from '@ionic/angular';
import {interval} from 'rxjs';;
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import { Diagnostic } from '@ionic-native/diagnostic/ngx';
import { MyDbService } from './my-db.service';
import { PopAlertPage } from './pop-alert/pop-alert.page';


@Injectable({
  providedIn: 'root'
})
export class DefaultService {

  constructor(
    public Wcf: WcfService,private platform: Platform,public mydb:MyDbService,public modalController: ModalController,
    private diagnostic:Diagnostic,private locationAccuracy: LocationAccuracy,
    private androidPermissions:AndroidPermissions,private geolocation: Geolocation,
  ) { }

  Complete_service(){
    return new Promise((resolve, reject) =>{             
      this.Load_initial()



      resolve("ok");
    })


  }



  Load_initial(){

    this.Wcf.user_Geo_loc= "1.2168137!36.906568900000025";
    this.Wcf.user_Geo_enabled = "disabled"
   this.platform.ready().then(() => {
    this.check_connection();  

    //this. encrypt_string();   
   })

  }

    checknet;
    check_connection(){        
      this.Wcf.try_connect()
      .then((data)=>{                           
            if (data == true){   
              try {
                clearInterval(this.checknet);  
              } catch (error) {                
              }
             
              this.CheckPermissions(); 
              this.New_signup();             
              
            }else{  
              var msg = "We are having trouble connecting to intenet. Please check your connection"
              this.pop_alert(msg)
              if (this.checknet == null){
                this.checknet = setInterval(()=> { this.check_connection() }, 1000); 
              }                     
            }
      });
    }

    subscription2
    New_signup(){

      this.mydb.initializeDatabase();      
    
     // this.subscription2 = interval(500).subscribe(x => {         
     //     this.subscription2.unsubscribe (); 
         

         
     // })
     }
    
 

     

Awaiting_interval;
check_geo;

  CheckPermissions(){
    // this.backmsg[0] = "Fetching your location.."
     console.log('permissions request');
     this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(
       result => {
         if (result.hasPermission) {  

           this.askToTurnOnGPS();
           console.log('asking turn on the gps')
         } else {    

          console.log('requesting for permission');
         
         if (this.check_geo == null){
           this.check_geo = setInterval(()=> { this.requestGPSPermission() }, 3000); 
         }         

         }
       },
       err => {
        // alert(err);
         console.log('network error');
       }
     );
 
   }
 

   requestGPSPermission() {

    try {
      clearInterval(this.check_geo);
    } catch (error) {      
    }
    

   //  this.backmsg[0] = "Requesting your location permission"
     this.locationAccuracy.canRequest().then((canRequest: boolean) => {
       if (canRequest) {
        // console.log("4");
       } else {
         //Show 'GPS Permission Request' dialogue
         this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION)
           .then(
             () => {
              
               this.askToTurnOnGPS();
             },
             error => {
               console.log('location not granted...')
             
               this.Wcf.user_Geo_enabled = "disabled"
               //Show alert if user click on 'No Thanks'
              // alert('requestPermission Error requesting location permissions ' + error)
             }
           );
       }
     });
   }
 
 
   askToTurnOnGPS() {
     
     this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
       () => {
         // When GPS Turned ON call method to get Accurate location coordinates
         this.getLocationCoordinates()
        
         //this.startBackgroundGeolocation();
       //  this.log_intervals= setInterval(()=> { this.getLocationCoordinates() }, 20000); 
         console.log('on askto turn on');
       },
       error =>  
        this.permission_denied()                
       //console.log('turning gps on ' +error)
     );
   }
    
   permission_denied(){   
    this.Wcf.user_Geo_loc = "1.2168137!36.906568900000025";
    this.Wcf.user_Geo_enabled = "disabled"
    var msg = "Our services are localized therefore before you make a service request, kindly enable your geo-location"
    this.pop_alert(msg)

}



async pop_alert(idata) { 
const modal = await this.modalController.create({
 component: PopAlertPage ,
 swipeToClose:true,
 componentProps: {
   "paramID": 0,
   "paramTitle": idata,
  },
 cssClass: 'mpesa-popup',     
});

modal.onDidDismiss().then((dataReturned) => {
 if (dataReturned !== null) {

  //  if (this.checkitems == null){       
  //     this.checkitems = setInterval(()=> { this.go_back() }, 500); 
  //   } 
 }
});

return await modal.present();
}


  
  
 
   getLocationCoordinates() {
     console.log('getting geo')
    // console.log('on location cordinate');
     this.diagnostic.isLocationEnabled().then((isEnabled) =>   {
      
      
         //this.backmsg[0] = "Fetching your location.."
       
         var options = {
           timeout: 20000, 
           enableHighAccuracy:true
       }
 
         this.geolocation.getCurrentPosition(options).then((resp) => {          
           let lat = resp.coords.latitude;
           let lng = resp.coords.longitude;
           this.Wcf.user_Geo_loc = lat + "!" + lng;
           this.Wcf.user_Geo_enabled = "enabled"
           this.New_signup();
 
         }).catch((error) => {
           console.log('error location ' + error)
           this.Wcf.user_Geo_enabled = "disabled"           
           this.New_signup();
          // this.backmsg[0] = "Could not establish your location. trying.."          
         });  
 
   });
 }



 Request_location(){
 
  this.requestGPSPermission()
 // this.askToTurnOnGPS();
 }

 skipLocation(){
  this.Wcf.user_Geo_enabled = "disabled"
  this.Wcf.user_Geo_loc = "1.2168137!36.906568900000025";
  this.New_signup();
 }





}
