
import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  };

  // počiatočné nastavenie firebase (init)
  firebase.initializeApp(firebaseConfig)

  // počiatočné nastavenie služieb (services)
  const projectFirestore = firebase.firestore()

  export { projectFirestore }