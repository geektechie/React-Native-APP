import React, { Component } from 'react';
import ActionSheet from 'react-native-actionsheet';
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
  ScrollView,
  Platform,
  TouchableOpacity
} from 'react-native';
import * as firebase from "firebase";
import SideMenu from 'react-native-side-menu';
import SideMenuPage from 'HyypeMeter/HyypeMeter_Screens/LogIn/Menu.js';
import Database from "HyypeMeter/HyypeMeter_Screens/Database/database";
import ImagePicker from 'react-native-image-picker';
var Uncheck = require('HyypeMeter/Resources/SignUp/GreenRightUnCheck.png');
const iconimg = require('HyypeMeter/Resources/SignUp/sidemenu.png');
const rightCheck = require('HyypeMeter/Resources/SignUp/GreenRightCheck_1.png');
var defaultimg = require('HyypeMeter/Resources/SignUp/DefaultUploadImg.png');
var sidemenu = require('HyypeMeter/Resources/SignUp/sidemenu.png');
var name = '';
let togglemenu = null;
var requiredarr = ['a'];
var emaillen = 0;
var pwdlen = 0;
var fnamelen = 0;
var lnamelen = 0;
var userlen = 0;
var loclen = 0;
var bdaylen = 0;
var imglen = 0;

export default class SignUP extends Component {
 
   constructor(props)
   {
      super(props);
      this.toggle = this.toggle.bind(this);
      this.state = {
        avatarSource: null,
        videoSource: null,     
        isOpen: false,
        selectedItem: 'About',  
        terms: Uncheck,   
        flag : false ,                 
      }           
   }

   componentDidMount() {
    togglemenu = this.toggle;    
   }

