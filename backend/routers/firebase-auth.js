const router = require('express').Router();
const bodyparser = require('body-parser');
router.use(bodyparser.urlencoded({ extended: true }));

const firebase = require('firebase/app');
const auth = require('firebase/auth')
const firebaseConfig = {
    apiKey: "AIzaSyDz1g9acfev-DyX44F8E8FiXeypiD2l9e4",
    authDomain: "astranet-app.firebaseapp.com",
    projectId: "astranet-app",
    storageBucket: "astranet-app.appspot.com",
    messagingSenderId: "959368462227",
    appId: "1:959368462227:web:a24cd8c8f2f6a2cebb3266",
    measurementId: "G-FSGZXZQZ8Q"
};
firebase.initializeApp(firebaseConfig);
const email = 'Omo@gmail.com';
const password = '12345';
auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // User signed in successfully
            const user = userCredential.user;
            res.status(200).json({ message: 'Sign-in successful', user });
        })
        .catch((error) => {
            // Handle sign-in errors
           console.log(error.message);
        });
module.exports = router;
