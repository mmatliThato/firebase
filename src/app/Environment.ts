export const firebaseConfig = {
    apiKey: "AIzaSyCGJlVMOJuTF1-hawrLUEXFHIA1yz2QzjQ",
    authDomain: "hotelapp-8d97d.firebaseapp.com",
    databaseURL: "https://hotelapp-8d97d.firebaseio.com",
    projectId: "hotelapp-8d97d",
    storageBucket: "hotelapp-8d97d.appspot.com/",
    messagingSenderId: "1066978565810",
    appId: "1:1066978565810:web:b4c9d1d4b41b2014"
  }; 


  export const Transporter = addresHolder => {
      let Storage = [];
      addresHolder.forEach(element => {
          let Element = element.val();
          Element.key = element.key;
          Storage.push(Element);
      });
      return Storage;
  }