  toggle() {
     this.setState({
      isOpen: !this.state.isOpen,      
    });   
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen });
  }

   onMenuItemSelected = item =>
    this.setState({
      isOpen: false,
      selectedItem: item,
      bgcolor1: '#0091ff'
    });

   static navigationOptions =
    { 
      title:'Hyype File', 
      headerStyle: { backgroundColor: '#0091ff' },      
      headerTitleStyle: { color: '#FFFFFF', width : 180},
      headerLeft: (             
           <TouchableOpacity onPress={() => togglemenu()}>
             <Image source= {sidemenu} style={{marginLeft: 10,width: 25,height: 25 }} />
           </TouchableOpacity>
      )
    };

   onpressClick()
   {    
      Alert.alert(name);  
   }

    saveData(objuser) { 
      Alert.alert('sfdsf');      
    }

    selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = { uri: response.uri };
        this.setState({
          avatarSource: source
        });
      }
    });
  }


   render() {
    const { navigate } = this.props.navigation;  
    const menu = <SideMenuPage onItemSelected={this.onMenuItemSelected} />;

    var obj = this.props.navigation.state.params.obj;
    console.log(obj.userType);

    var config = {
            apiKey: "AIzaSyDZFIm6IzuWvXMnRj1mUnsTI45YB-_Fo14",
            authDomain: "hyypemeter-4d87c.firebaseapp.com",
            databaseURL: "https://hyypemeter-4d87c.firebaseio.com",
            projectId: "hyypemeter-4d87c",
            storageBucket: "hyypemeter-4d87c.appspot.com",
            messagingSenderId: "834282316060"
         };
    !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
    
    var dateFormat = require('dateformat');
    var today = new Date();    
    var createdDate = dateFormat(today, "dd-mm-yyyy hh:MM:ss");
    const objUser = new UserData();
    objUser.createdTimeStamp = createdDate;
    objUser.updatedTimeStamp = createdDate;
    
    return (
       <SideMenu 
        menu={menu}
        isOpen={this.state.isOpen}
        onChange={isOpen => this.updateMenuState(isOpen)}
      >      
      <View style={styles.container}>       
        <ScrollView style={styles.container}>       
         <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)} >
          <View style={{width: Dimensions.get('window').width - 15, height: 100 , marginLeft: 8,marginTop: 13}}> 
           <Image source={ this.state.avatarSource === null ? defaultimg : this.state.avatarSource } style={{flex:1,width: null,height:null,alignItems: "center"}} />             
          </View> 
          </TouchableOpacity>  
          <View style={{ marginTop: 10 }}>             
            <TextInput
            style={styles.inputStyle}
            placeholder="Email" placeholderTextColor= '#999999'
            keyboardType = { 'email-address' }
            returnKeyType = { 'next' }
            value = { objUser.email }        
            underlineColorAndroid="transparent"                                                                     
            onChangeText={(email) => { objUser.email = email 
                  emaillen = email.length
               }}
            onSubmitEditing={(event) => { 
                        this.refs.txtpwd.focus(); 
                      }}  />
            <TextInput
            ref= 'txtpwd'
            style={styles.inputStyle}
            placeholder="Password" placeholderTextColor= '#999999'
            secureTextEntry = {true}
            returnKeyType = { 'next' }
            underlineColorAndroid="transparent"                                                       
            onChangeText={(password) => { objUser.password = password 
            pwdlen = password.length
               }} 
            onSubmitEditing={(event) => { 
                        this.refs.txtfname.focus(); 
                      }} />
            <TextInput
            ref= 'txtfname'
            style={styles.inputStyle}
            returnKeyType = { 'next' }
            underlineColorAndroid="transparent"                                                       
            placeholder="First Name" placeholderTextColor= '#999999'
            onChangeText={(firstname) => { objUser.firstname = firstname 
             fnamelen = firstname.length
               }}
            onSubmitEditing={(event) => { 
                        this.refs.txtlname.focus(); 
                      }}  />
            <TextInput
            ref= 'txtlname'
            style={styles.inputStyle}
            underlineColorAndroid="transparent"                                                       
            returnKeyType = { 'next' }
            placeholder="Last Name" placeholderTextColor= '#999999'
            onChangeText={(lastname) => { objUser.lastname = lastname 
              lnamelen = lastname.length
             }} 
            onSubmitEditing={(event) => { 
                        this.refs.txtuname.focus(); 
                      }} />
            <TextInput
            ref= 'txtuname'
            style={styles.inputStyle}
            underlineColorAndroid="transparent"                                                       
            returnKeyType = { 'next' }
            placeholder="Username" placeholderTextColor= '#999999'
            onChangeText={(username) => { objUser.username = username 
            userlen = username.length

            }} 
            onSubmitEditing={(event) => { 
                        this.refs.txtlocation.focus(); 
                      }} />
            <TextInput
            ref= 'txtlocation'
            style={styles.inputStyle}
            returnKeyType = { 'next' }
            underlineColorAndroid="transparent"                                                       
            placeholder="Location" placeholderTextColor= '#999999'
            onChangeText={(location) => { objUser.locationame = location
              loclen = location.length
               }}
            onSubmitEditing={(event) => { 
                        this.refs.txtbday.focus(); 
                      }}  />
            <TextInput
            ref= 'txtbday'
            style={styles.inputStyle}
            returnKeyType = { 'done' }
            underlineColorAndroid="transparent"                                                       
            placeholder="Birthday" placeholderTextColor= '#999999'
            onChangeText={(birthday) => { objUser.birthday = birthday
             bdaylen = birthday.length
               }} />

            <TouchableOpacity onPress = {() => { this.setState({ flag : true })}}>
            <View style={{ flexDirection: 'row',flexWrap: 'wrap'}}>                       
              <Text style= {{fontSize: 14, color: '#A4A4A4',paddingLeft: 10}}>                 
                   <Image source={ this.state.flag ? rightCheck : Uncheck } style={{width: Platform.OS == 'ios' ? 25 : 100, height: Platform.OS == 'ios' ? 25 : 100,
                    marginTop: Platform.OS == 'ios' ? 8 : 0,marginLeft: 10}} /> I have read                 
              </Text>                          
              <Text style= {{fontSize: 14, marginTop: Platform.OS == 'ios' ? 12 : 13 }} > Terms & Conditions </Text>               
            </View>
            </TouchableOpacity> 
            <TouchableOpacity style={styles.button} onPress={() => emaillen == 0 || pwdlen == 0 || fnamelen == 0 || lnamelen == 0 || userlen == 0 || loclen == 0 || bdaylen == 0 ? Alert.alert('Please enter all the feilds in order to Sign Up.') : Database.setUserMobile(objUser, (flag) => { navigate('HomeScreenPage') } ) }>            
              <Text style={styles.logintext}> Sign Up </Text> 
           </TouchableOpacity> 
         </View>
         <Text></Text>
         </ScrollView>
      </View>
      </SideMenu>
    );
  } 

}
class UserData extends Component {
    constructor(props){
      super(props);
      this.state = {
        createdTimeStamp: '',
        updatedTimeStamp: '',        
        email: '',
        password: '',
        firstname: '',
        lastname: '',
        username: '',
        locationame:'',
        birthday: '', 
        imgProfile: '',  
      }       
    }   
}

const titleConfig = {
  title: 'Hyype File',
  tintColor: '#FFFFFF'
};

const rightButtonConfig = {
  title: 'Back',
  tintColor: '#FFFFFF',    
  handler: () => alert('hello!'),
};

const styles = StyleSheet.create({
  container: {    
    flex: 1,     
    backgroundColor: '#FFFFFF',    
  },
  imageContainer: {
    flex: 1,
    margin: 50,    
    flexDirection: "row",
    alignItems: "stretch"    
  },
  inputStyle: {
    width: Dimensions.get('window').width - 20,
    height: 45,
    borderWidth: 0.5, 
    padding: 15,
    borderColor: '#D7D7D7',
    borderRadius: 8, 
    marginLeft: 10,
    fontSize: 14,
    marginBottom: 10,
    backgroundColor: '#fafafa'
  },
  button: {       
    borderColor: '#0091FF',
    borderWidth: 2.5,
    borderRadius: 40,    
    height:45,
    backgroundColor: '#0091FF', 
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
