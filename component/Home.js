import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    Button
} from 'react-native';
import {TabNavigator} from 'react-navigation';

import Party from './Party';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            home: 'Trasdadwdawng Chủ'
        }
    }

    render() {
        return (
            <View>
                <Text>{this.state.home}</Text>
            </View>
        );
    }
}