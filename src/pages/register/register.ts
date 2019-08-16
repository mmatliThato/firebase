import { Component } from '@angular/core';

import { Users } from '../../app/user';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';

import * as firebase from 'firebase';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user =  {} as Users;

  constructor(
    public navCtrl: NavController, 
    public alertCtrl: AlertController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  createRegister(user: Users) {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 2000
    })
    loading.present();
    let alertSuccess = this.alertCtrl.create({
        title: 'Registration',
        subTitle: 'you have been Successfully Registered. you can Login.',
        buttons: ['Ok']
    })
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password).then((result) => {
      alertSuccess.present();
      this.navCtrl.push(LoginPage);
    }).catch(function(error) {
      let errorCode = error.code;
      let errorMessage = error.message;
      // Handle Errors here.
      let alert = this.alertCtrl.create({
        title: errorCode,
        subTitle: errorMessage,
        buttons: ['Try Again'],
    })
    alert.present();
    });
 this.navCtrl.push(LoginPage);
  }
  skipRegister(){
    this.navCtrl.push(LoginPage);
  }
 }
  
