// eb app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBUxZdA7LWBY59z60IA4m6yYr3hIi6TLtY",
    authDomain: "register-form1.firebaseapp.com",
    databaseURL: "https://register-form1.firebaseio.com",
    projectId: "register-form1",
    storageBucket: "register-form1.appspot.com",
    messagingSenderId: "314668683041",
    appId: "1:314668683041:web:6fd36776de3d39a92c7860"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//   create a refernce to register
const registerRef = firebase.database.ref('register');