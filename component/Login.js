import React, {Component} from 'react';

// import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  CustomButton,
  Button,
  TouchableOpacity
} from 'react-native';

export default class Login extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image
            style={styles.logo}
            source={require('../../source/images/logo_yellow.png')}/>
          <Text style={styles.sologan}>
            Đăng nhập để nhận vô vàn giải thưởng trong hệ thống của chúng tôi
          </Text>
        </View>
        <View style={styles.fogetPass}>
          <TouchableOpacity>
            <Text
              style={{
              fontSize: 20,
              color: 'white',
              alignSelf: 'center',
              marginBottom: 10,
              marginTop: 20
            }}>
              Quên mật khẩu ?
            </Text>
          </TouchableOpacity>
          <View style={styles.viewLine}>
            <View style={styles.line}></View>
            <Text
              style={{
              color: 'white',
              fontSize: 20
            }}>Hoặc</Text>
            <View style={styles.line}></View>
          </View>
        </View>
        <View>
          <TouchableOpacity >
            <View style={styles.btnFace}>
              <Image source={require('../../source/images/icF.png')}/>
              <Text
                style={{
                color: 'white',
                marginLeft: 20,
                fontSize: 18
              }}>Đăng nhập với Facebook</Text>
            </View>
          </TouchableOpacity>

          {/* Button Create Acc */}
          <TouchableOpacity>
            <View style={styles.btnCreate}>
              <Text
                style={{
                color: 'white',
                fontSize: 14
              }}>
                Tạo tài khoản mới
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text
              style={{
              fontSize: 18,
              color: 'white',
              alignSelf: 'center'
            }}>Điều khoản sử dụng</Text>
          </TouchableOpacity>

        </View>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121A1E'
  },
  viewLogin: {
    backgroundColor: 'white',
    width: 300,
    alignSelf: 'center',
    borderRadius: 10,
    padding: 10
  },
  edtName: {},
  edtPass: {},
  logo: {
    height: 200,
    width: 300,
    alignSelf: 'center'
  },
  sologan: {
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    width: 300
  },
  fogetPass: {
    alignSelf: 'center'
  },
  viewLine: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10
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
    height: 60,
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
