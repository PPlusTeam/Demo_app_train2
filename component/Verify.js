import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  CustomButton,
  Button,
  TouchableOpacity,
  Icon
} from 'react-native';


export default class Userlogin extends Component {

  static navigationOptions = {
    title: "Verify"
  }
  render() {


    return (
      <View style={styles.container}>
        <View>
          <Image
            style={styles.logo}
            source={require('../source/images/logo_yellow.png')}/>
          <Text style={styles.sologan}>
            Đăng nhập để nhận vô vàn giải thưởng trong hệ thống của chúng tôi
          </Text>
        </View>

        <View style = {styles.viewLogin}>
          <TextInput
            style={styles.edtName}
            placeholder='EW - 98541'
            underlineColorAndroid='transparent'
          />

          </View>
          <TouchableOpacity
            style={{
              top: -90,
              left:310,
              zIndex: 1
            }}>
          <Image
            source={require('../source/images/btnOK.png')}/>

          </TouchableOpacity>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121A1E'
  },
  container_login:{
    backgroundColor:'blue',
    flexDirection:'column'
  },
  viewLogin: {
    backgroundColor: 'white',
    top: 20,
    width: 280,
    height: 150,
    alignSelf: 'center',
    borderRadius: 10,
    padding: 10,
    zIndex: 1
  },
  edtName: {
    padding: 20,
    fontSize 20,
  },
  edtPass: {},
  logo: {
    height: 150,
    width: 250,
    marginTop:10,
    alignSelf: 'center'
  },
  sologan: {
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
    width: 240
  },
  fgP: {
    color: 'white',
    alignSelf: 'center',
    position: 'relative',
  },
  viewLine: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  or:{
    color: 'white',
    fontSize: 14
  },
  line: {
    height: 1,
    alignSelf: 'center',
    width: 100,
    margin: 10,
    alignSelf: 'center',
    backgroundColor: 'white'
  },
  btnFace: {
    height: 50,
    width: 300,
    backgroundColor: '#3B5998',
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 5
  },
  btnCreate: {
    height: 50,
    width: 160,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 80,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 20
  }
});
