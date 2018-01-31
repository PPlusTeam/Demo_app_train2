import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    Button
} from 'react-native';
import {StackNavigator} from 'react-navigation';

import Party from './Party';



export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            home: 'dawdawd'
        }
    }

    render() {
        return (
            <View>
                <Text
                    style={{
                    backgroundColor: 'red',
                    width: null
                }}>{this.state.home}</Text>
            </View>

        );
    }
}
