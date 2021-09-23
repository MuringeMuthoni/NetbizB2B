import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { MyDbService } from '../my-db.service';
import { WcfService } from '../wcf.service';
import { HTTP } from '@ionic-native/http/ngx';
import { Network } from '@ionic-native/network/ngx';

@Component({
  selector: 'app-pop-message',
  templateUrl: './pop-message.page.html',
  styleUrls: ['./pop-message.page.scss'],
})
export class PopMessagePage implements OnInit {
  msg_names;
  modalTitle:string;
  modelId:number;
  Contents;
  divclose:boolean=false;
  divspinner:boolean=true;
  constructor(private modalController: ModalController, public Wcf: WcfService,public mydb:MyDbService,
    private navParams: NavParams,private network: Network,private http: HTTP
    ) { }


    ngOnInit() {
      this.Contents = this.navParams.data.paramTitle;
      console.log("POpMessage Init: " +  this.Contents)
    }
        
    ionViewWillEnter(){
      this.msg_names = "Checking connection...";
      this.check_connection();

    }

    checknet;
    check_connection(){        
      this.Wcf.try_connect()
      .then((data)=>{                           
            if (data == true){           
            
              clearInterval(this.checknet);  
              this.Proceeding(); 
                       
            }else{
              //this.msg_names = "No connection to internet, retrying...";
              this.No_connection_error();
              if (this.checknet == null){
                this.checknet = setInterval(()=> { this.check_connection() }, 1000); 
              }                     
            }
      });
    }
  
  
    No_connection_error(){
      alert('We are having trouble connecting to internet')
      this.modalController.dismiss(this.Wcf.Content_back);
    }


    Proceeding(){
    
      this.modelId = this.navParams.data.paramID;
       console.log('message mode: ' + this.navParams);
   
      if (this.modelId == 0){  
           var conts = this.Contents
           var MainURL = "https://dev-service.netbizholdings.com/Jujus.svc/Log_In?Contents=" + conts         
           this.Wcf.Server_connector_stream(MainURL)
           .then((data: string)=>{
             this.proceed(data);
            })

          } else if (this.modelId ==1){
            var conts = this.Contents
            var MainURL = "https://dev-service.netbizholdings.com/Jujus.svc/insert_order?Contents=" + conts  
            this.Wcf.Server_connector_stream(MainURL)
            .then((data: string)=>{
              this.proceed(data);
             })
          }else{
            alert('param not set');
            this.proceed('not');
          }
   
     }

        
    async proceed(idata){
      this.Wcf.Content_back =idata;
      console.log('closing modal ' + this.Wcf.Content_back)
      await this.modalController.dismiss(this.Wcf.Content_back);

    }

}
