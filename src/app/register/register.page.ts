import { Component, OnInit } from '@angular/core';
import { FormService } from '../service';
import { MenuController } from '@ionic/angular'

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm;

  constructor( private formService: FormService, private menu: MenuController ) { 
    this.registerForm = formService.registerForm();
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
