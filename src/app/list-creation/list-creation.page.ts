import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-list-creation',
  templateUrl: './list-creation.page.html',
  styleUrls: ['./list-creation.page.scss'],
})
export class ListCreationPage implements OnInit {

  constructor(private menuCtrl:MenuController,private router:Router) {
    
  }

  ngOnInit() {
  }
  lishshows(){
    this.router.navigate(['/list-shows']);
 }
}
