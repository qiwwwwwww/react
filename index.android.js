import React, {
  Component,
} from 'react';
import {
  AppRegistry,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
  Navigator,
  BackAndroid,
  ToolbarAndroid
} from 'react-native';

var OutlineNav = require('./OutlineNav');
var FrontNav = require('./FrontNav');

var ScrollableTabView = require('react-native-scrollable-tab-view');



class pay_by_data extends Component{

render(){
    return (
      <ScrollableTabView tabBarPosition='bottom'
            initialPage={0}>
        <FrontNav tabLabel="React" />
        <OutlineNav tabLabel="Flow" />
      </ScrollableTabView>

    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  toolbar: {
    backgroundColor: '#a9a9a9',
    height: 56,
  },
});

AppRegistry.registerComponent('pay_by_data', () => pay_by_data);

module.exports = pay_by_data;


