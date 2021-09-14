import { Injectable } from '@angular/core';
import * as utf8 from 'crypto-js/enc-utf8';
import * as AES from 'crypto-js/aes';
import { Platform } from '@ionic/angular';
import { Diagnostic } from '@ionic-native/diagnostic/ngx';
import { WcfService } from './wcf.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  Cate_main: Array<{client_id: number, id:number, image_name: string,  image_url: string}>;
  Cate_two: Array<{id:number, cid:number, image_name: string,  image_url: string}>;
  Cate_featured: Array<{id:number,cid:number,cid2:number, image_name: string,  image_url: string}>;
  Cate_moja: Array<{id:number,cid:number,cid2:number, image_name: string,  image_url: string}>;
  Client_list: Array<{id:number,image_name: string,  image_url: string,slogan:string}>;
  module_list: Array<{id:number,image_name: string,  image_url: string}>;
  products_ondeal: Array<{id:string, p_name: string,p_desc: string,p_cat: string,unit_cost: string,vatable: string,vatper: string,  image_url: string}>;
  Other_serices: Array<{id:number, image_name: string, description:string,  image_url: string}>;
  Cate_three:  Array<{id:number,cid: number, image_name: string,  image_url: string}>;
  Cate_two_three; //=[]; //:  Array<{id2:number,image_name2: string, id3:number,image_name3: string,  image_url_3: string}>;
 
  constructor(public Wcf:WcfService) { }
  
  getCart_services() {    
    if (this.Other_serices != undefined) {
      return this.Other_serices;
   }else{
     this.encrypt_string()       
   }
   // return this.Other_serices;
  }
  Encripted
  encrypt_string(){

    
   var msg =  this.Wcf.User_id  + ";all;" + this.Wcf.user_Geo_loc +  ";7979";  
   var encrypted = AES.encrypt(msg,'att@2020@').toString();
   var MainURL = "https://mat.logistics.co.ke/Jujus.svc/Categories_fetch?Contents="; 
      // console.log('Encrypted text: ' + msg)      
       this.Wcf.Server_connector_stream(MainURL) 
         .then((data)=>{          
           this.Await_categories(data);
          
         },
         (error) => {
           console.log('Service error: ' + error.error);
            //alert('error');  
         
         
         })
       
 
    }

    Await_categories(data){
      
      //console.log('cats ' + data);
      this.Cate_main = [];
      this.Cate_two = [];
      this.Cate_featured = [];
      this.Cate_moja = [];
      this.Client_list = [];
      this.module_list = [];
      this.products_ondeal = [];
      this.Other_serices = [];
      this.Cate_three=[];
      this.Cate_two_three=[]
 
      var splitcats = data.split("!"); 
      var Cat1 = splitcats[0]
      var Cat2 = splitcats[1]
      var Cat3 = splitcats[2]
      var Clients = splitcats[3]
      var modules = splitcats[4]
      var ondeal = splitcats[5]
      var oservices = splitcats[6]
      var versions = splitcats[7]
      //console.log('ondeal split ' + ondeal);
      this.Cate_two_three =[]
 
     // console.log('Clients ' + Clients);
          var cats1 = Cat1.split("|");     
            for(let i=0; i<cats1.length; i++){           
  
                   var catitems = cats1[i].split(";");                     
                      if (catitems.length>2) { 
                       
                          var C_id = catitems[0];
                          var Cat_name = catitems[1];
                          var Icon_path = catitems[2];
                          var client_id = catitems[3];
                         
                          this.Cate_main.push({
                           client_id:client_id,
                            id:C_id,
                            image_name: Cat_name,                     
                            image_url: 'https://webstores.logistics.co.ke/images/Categories_images/'+Icon_path,                       
                          });
                         
                      }
                     // console.log('client id: ' +client_id )
 
              }
 
              //category2
              var cats2 = Cat2.split("|");    
              this.Cate_two_three = cats2
             // console.log('Cats3_only ' +cats2) 
              
             
             
              for(let i=0; i<cats2.length; i++){ 
               if (cats2.length>2) {    
 
                   var cat2_zote =  cats2[i].split("*"); 
                   var cat2_only=  cat2_zote[0];
                   var cat3_only =  cat2_zote[1];
 
                   if (cat3_only != undefined) {    
                     // if (cat3_only.length>2) { 
                     //     // console.log('Cats2_only ' +cat2_only) 
                         
                     //    var cat2_split = cat2_only.split(";");                     
                     //      if (cat2_split.length>2) {      
                     //         var id2 = cat2_split[0];  //1                 
                     //          var C_id2 = cat2_split[1];  //1
                     //          var Cat_name2 = cat2_split[2];//phones & accessories
                           
                     //           var cat3_split = cat3_only.split("#");
                     //           for(let i=0; i<cat3_split.length; i++){ 
                     //           var cat3row = cat3_split[i]
 
                     //             if (cat3row.length>2) {
                     //               console.log('Cats3 row: ' + cat3row) 
 
                     //               var cat3items = cat3row.split(";");  
                     //               var cat3items_id = cat3items[0];  
                     //               var cat3items_name = cat3items[1];
                     //               var cat3items_image = cat3items[2];    
                     //               //this.Cate_two_three.push('name: ' + cat3items_name, 'image' + cat3items_image)                            
                     //                // console.log('array: ' + C_id2 +","+Cat_name2+''+cat3items_id+''+cat3items_name+''+cat3items_image) 
                                   
                     //               // this.Cate_two_three.push({cat3items_id,cat3items_name,cat3items_image})
                     //             }
 
                                
 
                     //            }
                                     
 
                     //           }
 
                     //    }
 
 
                       
 
                // console.log('on cat 2')
                 // category3
                    var cat2_items = cat2_only.split(";");                     
                      if (cat2_items.length>2) { 
 
                         var id = cat2_items[0];
                          var C_id = cat2_items[1];
                          var Cat_name = cat2_items[2];
                          var Icon_path = cat2_items[3];
                         
                          this.Cate_two.push({
                            id:id,
                            cid: C_id,
                            image_name: Cat_name,                     
                            image_url: 'https://webstores.logistics.co.ke/images/Categories_images2/'+Icon_path,                       
                          });    
                         // console.log('cat two id: ' + id + ' cid: ' + C_id + ' name: ' + Cat_name)
                      }
 
 
                     
                     // category3
                     var cat3_split = cat3_only.split("#");
                     for(let i=0; i<cat3_split.length; i++){ 
                     var cat3row = cat3_split[i]
 
                       if (cat3row.length>2) {
                         //console.log('Cats3 row: ' + cat3row) 
 
                         var cat3items = cat3row.split(";");  
                         var cat3items_id = cat3items[0];  
                         var cat3items_cid = cat3items[1]; 
                         var cat3items_name = cat3items[2];
                         var cat3items_image = cat3items[3];
                       
                                              
                          this.Cate_three.push({
                            id:cat3items_id,
                            cid:cat3items_cid,
                            image_name: cat3items_name,                     
                            image_url: 'https://webstores.logistics.co.ke/images/Categories_images2/'+cat3items_image,                       
                          });  
                         // console.log('cat three  id: ' + cat3items_id +  ' cid: ' + cat3items_cid + ' name: ' + cat3items_name)            
                      }
                     }
 
 
                     }
 
 
                   }
 
 
                 }
 
               
 
 
              // console.log('on featured')
 
               //Featured
             var cats3 = Cat3.split("|");     
              for(let i=0; i<cats3.length; i++){           
  
                   var destitems2 = cats3[i].split(";");                     
                      if (destitems2.length>2) { 
                       
                       var id = destitems2[0];
                       var C_id = destitems2[1];
                         var C_id2 = destitems2[2];
                         var Cat_name = destitems2[3];
                         var Icon_path = destitems2[4];
                         var featured = destitems2[5];                       
                         
                         if (featured == "1"){
                          this.Cate_featured.push({
                             id:id,
                             cid:C_id,
                             cid2:C_id2,
                             image_name: Cat_name,                     
                             image_url: 'https://webstores.logistics.co.ke/images/Categories_images3/'+Icon_path,                        
                          });
                         }
                         //console.log('' + 'https://ponty.logistics.co.ke/images/Categories_images2/'+Icon_path)
                      }
               }
 
 
              //  MOJA
             var cats4 = cats3   
             for(let i=0; i<cats4.length; i++){           
 
                     var destitems3 = cats4[i].split(";");                     
                     if (destitems3.length>2) { 
                      
                       var id = destitems3[0];
                       var C_id = destitems3[1];
                         var C_id2 = destitems3[2];
                         var Cat_name = destitems3[3];
                         var Icon_path = destitems3[4];
                         var featured = destitems3[5];
                        
                         this.Cate_moja.push({
                           id:id,
                           cid:C_id,
                           cid2:C_id2,
                           image_name: Cat_name,                     
                           image_url: 'https://webstores.logistics.co.ke/images/Categories_images3/'+Icon_path,                       
                         });
 
                        //console.log('' + 'https://ponty.logistics.co.ke/images/Categories_images3/'+Icon_path)
                     }
               }
 
               //  CLIENTS
               var cats5 = Clients.split("|");               
               for(let i=0; i<cats5.length; i++){           
   
                       var cat5 = cats5[i].split(";");                     
                       if (cat5.length>2) { 
                        
                         var id = cat5[0];
                         var Cat_name = cat5[1];
                         var lat = cat5[2];
                         var lng = cat5[3];
                           var Icon_path = cat5[4];
                           var slogan = cat5[5];
                          // console.log('cat name: ' + Cat_name); 
 
                           this.Client_list.push({
                             id:id,
                             image_name: Cat_name, 
                             slogan:slogan,                    
                             image_url: 'https://webstores.logistics.co.ke/images/Stores_images/'+Icon_path,                       
                           });
   
                         // console.log('' + 'https://ponty.logistics.co.ke/images/Stores_images/'+Icon_path)
                       }
                 }
 
                  //  MODULES
                 
               var cats6 = modules.split("|");   
              // console.log('module: ' + cats6)
               for(let i=0; i<cats6.length; i++){           
   
                       var cat6 = cats6[i].split(";");                     
                       if (cat6.length>2) { 
                        
                         var id = cat6[0];
                         var Cat_name = cat6[1];                        
                           var icon = cat6[2]
                           var Icon_path: any = 'https://webstores.logistics.co.ke/images/Other_images/'+ icon;
 
                           this.module_list.push({
                             id:id,
                             image_name: Cat_name,                     
                             image_url: Icon_path,                       
                           });
   
                         // console.log('module: ' + Icon_path)
                       }
                 }
 
                   //  ondeal
                   //id:string,ondeal:string, p_name: string,p_desc: string,p_cat: string,unit_cost: string,vatable: string,vatper: string,  image_url: string
               var cats7 = ondeal.split("|");   
               //console.log('deals: ' + cats7)
               for(let i=0; i<cats7.length; i++){           
   
                       var cat7 = cats7[i].split(";");                     
                       if (cat7.length>2) { 
                           var icon = cat7[7]
                           var Icon_path: any = 'https://webstores.logistics.co.ke/images/Products_images/'+ icon;
                                                    
                           this.products_ondeal.push({
                             id:cat7[0],
                             p_name: cat7[1],  
                             p_desc: cat7[2], 
                             p_cat: cat7[3], 
                             unit_cost: cat7[4], 
                             vatable: cat7[5], 
                             vatper: cat7[6],                            
                             image_url: Icon_path,                       
                           });
   
                       }
                 }
 
 
 
                  //  OTHER SERVICES
                 
               var cats8 = oservices.split("|");   
               // console.log('module: ' + cats6)
                for(let i=0; i<cats8.length; i++){           
    
                        var cat8 = cats8[i].split(";");                     
                        if (cat8.length>2) { 
                         
                            var id = cat8[0];
                            var Cat_name = cat8[1];   
                            var Descri = cat8[2];                       
                            var icon = cat8[3]
                            var Icon_path: any = 'https://webstores.logistics.co.ke/images/Services_images/'+ icon;
  
                            this.Other_serices.push({
                              id:id,
                              image_name: Cat_name, 
                              description: Descri,                                                 
                              image_url: Icon_path, 
                                                    
                            });
    
                           //console.log('serices: ' + Icon_path)
                        }
                  }
 
                  //Version
 
                  var cats9 = versions.split("|"); 
                 // console.log('version data: ' + versions)
                   for(let i=0; i<cats9.length; i++){           
       
                           var vers = cats9[i].split(";");                     
                           if (vers.length>1) { 
                             var version = vers[0];
                             var app = vers[1];
                              var updtype = vers[2];
 
                             if (app == "services"){
                               console.log('updatetype: ' + updtype)
                            //   this.Wcf.Lastest_version = version
                               //this.Wcf.update_type = updtype
                             }
                           }
                         }
 
                
  
                      
                  
      }
  

}
