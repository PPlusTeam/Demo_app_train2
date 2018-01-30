import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    Button
} from 'react-native';
const Left = ({onPress}) => (
    <TouchableHighlight onPress={onPress}>
        <Image source={require('../source/images/ic_qs.png')}/>
    </TouchableHighlight>
);
export default class Home extends React.Component {

    static navigationOptions = {
        title: 'Hdasdasdome',
        headerTitleStyle: {
            color: 'white'
        },
        headerStyle: {
            backgroundColor: '#141E23'
        },
        header: ({ goBack }) => ({
            left: <Left onPress={goBack} />,
          }),
    }

    render() {
        return (
            <View>
                <Text>dawdw</Text>
            </View>
        );
    }
}