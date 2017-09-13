import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  Button,    
  View
} from 'react-native';

import SplashPage from 'HyypeMeter/HyypeMeter_Screens/Splash/SplashPage';
import HomePage from 'HyypeMeter/HyypeMeter_Screens/GetStarted/HomePage';
import SignUpPage from 'HyypeMeter/HyypeMeter_Screens/SignUP/SignUpPage';
import SignUP from 'HyypeMeter/HyypeMeter_Screens/SignUP/SignUP';
import SignUPER from 'HyypeMeter/HyypeMeter_Screens/SignUP/SignUPER';
import SignIn from 'HyypeMeter/HyypeMeter_Screens/LogIn/SignIn';
import ForgotPassword from 'HyypeMeter/HyypeMeter_Screens/GetStarted/ForgotPassword';
import PreferencePage from 'HyypeMeter/HyypeMeter_Screens/Preference/PreferencePage';
import HomeScreen from 'HyypeMeter/HyypeMeter_Screens/GetStarted/HomeScreen';
import HomeScreenPage from 'HyypeMeter/HyypeMeter_Screens/Home/HomeScreen';
import BarDetails from 'HyypeMeter/HyypeMeter_Screens/Home/BarDetails';

import {
  StackNavigator,
} from 'react-navigation';

export default class HyperMeter extends Component {

   constructor(props){
    super(props);       
  }

  static navigateOptions = {
    title: 'Welcome',    
  };

  render() {
  const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>         
      </View>
    );
  } 
}

const HyypeMeterNav = StackNavigator({       
  HomePage: { screen: HomePage, navigationOptions: { header: null }},  
  SignUpPage: { screen: SignUpPage, navigationOptions: { header: null } },  
  ForgotPassword: { screen: ForgotPassword, navigationOptions: { header: null }},
  PreferencePage: { screen: PreferencePage },   
  SignUP: { screen: SignUP },
  SignUPER: { screen: SignUPER },  
  SignIn: { screen: SignIn , navigationOptions: { header: null } },  
  HomeScreen: { screen: HomeScreen },
  HomeScreenPage: { screen: HomeScreenPage},
  BarDetails: { screen: BarDetails},
  
},{  }
);

const styles = StyleSheet.create({
  container: {    
    flex: 1,    
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },  
});
AppRegistry.registerComponent('HyypeMeter', () => HyypeMeterNav);