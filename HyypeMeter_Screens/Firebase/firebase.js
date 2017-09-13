import * as firebase from "firebase";

class Firebase {

    /**
     * Initialises Firebase
     */
    static initialise() {
         var config = {
            apiKey: "AIzaSyDZFIm6IzuWvXMnRj1mUnsTI45YB-_Fo14",
            authDomain: "hyypemeter-4d87c.firebaseapp.com",
            databaseURL: "https://hyypemeter-4d87c.firebaseio.com",
            projectId: "hyypemeter-4d87c",
            storageBucket: "hyypemeter-4d87c.appspot.com",
            messagingSenderId: "834282316060"
         };
        firebase.initializeApp(config);
    }
}

module.exports = Firebase;
