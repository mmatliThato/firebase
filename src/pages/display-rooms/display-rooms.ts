import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { Transporter } from '../../app/Environment';
import { BookingPage } from '../booking/booking';



/**
 * Generated class for the DisplayRoomsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-display-rooms',
  templateUrl: 'display-rooms.html',
})
export class DisplayRoomsPage {
  sum:number;
  price=0;
  rooms = [];
  ref = firebase.database().ref('rooms/');

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ref.on('value', address => {
      this.rooms = Transporter(address);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DisplayRoomsPage');
  }
  

  delete(key){
    firebase.database().ref('rooms/'+key).remove();
  }

  book(){
    this.navCtrl.push(BookingPage);
  }
  bookNow(price: any){
    this.navCtrl.push(BookingPage, price);
  }

}
