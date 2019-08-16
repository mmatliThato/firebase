import { Component } from '@angular/core';

import * as firebase from 'firebase';
import { Transporter } from '../../app/Environment';
import { DisplayRoomsPage } from '../display-rooms/display-rooms';



import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Rooms } from '../../app/room';


import { HomePage } from '../home/home';
/**
 * Generated class for the AddRoomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-room',
  templateUrl: 'add-room.html',
})
export class AddRoomPage {
  

 
  myphoto: string;
  room = {} as Rooms;
   storageRef = firebase.storage().ref();
   addRooms =  firebase.database().ref('rooms/');
 
   constructor(
     public navCtrl: NavController, 
     public navParams: NavParams,
     public camera: Camera,
     public loading: LoadingController,
     public alertCtrl: AlertController,
     ) {
   }
 
   ionViewDidLoad() {
     console.log('ionViewDidLoad RoomsPage');
   }
 
   takePhoto(sourcetype: number) {
     
     const options: CameraOptions = {
       quality: 100,
       destinationType: this.camera.DestinationType.DATA_URL,
       encodingType: this.camera.EncodingType.JPEG,
       mediaType: this.camera.MediaType.PICTURE,
       sourceType: sourcetype,
       correctOrientation: true
     }
     
     this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
     
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.myphoto = base64Image;
     }, (err) => {
      // Handle error
     
     });
   }
 
   upload() {
     let loaders = this.loading.create({
       content: 'Uploading',
       duration: 3000
     })
    // let storageRef = firebase.storage().ref();
 ​
     const filename = Math.floor(Date.now() / 1000);
 ​
     const imageRef = this.storageRef.child(`my-rooms/${filename}.jpg`);
     loaders.present()
     imageRef.putString(this.myphoto, firebase.storage.StringFormat.DATA_URL)
     .then((snapshot) => {
       console.log('image uploaded');
       this.myphoto = snapshot.downloadURL
       
       let alert = this.alertCtrl.create({
         title: 'Image Upload', 
         subTitle: 'Image Uploaded to firebase',
         buttons: ['Ok']
       });
       alert.present();
     })
   }
 
   ​
   createRooms(room: Rooms) {
     this.upload()
     let alert = this.alertCtrl.create({
       title: 'adding a Hotel',
       subTitle: 'successfully added!',
       buttons: ['Ok']
     })
    if(this.myphoto != '') {
      let newRooms = this.addRooms.push();
    newRooms.set({
      RoomType: room.roomtype,
      Price: room.price,
      Description: room.description,
      image: this.myphoto
    });
 ​
     this.room.price = null;
     this.room.roomtype = '';
     this.room.description = '';
 
 
    alert.present();
    this.save()
 ​
    }else {
     let alert = this.alertCtrl.create({
       title: 'Warning!',
       subTitle: 'Upload image first.',
       buttons: ['Ok']
     })
     alert.present();
    
    }
 
   }
   save(){
     this.navCtrl.push(DisplayRoomsPage);
   }
   
 }
 

