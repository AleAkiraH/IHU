import React, { Component } from 'react';
import { Text, View, Image } from 'react-native'
import Login from './src/Screens/Login';

export default class App extends Component {
  render() {
    // const comments = [{
    //   nickname: 'Roque Dias',
    //   comment: 'Oi eu sou o Dollynho'
    // },{
    //   nickname: 'Alexsander Ferreira',
    //   comment: 'Seu amiguinho'
    // }]
    return (
      <View style={{flex: 1}}>
          <Login></Login>
      </View>
    )
  }
  
};
