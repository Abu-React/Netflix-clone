import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBhPMuyuzZi1UNH2uanlmtGis1DhSZwd_4",
  authDomain: "netflix-clone-aacb5.firebaseapp.com",
  projectId: "netflix-clone-aacb5",
  storageBucket: "netflix-clone-aacb5.appspot.com",
  messagingSenderId: "506253870209",
  appId: "1:506253870209:web:c1e66ee98524f99826f980",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
