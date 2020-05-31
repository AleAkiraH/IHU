import React, { Component } from 'react';
import { Text, View, Image } from 'react-native'
import Login from './src/Screens/Login';
import IMC from './src/Screens/IMC';

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        {/* <IMC></IMC> */}
        <Login></Login>
      </View>
    )
  }
  
};
