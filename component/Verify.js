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

        <View style={styles.viewLogin}>
          <TextInput
            style={styles.edtName}
            placeholder='EW - 98541'
            underlineColorAndroid='transparent'/>
        </View>

        <View>
          <ButtonVerify insideButton="helo"/>
        </View>
      </View>

    );
  }
}

class ButtonVerify extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.twobtn}>
        <Text>
          {this.props.insideButton}
        </Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  twobtn: {
    height: 50,
    width: 100,
    position: 'relative',
    backgroundColor: 'red',
    top: 20

  },
  container: {
    flex: 1,
    backgroundColor: '#121A1E'
  },
  container_login: {
    backgroundColor: 'blue',
    flexDirection: 'column'
  },
  viewLogin: {
    backgroundColor: 'white',
    top: 20,
    width: 280,
    height: 100,
    alignSelf: 'center',
    borderRadius: 10,
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'center',
    zIndex: 1
  },
  edtName: {
    padding: 10,
    fontSize: 30,
    textAlign: 'center'
  },
  edtPass: {},
  logo: {
    height: 150,
    width: 250,
    marginTop: 10,
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
    position: 'relative'
  }
});
