import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';
export default class Splash extends Component {
  render(){
    return(
      <View style={styles.splash}>
        <Image
          style ={styles.imagesLogo}
          source={require('../../source/images/logo.png')}
         />
      </View>
    );
  }
}
const styles = StyleSheet.create({
splash: {
  flex: 1,
  backgroundColor: '#fcc813',
},
imagesLogo:{
  width: 260,
  height: 240,
  alignSelf:'center',
  marginTop: 80
}
});
