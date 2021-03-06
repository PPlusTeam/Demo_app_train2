import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

import {TabNavigator} from 'react-navigation';
import FontAwesome, {Icon} from 'react-native-fontawesome';
import Home from './Home';
import Party from './Party';

const Navigation = TabNavigator({
  MainHome: {
    screen: Home,
    navigationOptions: {
      title: "Trang Chủ",
      tabBarIcon: ({tintColor}) => (<Image style={[styles.icon]} source={require('../source/images/icon/buger_choice.png')}/>),
      titleStyle: {
        backgroundColor: 'red'
      }
    }

  },
  Tab2: {
    screen: Party,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (<Image style={[styles.icon]} source={require('../source/images/icon/ic_compass_choice.png')}/>)
    }
  },
  Tab3: {
    screen: Party,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (<Image style={[styles.logo]} source={require('../source/images/icon/ic_logo.png')}/>)
    }

  },
  Tab4: {
    screen: Party,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (<Image style={[styles.icon]} source={require('../source/images/icon/diamond.png')}/>)
    }
  },
  Tab5: {
    screen: Party,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (<Image style={[styles.icon]} source={require('../source/images/icon/ic_user.png')}/>)
    }
  }
}, {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showIcon: true,
    showLabel: false,
    activeTintColor: 'black',
    inactiveTintColor: 'gray',
    tabStyle: {
      paddingTop: 0,
      margin: 0, //Padding 0 here
    },
    style: {
      backgroundColor: 'white',
      height: 70,
      width: null,
      padding: 0,
      flexDirection: 'column',
      justifyContent: 'center'
    },
    iconStyle: {
      width: 70,
      height: 70,
      marginTop: 0,
      marginBottom: 0,
      padding: 0
    }
  }

})
export default Navigation;
const styles = StyleSheet.create({
  icon: {
    height: 30,
    width: 30
  },
  logo: {
    height: 70,
    width: 70
  }
});
