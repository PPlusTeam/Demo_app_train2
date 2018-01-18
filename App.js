/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

import Userlogin from './component/Userlogin';
import Splash from './component/Splash';
import Verify from './component/Verify';
import CreateNew from './component/CreateNew';
import FogotPass from './component/FogotPass';
import SetProfile from'./component/SetProfile';
import UpdateProfile from './component/UpdateProfile';

const Navigation = StackNavigator({
  Verify:{screen:Verify},
  Splash : {screen:Splash},
  Userlogin: {screen:Userlogin},
  CreateNew:{screen:CreateNew},
  FogotPass:{screen:FogotPass},
  SetProfile:{screen:SetProfile},
  UpdateProfile:{screen:UpdateProfile}
},
{
    headerMode: 'none',
});

export default Navigation;

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});




// export default class App extends Component<{}> {
//   render() {
//     return (
//         <Userlogin/>)
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
