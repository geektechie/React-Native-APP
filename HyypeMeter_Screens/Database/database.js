import React, { Component } from 'react';
import * as firebase from "firebase";

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,  
  Dimensions,
  TextInput,
  Alert,
  Button 
} from 'react-native';


export default class Database extends Component {

    /**
     * Sets a users mobile number
     * @param userId
     * @param mobile
     * @returns {firebase.Promise<any>|!firebase.Promise.<void>}
     */

    static setUserMobile(objUser,callback) {

        let userMobilePath = "/tbl_users/";                
         var myRef = firebase.database().ref().push();  
         callback(true);        
         return firebase.database().ref(userMobilePath).push({
            userId: myRef.key,
            user_createdTimeStamp: objUser.createdTimeStamp,
            user_updatedTimeStamp: objUser.updatedTimeStamp, 
            user_email: objUser.email,
            user_password: objUser.password,
            user_firstName: objUser.firstname,
            user_lastName: objUser.lastname,            
            user_location: objUser.locationame,
            user_birthdate: objUser.birthday, 
            user_imageUrl: '',
        })
        
    }   

   static setUsedata(objUser,callback) {

        let userMobilePath = "/tbl_users/";        
         var myRef = firebase.database().ref().push();
         callback(true);  
        return firebase.database().ref(userMobilePath).push({
            userId: myRef.key,
            user_createdTimeStamp: objUser.createdTimeStamp,
            user_updatedTimeStamp: objUser.updatedTimeStamp, 
            user_email: objUser.email,
            user_password: objUser.password,
            user_firstName: objUser.firstname,
            user_lastName: objUser.lastname,                        
            user_imageUrl: '',
        })        
    }
    /**
     * Listen for changes to a users mobile number
     * @param userId
     * @param callback Users mobile number
     */
    static listenUserMobile(userId, callback) {

        let userMobilePath = "/tbl_users/" + userId + "/details";

        firebase.database().ref(userMobilePath).on('value', (snapshot) => {

            var mobile = "";
            if (snapshot.val()) {
                mobile = snapshot.val().mobile
            }
            callback(mobile)
        });
    }

    static getUserData(username,password,callback)
    {
        let tblpath = "/tbl_users/";
        var isInvalid = 0;
        firebase.database().ref(tblpath).on('value', (snapshot) => {
            if (snapshot.val())
            {                
                 var items = [];
                      snapshot.forEach((child) => {
                        items.push({
                          email: child.val().user_email,
                          pwd: child.val().user_password,
                          _key: child.key
                        });
                 });   
                 console.log(items.length);   
                 for(var i = 0; i < items.length;i++)
                 {
                    if ( username == items[i].email && password == items[i].pwd)
                    {                          
                        callback(true); 
                        isInvalid = 1;         
                    }
                    else
                    {
                        
                    }
                 }  

                 if (isInvalid != 1)
                 {
                    Alert.alert('Invalid Username or Password!');
                 }                  
            }
            else
            {
                Alert.alert('You first need to SignUp, in order to SignIn');
            }
        });
    }

}

module.exports = Database;
