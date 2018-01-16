import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';
export default class Splash extends Component {
  
  render(){
    return(
      <TouchableOpacity
        onPress ={
          () => navigate("Userlogin",{})
        }
      >
      <View style={styles.splash}>
        <Image
          style ={styles.imagesLogo}
          source={require('../source/images/logo.png')}
         />
         <Button onPress ={
           () => navigate("Userlogin",{})
           title='next'
         }
      </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
splash: {
  flex: 1,
  backgroundColor: '#fcc813',
},
imagesLogo:{
  height: 300,
  alignSelf:'center',
  marginTop: 80
}
});
