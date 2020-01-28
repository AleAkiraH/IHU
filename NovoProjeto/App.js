import React, { Component } from 'react';
import { Text, View, Image } from 'react-native'
import Header from './src/components/Header';
import Login from './src/components/Login';
import Cadastro from './src/components/Cadastro';
// import Login from './src/components/Login';

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
          {/* <Header/> */}
          {/* <Login></Login> */}
          {/* <Post image={require('./assets/imgs/fence.jpg')} comments={comments}></Post>                  */}
          <Login></Login>
      </View>
    )
  }
  
};
