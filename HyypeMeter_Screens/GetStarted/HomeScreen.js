import React, { Component } from 'react';
import {createStore} from 'redux';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
  Button,
  ScrollView,
  WebView,
  TouchableOpacity,
  Alert
} from 'react-native';


var rightUnCheck = require('HyypeMeter/Resources/SignUp/GreenRightUnCheck.png');
var circle = require('HyypeMeter/Resources/Preferences/Uncheck.png');
var check = require('HyypeMeter/Resources/Preferences/check.png');
var sidemenu = require('HyypeMeter/Resources/SignUp/sidemenu.png');
import SideMenu from 'react-native-side-menu';
import SideMenuPage from 'HyypeMeter/HyypeMeter_Screens/LogIn/Menu.js';

import CheckBox from 'react-native-check-box'
import keys from 'HyypeMeter/keys.json'
import Toast from 'react-native-easy-toast'

export default class samp extends Component {
 
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      isOpen: false,
      selectedItem: 'About',    
    };
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
      title:'HYYPEMETER Says', 
      headerStyle: { backgroundColor: '#0091ff' },      
      headerTitleStyle: { color: '#FFFFFF', width : 180},
      headerLeft: (             
               <TouchableOpacity onPress={() => togglemenu()}>
                 <Image source= {sidemenu} style={{marginLeft: 10,width: 25,height: 25 }} />
               </TouchableOpacity>
      )
      
    };

    render() {

        const menu = <SideMenuPage onItemSelected={this.onMenuItemSelected} />;
        return (
             <SideMenu 
                    menu={menu}
                    isOpen={this.state.isOpen}
                    onChange={isOpen => this.updateMenuState(isOpen)}
                  >
            <View style={styles.container}>
                  <TextInput
                        style={styles.inputStyle}
                        placeholder="Search" placeholderTextColor= '#999999' />   
                        <ScrollView>
                    <Text style={{ color: '#0091ff',fontSize: 18,fontWeight: 'bold',marginLeft: 13,marginBottom: 10 }}>HYYPE Five</Text>                                                                               
                     <TouchableOpacity style={styles.button} onPress={() => Alert.alert('hello.') }>            
                         <Text style={styles.logintext}> Open Bar </Text> 
                    </TouchableOpacity>  
                    <TouchableOpacity style={styles.button} onPress={() => Alert.alert('hello.') }>            
                         <Text style={styles.logintext}> Alley Kat Bar </Text> 
                    </TouchableOpacity> 
                    <TouchableOpacity style={styles.button} onPress={() => Alert.alert('hello.') }>            
                         <Text style={styles.logintext}> Drink Houston </Text> 
                    </TouchableOpacity> 
                    <TouchableOpacity style={styles.button} onPress={() => Alert.alert('hello.') }>            
                         <Text style={styles.logintext}> Post Oak Longue </Text> 
                    </TouchableOpacity> 
                    <TouchableOpacity style={styles.button} onPress={() => Alert.alert('hello.') }>            
                         <Text style={styles.logintext}> Davenports </Text> 
                    </TouchableOpacity> 

                    <View style= {{width: 320,height: 1,marginTop: 10,backgroundColor:"#f6f6f6"}} /> 
                    <TouchableOpacity style={styles.button1} onPress={() => Alert.alert('hello.') }>            
                         <Text style={styles.logintext1}> Pharoah Hookah </Text> 
                    </TouchableOpacity> 
                    <TouchableOpacity style={styles.button1} onPress={() => Alert.alert('hello.') }>            
                         <Text style={styles.logintext1}> Cloud 9 Longue </Text> 
                    </TouchableOpacity> 
                    <TouchableOpacity style={styles.button1} onPress={() => Alert.alert('hello.') }>            
                         <Text style={styles.logintext1}> Jamaica Jamaica </Text> 
                    </TouchableOpacity> 
                    <TouchableOpacity style={styles.button1} onPress={() => Alert.alert('hello.') }>            
                         <Text style={styles.logintext1}> Zanzibar </Text> 
                    </TouchableOpacity>   
                    <TouchableOpacity onPress={() => Alert.alert('hello.') }>            
                         <Text style={{ color: '#ececec', fontSize: 16, textAlign: 'center',marginTop: 20 }}> Show All </Text> 
                    </TouchableOpacity>  
                    <Text></Text>
                    </ScrollView>
            </View>
            </SideMenu>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',        
    },
    item: {
        flexDirection: 'row',
    },
    line: {
        flex: 1,
        height: 0.3,
        backgroundColor: 'darkgray',
    },
    inputStyle: {
    width: 300,
    height: 45,
    borderWidth: 0.5, 
    padding: 15,
    borderColor: '#D7D7D7',
    borderRadius: 8, 
    marginLeft: 10,
    fontSize: 14,
    marginBottom: 10,
    marginTop:10,
    backgroundColor: '#fafafa'
   },
   button: {       
    borderColor: '#FFA802',
    borderWidth: 2.5,
    borderRadius: 40,    
    height:45,
    backgroundColor: '#FFA802', 
    marginTop: 10, 
    marginLeft: 10,
    marginRight: 10,    
    padding: 10,
  }, 
  logintext: {
    fontSize: 18,    
    color: '#FFFFFF',
    textAlignVertical: "center",
    textAlign: "left"        
  },
  button1: {       
    borderColor: '#ececec',
    borderWidth: 1.0,
    borderRadius: 40,    
    height:45,
    backgroundColor: '#FFFFFF', 
    marginTop: 10, 
    marginLeft: 10,
    marginRight: 10,    
    padding: 10,
  }, 
  logintext1: {
    fontSize: 18,    
    color: '#000000',
    textAlignVertical: "center",
    textAlign: "left"        
  },
})