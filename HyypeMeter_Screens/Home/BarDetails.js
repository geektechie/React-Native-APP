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
  Platform,
  Alert,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';

const background = require('HyypeMeter/Resources/SignUp/SignUpBG.png');
var rightCheck = require('HyypeMeter/Resources/SignUp/GreenRightCheck.png');
var rightUnCheck = require('HyypeMeter/Resources/SignUp/GreenRightUnCheck.png');
var back_button = require('HyypeMeter/Resources/SignUp/back_button.png');
var sidemenu = require('HyypeMeter/Resources/SignUp/sidemenu.png');
var live = require('HyypeMeter/Resources/Home/Live.png');

export default class BarDetails extends Component {
   
   constructor(props){
    super(props);
    this.state = {
      pressStatusER: false,
      pressStatusST: false,
      uriER: require('HyypeMeter/Resources/SignUp/GreenRightUnCheck.png'),
      uriST: require('HyypeMeter/Resources/SignUp/GreenRightUnCheck.png') 
    }
  }

  static navigationOptions =
    { 
      title:'Hyype File', 
      headerStyle: { backgroundColor: '#0091ff' },      
      headerTitleStyle: { color: '#FFFFFF', width : 180},
      headerLeft: (             
         <TouchableOpacity>
           <Image source= {sidemenu} style={{marginLeft: 10,width: 25,height: 25 }} />
         </TouchableOpacity>
      ),
      headerRight: (             
         <TouchableOpacity>
           <Image source= {live} style={{marginRight: 5,width: 50,height: 30 }} />
         </TouchableOpacity>
      )
    };

   render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>       
        <Text>fgdfgdg</Text>         
      </View>   
    );
  }

  onClick_HyypeER() {
    this.setState({
      pressStatusER: true,      
      pressStatusST: false,
      uriER: require('HyypeMeter/Resources/SignUp/GreenRightCheck.png'),
      uriST: require('HyypeMeter/Resources/SignUp/GreenRightUnCheck.png')        
    });
  }
  onClick_HyypeStarter() {
    this.setState({
      pressStatusER: false,      
      pressStatusST: true,
      uriER: require('HyypeMeter/Resources/SignUp/GreenRightUnCheck.png'), 
      uriST: require('HyypeMeter/Resources/SignUp/GreenRightCheck.png')  
    });
  }
  onPressER()
  {
      
  }
}
const styles = StyleSheet.create({
  container: {    
    flex: 1, 
    alignItems: 'center'       
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
    flexDirection: "row",
    alignItems: "stretch"    
  },
  hyypeViewER: {
    flex: 2,
    height: 110,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,      
    marginTop: 180, 
    marginLeft: 20,
    marginRight: 30,
    padding: 10,
  },
  hyypeViewStarter: {
    flex: 2,
    height: 130,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,      
    marginTop: 20, 
    marginLeft: 20,
    marginRight: 30,
    padding: 10,
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
  contentContainer: {
    paddingVertical: 20
  },
  erText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 20,
    color: '#A4A4A4'               
  },
  erTextSelected: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 20,
    color: '#30C569'               
  },
  erText1: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 20,
    color: '#A4A4A4'               
  },
  erTextSelected1: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 20,
    color: '#30C569'               
  },  
  starterText: {
    fontSize: 18,    
    color: '#C1C1C1',
    marginLeft: 20,
    marginTop: 2   
  },
  starterTextSelected: {
    fontSize: 18,    
    color: '#8F8F8F',
    marginLeft: 20,
    marginTop: 2   
  },
  starterText1: {
    fontSize: 18,    
    color: '#C1C1C1',
    marginLeft: 20,
    marginTop: 2   
  },
  starterTextSelected1: {
    fontSize: 18,    
    color: '#8F8F8F',
    marginLeft: 20,
    marginTop: 2   
  },
  imgshadow: {
    shadowColor: '#D7DAE0',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    borderRadius: 10,  
    width: (Platform.OS === 'ios') ? 50 : 60,
    height: (Platform.OS === 'ios') ? 50 : 60,        
    position: 'absolute',        
    left: (Platform.OS === 'ios') ? 250 : 340,    
    bottom: 30    
  },
  imgshadow1: {
    shadowColor: '#939393',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    borderRadius: 5,         
    padding: 10,      
    width: (Platform.OS === 'ios') ? 50 : 60,
    height: (Platform.OS === 'ios') ? 50 : 60,       
    position: 'absolute',        
    left: (Platform.OS === 'ios') ? 250 : 340,    
    bottom: 50    
  },
});
