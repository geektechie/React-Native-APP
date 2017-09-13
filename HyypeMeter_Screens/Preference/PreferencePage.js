import React, { Component } from 'react';
import RadioButton from 'react-native-radio-button';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,  
  Dimensions,
  TextInput,
  Alert,
  Button,
  ScrollView,
  TouchableOpacity,
  Platform
} from 'react-native';

var circle = require('HyypeMeter/Resources/Preferences/Uncheck.png');
var check = require('HyypeMeter/Resources/Preferences/check.png');
var sidemenu = require('HyypeMeter/Resources/SignUp/sidemenu.png');
import SideMenu from 'react-native-side-menu';
import SideMenuPage from 'HyypeMeter/HyypeMeter_Screens/LogIn/Menu.js';
let togglemenu = null;

export default class PrefencePage extends Component {

   constructor(props)
     {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
          avatarSource: null,
          videoSource: null,     
          isOpen: false,
          selectedItem: 'About',                      
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
      title:'How Do You Hyype', 
      headerStyle: { backgroundColor: '#0091ff' },      
      headerTitleStyle: { color: '#FFFFFF', width : 180},
      headerLeft: (
              <TouchableOpacity onPress={() => togglemenu()}>
                <Image source= {sidemenu} style={{marginLeft: 10,width: 25,height: 25 }} />
              </TouchableOpacity>
            )
    };

   render() {
    const { navigate } = this.props.navigation;
    const objUser1 = new UserModel()
    objUser1.userType = this.props.navigation.state.params.name;
    const menu = <SideMenuPage onItemSelected={this.onMenuItemSelected} />;

    return (
       <SideMenu 
        menu={menu}
        isOpen={this.state.isOpen}
        onChange={isOpen => this.updateMenuState(isOpen)}
       >  
      <View style={styles.container}>       
        <ScrollView contentContainerStyle={styles.contentContainer}>       
            <Text style={styles.music}>Music Preferences</Text>
              <Option 
                options={['Top 40','Electronica/House','Country','Latin/Salsa/Merengue','Hip Hop','Reggae/Dancehall','Soul/R&B','Afrobeat','Pop/Alternative','Karaoke']}
                onChange={(option) => {   
                    objUser1.musicval = option               
                }} /> 
            <Text style={styles.music}>Mood</Text>
             <Option 
              options={['Upscale','Chill','Social','High Energy','Laid Back','Hybrid']}
              onChange={(option) => {
                objUser1.moodval = option;
              }} /> 
            <Text style={styles.music}>Crowd</Text>    
             <Option 
              options={['VIP','College','Professional','Urban','Mature','International']}
              onChange={(option) => {
                objUser1.crowdval = option;
              }} />
           <TouchableOpacity style={styles.button} onPress={() => objUser1.userType == 'ER' ? navigate('SignUP',{ obj: objUser1 }) : navigate('SignUPER',{ obj: objUser1 })} >
              <Text style={styles.logintext}> Sign Up </Text>
           </TouchableOpacity>  
           <Text></Text>  
           </ScrollView>       
      </View>
      </SideMenu>
    );
  }  
 
  }

const titleConfig = {
  title: 'How Do You Hyype',
  tintColor: '#FFFFFF'
};

const rightButtonConfig = {
  title: 'Next',
  tintColor: '#FFFFFF',  
  handler: () => alert('hello!'),
};

class UserModel extends Component {
    constructor(props){
      super(props);
      this.state = {
          userType: null,
          musicval: null,
          moodval: null,
          crowdval: null,   
      }       
    }    

}

class Option extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeOption: this.props.options[0],               
    };
  }
  updateActiveOption = (activeOption) => {
    this.setState({
      activeOption,                  
    });
  };
  render() {
    return (
      <View
        style={{          
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginTop: 10,
          marginLeft: 5,          
        }}
      >      
        {this.props.options.map((option, index) => (
          <TouchableOpacity key= {index}
            onPress={() => {
              this.props.onChange(option);
              this.updateActiveOption(option);
            }} >          
              
            <Text style={{              
                width: Dimensions.get('window').width / 2 - 3,                
                height: 50,
                paddingLeft: 10,                
                fontSize: responsiveFontSize(2),                   
                color: this.state.activeOption === option ? 'black' : '#A4A4A4',
              }} > 
              <Image source={this.state.activeOption === option ? check : circle}
                     style={styles.checkIcon} />
            {option} 
            </Text> 
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  }, 
  image: {
    flex: 1,  
    width: null,
    height: null
  },
  imageContainer: {
    flex: 1,
    margin: 50,
    flexDirection: "column",
    alignItems: "stretch"    
  },
  imgshadow: {    
    width:55,
    height: 55       
  },
  checkIcon: {
   width: Platform.OS == 'ios' ? 25 : 80,
   height: Platform.OS == 'ios' ? 25 : 80,
   marginTop: Platform.OS == 'ios' ? 8 : 0,   
  },
  navBar: {
    
  },
  music: {
    color: '#ffa802',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 10
  },
  musicoptions: {
    fontSize: responsiveFontSize(2),
    color: '#A4A4A4',
    marginLeft: 12,  
    marginTop: 10,            
  },
  musicoptions1: {    
    fontSize: responsiveFontSize(2),
    color: '#A4A4A4',    
    marginLeft:  Dimensions.get('window').width / 2,
    marginTop: 10,      
  },
  contentContainer: {    
  },
  imgCircle: {    
    width: 25,
    height: 25,        
    bottom: 0,
    left : 5, 
    flex: 2   
  },
   imgCircle1: {   
    width: 25,
    height: 25,              
    bottom: 0,
    left: 145, 
    flex: 2   
  },
  spacingCSS: {        
    width: Dimensions.get('window').width / 2,
    flexDirection: 'row', 
    marginTop: 10,
    flex: 2   
  }, 
  spacingCSS1: {    
    marginLeft: 10,
    marginTop: 10,
    width: Dimensions.get('window').width / 2,
    flex: 2
  }, 
  button: {   
    flex: 2, 
    borderColor: '#FFA802',
    borderWidth: 2.5,
    borderRadius: 40,    
    height:45,
    backgroundColor: '#FFA802', 
    marginTop: 15, 
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
