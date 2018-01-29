import React from 'react';
import {View, Text,} from 'react-native';
// import TabNavigator from 'react-native-tab-navigator';

import {NavigationComponent} from 'react-native-material-bottom-navigation';
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation';
// import Icon from 'react-native-vector-icons/MaterialIcons'

import {TabNavigator} from 'react-navigation';

import Home from './Home';

class Tab1 extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Tab1',
        // tabBarIcon: () => (<Icon size={24} color="white" name="tv"/>)
    }

    render() {
        return (
            <View>
                <Text>Tab1</Text>
            </View>
        );
    }
}
class Tab2 extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Tab2',
        // tabBarIcon: () => (<Icon size={24} color="white" name="tv"/>)
    }

    render() {
        return (
            <View>
                <Text>Tab2</Text>
            </View>
        );
    }
}
class Tab3 extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Tab3',
        
    }

    render() {
        return (
            <View>
                <Text>Tab3</Text>
            </View>
        );
    }
}

const tabNav = TabNavigator({
    Tab1: {
        screen: Home
    },
    Tab2: {
        screen: Tab2
    },
    Tab3:{
        screen: Tab3
    }
},{
    tabBarComponent: NavigationComponent,
    tabBarPositionL:'bottom',
    tabBarPosition: 'bottom',
    tabBarOptions:{
        labelColor:'white',
        rippleColor:'white',
        tab:{
            Tab1:{
                barBackgroundColor:'red',
                icon: ({ tintColor }) => (
                    <MaterialIcons
                      name="settings"
                      size={ 30 } 
                      style={{ color: tintColor }}
                    />)
            },
            Tab2:{
                barBackgroundColor:'black'
            }
        }
    }
});
export default tabNav;
// export default class Main extends React.Component {
//     render() {
//         return (
//             <Text>wdawdawd</Text>
//         );
//     }
// }

 class Main extends React.Component {
    render() {
      return (
        <BottomNavigation
          labelColor="white"
          rippleColor="white"
          style={{ height: 56, elevation: 8, position: 'absolute', left: 0, bottom: 0, right: 0 }}
          onTabChange={(newTabIndex) => alert(`New Tab at position ${newTabIndex}`)}
        >
          <Tab
            label="Movies & TV"
            // icon={<Icon size={24} color="white" name="tv" />}
          />
          <Tab
            barBackgroundColor="#00796B"
            label="Music"
            // icon={<Icon size={24} color="white" name="music-note" />}
          />
          <Tab
            barBackgroundColor="#5D4037"
            label="Books"
            // icon={<Icon size={24} color="white" name="book" />}
          />
          <Tab
            barBackgroundColor="#3E2723"
            label="Newsstand"
            labelColor="red"
            // icon={<Icon size={24} color="white" name="newspaper" />}
          />
        </BottomNavigation>
      )
    }
  }