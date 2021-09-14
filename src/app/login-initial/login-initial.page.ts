import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-initial',
  templateUrl: './login-initial.page.html',
  styleUrls: ['./login-initial.page.scss'],
})
export class LoginInitialPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  gotologin(){
    this.router.navigate(['/login']);
  }
  gotoregister(){
    this.router.navigate(['/registration']);
  }
}
