import Firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDFwBFGWmEehVYHXVh7bGYMnec7sYaNo7U",
  authDomain: "spotifyapp-d648e.firebaseapp.com",
  projectId: "spotifyapp-d648e",
  storageBucket: "spotifyapp-d648e.appspot.com",
  messagingSenderId: "379247396980",
  appId: "1:379247396980:web:99bfef210d0af598cfe921",
};

const firebase = Firebase.initializeApp(firebaseConfig);

export { firebase };
