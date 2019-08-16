import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';
import * as firebase from 'firebase';
import { Users } from '../../app/user';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user = {} as Users;
  constructor(public navCtrl: NavController, public navParams: NavParams , public loadingCtrl: LoadingController,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  home(){
    this.navCtrl.push(HomePage);
  }
register(){
  this.navCtrl.push(RegisterPage)
}
login(user: Users) {
  let loading = this.loadingCtrl.create({
    content: 'Please wait...',
    duration: 2000
  })

  loading.present();

let alertSuccess = this.alertCtrl.create({
 title: 'Login',
 subTitle: 'You have Successfully LoggedIn',
 buttons: ['Ok']
})

  firebase.auth().signInWithEmailAndPassword(user.email, user.password).then((result) => {
      alertSuccess.present();
      this.navCtrl.setRoot(HomePage);
  }).catch((error) => {  
    let errorCode = error.code;
    let errorMessage = error.message;
   
    this.alertCtrl.create({
      title: errorCode,
      subTitle: errorMessage,
      buttons: ['Ok']
    }).present();
  });

}

gotoRegister() {
  this.navCtrl.push(RegisterPage);
}
loginWithGoogle(){
  firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider().addScope('https://www.googleapis.com/auth/firebase')).then((result) => {

    var token = result.credential.providerId;
    console.log('logged in with google---');
    this.loads();
    this.navCtrl.setRoot(HomePage);

  }).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
  });

} 
  loads() {
    throw new Error("Method not implemented.");
  }
 

}

