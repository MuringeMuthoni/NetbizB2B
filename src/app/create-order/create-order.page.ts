import { Component, OnInit } from '@angular/core';
import { WcfService } from '../wcf.service';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.page.html',
  styleUrls: ['./create-order.page.scss'],
})
export class CreateOrderPage implements OnInit {
 prodname
  constructor(private wcf:WcfService) {
     this.prodname = this.wcf.content;
    console.log("this.prodname" + this.prodname)
   }
 
  ngOnInit() {
    
  }

}
