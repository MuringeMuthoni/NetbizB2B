import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';
//import { HTTP } from '@ionic-native/http/ngx';
import { HTTP } from '@ionic-native/http/ngx';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Router } from '@angular/router';
import * as AES from 'crypto-js/aes';

@Injectable({
  providedIn: 'root'
})
export class WcfService {
  public where_from="none";
  public Fetched_user: string;
  public Count : number =0;
  public Contents;
  Error_message ="Sorry, we have encoutered an unexpected error while processing the request"; 
  public User_id: string;
  public  Username: string;
  public  user_log_status: string;
  public dbname: String ="db010";
  public Content_back;
  public reg_id = "0";
  nowisconnected: boolean;
  public ison=0; 
  public Category_selected;
  public Category_id;
  public Category_description;
  public user_Geo_loc;
  public user_Geo_enabled;
  public backurl="";
  constructor(private network: Network,private http: HTTP,private sqlite: SQLite,private router:Router) { }


  
  
try_connect(){
  //console.log('checking net')
  return new Promise((resolve) =>{ 
    //console.log('checking net2')
  // if no internet, notice is a string
  if (this.network.type == 'none' ) { 
    // stuff if disconnected
    this.nowisconnected = false;
    console.log("hakuna net")
    // reject(this.nowisconnected)
  } else {
    //stuff if connected
    this.nowisconnected = true;
   // console.log("net iko")
  }
    resolve(this.nowisconnected);
    return this.nowisconnected
  })

}

 
Token = "40M@22&5Mp.m@22*1B@30*"
Server_connector_stream(url){
  console.log('stream.. ' + url)

  let TIME_IN_MS = 9000;
    
   
     return new Promise((resolve, reject) =>{ 

       //setTimeout( () => {

       if (this.network.type != 'none' ) {       
       
       var MainURL = "https://api-fixpal.netbizholdings.com/Jujus.svc/API_handshake";  
       this.http.get(MainURL, {}, {
         authorization: this.Token,
         cashe: 'no-cache',
         Conte: 'application/json;charset=UTF-8'       
       }).then((response) => {
        
          var  Auth = response.data  
          console.log('handshake: ' + Auth)

          if (Auth.length<3){
            this.router.navigate(['/connection-error']); 
            resolve("error");      
            return
          }

          if (Auth.indexOf('err') >= 0  || Auth.indexOf('no-token') >= 0  || Auth.indexOf('invalid') >= 0  ){                
            this.router.navigate(['/connection-error']); 
            resolve("error");      
            return
          }

          var Searchurl = url
          console.log('link ' + Searchurl);

          this.http.get(Searchurl, {}, {
            Token: Auth,
            cashe: 'no-cache',
            Conte: 'application/json;charset=UTF-8'
          }).then((data) => {

           var idata = data.data
           var Result = idata.replace("\"","");
           var rt = Result.replace("\"", "");
           var rt2 = rt.replace('"', "");    
            
              var sanitized = rt2.trim()
             // console.log('payloading.. ' + sanitized)   
            
              if  (sanitized.indexOf('error') >= 0) {  
                  resolve("error");      
                }else{  
                  var payload = sanitized;
                 // console.log('payload.. ' + payload)   
                  resolve(payload)            
                }
            
              })
              .catch((error) => {
              
                console.log('host 1 error: ' + error.error);
                var err = error.error;   
                if (err ==="The host could not be resolved"){
                  console.log("hatupati host"); 
                }
                resolve("error");
                //resolve("error")
              })
            })
        .catch(response => {                  
          console.log('Authorization error: ' + response);

          this.router.navigate(['/connection-error']);               
          resolve("error");
        })


     } else {
       console.log('Net not available '); 
       this.router.navigate(['/connection-error']); 
       
       reject('error');
     }    
  // }, TIME_IN_MS);
 })


}

}
