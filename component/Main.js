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
            titleStyle: {
                backgroundColor: 'red'
            },
            tabBarIcon: (<Image
                style={{
                width: 50,
                height: 50
            }}
                source={{
                uri: 'https://facebook.github.io/react/img/logo_og.png'
            }}/>)
        }

    },
    Tab2: {
        screen: Party
    }
}, {
    tabBarPosition: 'bottom',
    tabBarOptions: {
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
        labelStyle: {
            fontSize: 12
        },
        style: {
            backgroundColor: '#FFFFFF',
            height: 65,
            flexDirection: 'column',
            justifyContent: 'center',
        }
    }

})
export default Navigation;