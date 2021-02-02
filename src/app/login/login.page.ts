import { Component, OnInit } from '@angular/core';
import { FormService } from '../service';
import { MenuController } from '@ionic/angular'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm;

  constructor( private formService: FormService, private menu: MenuController ) { 
    this.loginForm = formService.loginForm();
  }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.menu.swipeGesture(false);
  }

  ionViewWillLeave(){
    this.menu.swipeGesture(true);
  }

}
