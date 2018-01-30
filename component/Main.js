import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,

} from 'react-native';

import {StackNavigator,TabNavigator} from 'react-navigation';

import Home from './Home';

const Navigation = StackNavigator({
    Home: {screen:Home}
})
 export default Navigation;
