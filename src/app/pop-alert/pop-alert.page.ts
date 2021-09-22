import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pop-alert',
  templateUrl: './pop-alert.page.html',
  styleUrls: ['./pop-alert.page.scss'],
})
export class PopAlertPage implements OnInit {

  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
    private router: Router
    ) { }

  ngOnInit() {
  }
  async close(){

    var databack: string = "no data"; 
    await this.modalController.dismiss(databack);
  }
  Notyet(){
    this.router.navigate(['/create-order']);
  }
}
