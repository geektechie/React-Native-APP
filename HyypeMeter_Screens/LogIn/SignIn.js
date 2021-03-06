import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
  Animated, 
  Keyboard
} from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as firebase from "firebase";
import { NavigationActions } from 'react-navigation';
import { Form, TextValidator } from 'react-native-validator-form';
import ValidationComponent from 'react-native-form-validator';


const background = require('HyypeMeter/Resources/SignIn/SignInBG.png');
const usernameimg = require('HyypeMeter/Resources/SignIn/profile.png');
const pwdimg = require('HyypeMeter/Resources/SignIn/lock.png');
import Database from "HyypeMeter/HyypeMeter_Screens/Database/database";
var back_button = require('HyypeMeter/Resources/SignUp/back_button.png');
var unamelength = 0;
var pwd = 0;

export default class SignIn extends ValidationComponent {
 
  constructor(props) {
    super(props);
    this.state = {name : "My name", email: "tibtib@gmail.com", number:"56", date: "2017-03-01"};

    this.keyboardHeight = new Animated.Value(0);  
  }

  componentWillMount () {
    this.keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
    this.keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
  }

  componentWillUnmount() {
    this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub.remove();
  }

  keyboardWillShow = (event) => {
    Animated.parallel([
      Animated.timing(this.keyboardHeight, {
        duration: event.duration,
        toValue: event.endCoordinates.height,
      }),      
    ]).start();
  };

  keyboardWillHide = (event) => {
    Animated.parallel([
      Animated.timing(this.keyboardHeight, {
        duration: event.duration,
        toValue: 0,
      }),      
    ]).start();
  };

   render() {
    const { navigate } = this.props.navigation;  
      const backAction = NavigationActions.back({
      key: null
      })   

    var config = {
            apiKey: "AIzaSyDZFIm6IzuWvXMnRj1mUnsTI45YB-_Fo14",
            authDomain: "hyypemeter-4d87c.firebaseapp.com",
            databaseURL: "https://hyypemeter-4d87c.firebaseio.com",
            projectId: "hyypemeter-4d87c",
            storageBucket: "hyypemeter-4d87c.appspot.com",
            messagingSenderId: "834282316060"
         };
    !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

     const objUser = new UserSignIn();     
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
         <Image source={background}  style={styles.image} >
         <TouchableOpacity onPress={() => this.props.navigation.dispatch(backAction) }>
            <Image source= {back_button} style={{width: 20,height:20, marginTop: 30,marginLeft: 10}} />
          </TouchableOpacity>

          <Animated.View style={[styles.container, { paddingBottom: this.keyboardHeight }]}>         
              <View style= {{marginTop: 260, flex: 1}}>
              <View style= {{flexDirection: 'row'}}>
                <Image source= {usernameimg} style= {{width: 20, height: 20,marginLeft: 20,marginTop: 10 }} />
                 <TextInput
                    style={styles.inputStyle}
                    keyboardType = { 'email-address' }
                    returnKeyType = { 'next' }
                    placeholder="UserName" placeholderTextColor= '#FFFFFF'  
                    underlineColorAndroid="transparent"                                                       
                    onChangeText={(username) => { objUser.username = username 
                      unamelength = username.length  }} 
                     onSubmitEditing={(event) => { 
                        this.refs.txtpwd.focus(); 
                      }} />                
              </View>
              <View style= {{width: 320,height: 2, backgroundColor:"#7cb3f7"}} />
              
              <View style= {{flexDirection: 'row',marginTop: 20 }}>
                  <Image source= {pwdimg} style= {{width: 20, height: 20,marginLeft: 20,marginTop: 10 }} />
                  <TextInput
                      ref= 'txtpwd'
                      style={styles.inputStyle}
                      returnKeyType = { 'done' }
                      placeholder="Passsword" placeholderTextColor= '#FFFFFF'  
                      secureTextEntry = {true}   
                      underlineColorAndroid="transparent"                                                                                                                              
                      onChangeText= {(password) => { objUser.password = password 
                        pwd = password.length }} />
                  <View style= {{width: 320,height: 1, backgroundColor:"#7cb3f7"}} />    
              </View>                  
              <View style= {{width: 320,height: 1,backgroundColor:"#7cb3f7"}} />                               

              <TouchableOpacity onPress={() => navigate('ForgotPassword') }>
                <Text style={{ color: '#FFFFFF',fontSize: 12, marginTop: 10 ,marginRight: 20, textAlign: 'right',backgroundColor: 'transparent'}} > Forgot Password </Text>
              </TouchableOpacity>
             <TouchableOpacity style={styles.button} onPress={() => unamelength == 0 || pwd == 0 ? Alert.alert('Please provide all required fields.') : Database.getUserData(objUser.username,objUser.password,(flag) => { navigate('HomeScreenPage') } ) } >
                <Text style={styles.logintext}> Log In </Text>
             </TouchableOpacity> 
             <TouchableOpacity style={{backgroundColor: 'transparent'}} onPress={() => navigate('SignUpPage')} >
              <View style={{ flexDirection: 'row',flexWrap: 'wrap',justifyContent: 'center'}}> 
                 <Text style={{ color: '#FFFFFF',fontSize: 12, marginTop: 20 ,textAlign: 'center',backgroundColor: 'transparent'}}>  Dont have an account ? </Text>             
                 <Text style={{fontSize: 14,fontWeight: 'bold',color: '#FFFFFF',marginTop: 19}}> Sign UP </Text>
              </View>
             </TouchableOpacity>            
            </View>   
            </Animated.View>             
          </Image>  
        </View>          
      </View>  
    );
  }
}
class UserSignIn extends Component
{
  constructor(props){
      super(props);
      this.state = {                       
        username: '',       
        password: '', 
      }       
    }  
}
const styles = StyleSheet.create({
  container: {    
    flex: 1,    
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width, 
  },
  mark: {
    height: 300,
    width: 300,
  },
  image: {
    flex: 1,  
    width: null,
    height: null
  },
  imageContainer: {
    flex: 1,    
    alignItems: "stretch"    
  },
  inputStyle: {
    width: 300,
    height: 45,    
    padding: 15,
    marginLeft: 2,
    fontSize: 14,
    marginTop: 0,  
    color: '#FFFFFF',  
    backgroundColor: 'transparent'
  },
   button: {        
    borderColor: '#FFA802',
    borderWidth: 2.5,
    borderRadius: 40,    
    height:45,
    backgroundColor: '#FFA802', 
    marginTop: 30, 
    marginLeft: 10,
    marginRight: 10,    
    padding: 10,
  }, 
  logintext: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlignVertical: "center",
    textAlign: "center"    
  },

});
