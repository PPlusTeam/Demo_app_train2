import * as React from 'react';
import {View, Text, StyleSheet, ListView} from 'react-native';

import {TabNavigator} from 'react-navigation';
import {NavigationComponent} from 'react-native-material-bottom-navigation';

import Panel from './com/Panel';

export default class Home extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Home',
        // tabBarIcon: () => (<Icon size={24} color="white" name="tv"/>)
    }
    _genRows(pressData : {[key : number]: boolean}) : Array < string > {

        var data = [];
        var THUMB_URLS = [

            require('../source/images/1.jpeg'),
            require('../source/images/1.jpeg'),
            require('../source/images/1.jpeg'),
    
        ];
        for (var ii = 0; ii < 100; ii++) {

            data.push('Row ' + ii);

        }

        return data;

    }

    constructor() {
        super();
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.state = {
            dataSource: ds.cloneWithRows(['row 1', 'row 2', 'row 2', 'row 2']),
            text1:"Text Demo 1"
        };

        dataSource : ds.cloneWithRows(this._genRows({}))

    }
    
    renderRow(rowData : string, sectionID : number, rowID : number, highlightRow : (sectionID : number, rowID : number) => void) {

        var imgSource = THUMB_URLS[rowID % 10];
        
        return (
            <TouchableHighlight
                onPress={() => {
                highlightRow(sectionID, rowID);
            }}>
                <View>
                    <View style={styles.row}>
                        <Image style={styles.thumb} source={imgSource}/>
                        <Text style={styles.text}>
                            {content.substr(0, rowID % 10 + rowID)}
                        </Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }

    render() {

        return (
            <View>
                <Panel text1={this.state.text1}/>
            </View>
        );
    }
}