import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { Transporter } from '../../app/Environment';
import { LoginPage } from '../login/login';

/**
 * Generated class for the DisplaybookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-displaybooking',
  templateUrl: 'displaybooking.html',
})
export class DisplaybookingPage {
  BookinDetails = [];
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    var user = firebase.auth().currentUser;
    if(user) {
      var ref = firebase.database().ref('BookinDetails/'+user.uid);
      ref.on('value', address => {
      this.BookinDetails= Transporter(address);
    })
    }
   
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DisplaybookingPage');
  }
  delete(key){
    firebase.database().ref('BookinDetails/'+key).remove();
  }
  SignOut(){
    firebase.auth().signOut().then(() => {
      this.navCtrl.setRoot(LoginPage)
    }).catch(function(error) {
      // An error happened.
    });
  }

}
