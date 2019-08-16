import { Component } from '@angular/core';
// import { NavController } from 'ionic-angular';
import { AddRoomPage } from '../add-room/add-room';
import { DisplayRoomsPage } from '../display-rooms/display-rooms';

import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams , public loadingCtrl: LoadingController,
    public alertCtrl: AlertController) { 

  }
  addroom(){
this.navCtrl.push(AddRoomPage);
}

findRoom(){
  this.navCtrl.push(DisplayRoomsPage);
  const loading = this.loadingCtrl.create({
    content: 'Please wait...',
    duration: 2000
  });
  loading.present();
 
}
}