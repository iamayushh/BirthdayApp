import * as firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyBVg_R8VV0Voz8AHOgsSq2I0AdiRBUaHQQ",
    authDomain: "birthdayapp-264fb.firebaseapp.com",
    projectId: "birthdayapp-264fb",
    storageBucket: "birthdayapp-264fb.appspot.com",
    messagingSenderId: "590014784004",
    appId: "1:590014784004:web:ff17f17c025130458c8b51"
  };
if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}
export default firebase;