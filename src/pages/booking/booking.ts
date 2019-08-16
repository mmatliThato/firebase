import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Transporter } from "../../app/Environment";
import * as firebase from 'firebase';
import { AlertController } from 'ionic-angular';
import { DisplayRoomsPage } from '../display-rooms/display-rooms';
import { DisplaybookingPage } from '../displaybooking/displaybooking';
import { LoginPage } from '../login/login';


/**
 * Generated class for the BookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-booking',
  templateUrl: 'booking.html',
})
export class BookingPage {
  booking = {

    checkin: '',
    checkout: '',
    adults: null,
    children: null,
   
  }
  
  USER_UID: any;
  createBooking: any;
  KEY: any;
  seeMore: any;
  sum:number;
  price=0;
  Person = {};
  ref = firebase.database().ref('BookinDetails/');

  constructor(public navCtrl: NavController, public navParams: NavParams,  public alertCtrl: AlertController) {
   
    this.ref.on('value', address => {
      Transporter(address)
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookingPage');
    var user = firebase.auth().currentUser;
    console.log(this.booking.checkin);
    

    if(user) {
      this.USER_UID = user.uid;
      this.createBooking = firebase.database().ref('BookinDetails/'+ this.USER_UID);
     
      
    }else {
      console.log('please login First');
      this.navCtrl.setRoot(LoginPage)
    }
  }
  

  createBook(){
    var price = this.navParams.data;
    var total = price*(this.booking.children+this.booking.adults)

    let book = this.createBooking.push();
    book.set({
      Total: total,
      CheckIn: this.booking.checkin,
      Checkout: this.booking.checkout,
      Adults: this.booking.adults,
      Children: this.booking.children
    })
    this.navCtrl.setRoot(DisplaybookingPage);
  }
  cancel(){
    this.navCtrl.pop();
  }
  
}



  // save(details){
  //   if(details!==undefined && details!==null){
  //     let D = this.ref.push();
  //     D.set(details);
    
  
  //     const alert = this.alertCtrl.create({
  //       title: '',
  //       subTitle: 'Booking successful!',
  //       buttons: ['OK']
       
  //     });
  //     alert.present();
  //     this.navCtrl.push(DisplaybookingPage);
  //     this.Person = {};
  //   }else{
  //     const alert = this.alertCtrl.create({
  //       title: 'New Friend!',
  //       subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
  //       buttons: ['OK']
  //     });
  //     alert.present();
  //   }
  
  // }
  // single(){
  //   this.price =this.price+1000;
  
  // }
  // villa(){
  //   this.price =this.price+2000;
    
  // }
  // penhouse(){
  //   this.price =this.price+2000;
    
  // }
  // studio(){
  //   this.price =this.price+1500;
    
  
 
    
  // }
  // one(){
  //   this.price =this.price+100;
    
  // }
  
  // two(){
  //   this.price =this.price+200;
    
  // }
  // three(){
  //   this.price =this.price+300;
    
  // }
  // four(){
  //   this.price =this.price+400;
    
  // }
  // five(){
  //   this.price =this.price+500;
    
  // }
  // six(){
  //   this.price =this.price+600;
    
  // }
  // seven(){
  //   this.price =this.price+700;
    
  // }
  
  // guest(){
  //   this.price =this.price+800;
  // }
  // 1(){
  //     this.price =this.price+100;
      
  //   }
  //   2(){
  //     this.price =this.price+200;
      
  //   }
  //   3(){
  //     this.price =this.price+300;
      
  //   }
  //   4(){
  //     this.price =this.price+400;
      
  //   }
  //   5(){
  //     this.price =this.price+500;
      
  //   }
  //   6(){
  //     this.price =this.price+600;
      
  //   }
  //   7(){
  //     this.price =this.price+700;
      
  //   }
  //   8(){
  //     this.price =this.price+800;
      
  //   }
    
  
  // to(){
    
  //   this.price =this.price+900;

  
  // }
  // from(){
  //   this.price =this.price+1000;
    
  // } 
  // total(){
  //  this.sum=this.price;
    
  // var datein = new Date(this.input2).getDate();
  // var dateout = new Date(this.input3).getDate();
  // this.input7 = this.input4 * Number(dateout - datein);
  // }

  
  // }
  

