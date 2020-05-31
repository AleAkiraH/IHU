import React, { Component } from "react";
import { StyleSheet, View, Image, StatusBar, TouchableOpacity, Text, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
    super(props)
    this.state = {
      usuario: "",
      senha: "",
    }
    // this.logar = this.logar.bind(this)
    this.cadastrar_novo = this.cadastrar_novo.bind(this)
    this.limpar_campos = this.limpar_campos.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.handlePassword = this.handlePassword.bind(this)
    this.login = this.login.bind(this)
  }
  handleLogin = (text) => {
    this.setState({ usuario: text })
  }
  handlePassword = (text) => {
    this.setState({ senha: text })
  }
  login = () => {
    alert('Usuario: ' + this.state.usuario + ' password: ' + this.state.senha)
  }
  limpar_campos() {
    this.setState({
      usuario: "",
      senha: "",
    })
  }
  cadastrar_novo() {
    var axios = require('axios')
    axios.get('https://pokeapi.co/api/v2/pokemon')
      .then((responseJson) => {        
        this.setState({
          usuario: responseJson.data.results[5].name,
          senha: responseJson.data.results[8].name,
        })
      });
  }

  // consumo_API_POST() {
  //   alert("Usuário: " + this.state.usuario + " Senha: " + this.state.senha)
  // }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.group3}>
          <View style={styles.group}>
            <Image
              source={require("../../assets/images/1.png")}
              resizeMode="center"
              style={styles.image}>
            </Image>
          </View>

          <View style={styles.group2}>
            <View style={[txt_log_pwd_styles.container, styles.materialRightIconTextbox]}>
              <TextInput value={this.state.usuario} onChangeText={this.handleLogin} secureTextEntry={false} placeholder={"Usuário"} style={[txt_log_pwd_styles.inputStyle]} ></TextInput>
              <Icon name={"login"} style={[txt_log_pwd_styles.iconStyle]}></Icon>
            </View>
          </View>

          <View style={[txt_log_pwd_styles.container, styles.materialRightIconTextbox]}>
            <TextInput value={this.state.senha} onChangeText={this.handlePassword} secureTextEntry={true} placeholder={"Senha"} style={[txt_log_pwd_styles.inputStyle]} ></TextInput>
            <Icon name={"key"} style={[txt_log_pwd_styles.iconStyle]}></Icon>
          </View>

          <View style={styles.div_entre_texts_buttons}>
            <TouchableOpacity onPress={this.login} style={btn_logar_styles.container}>
              <Text style={btn_logar_styles.caption}>Logar</Text>
            </TouchableOpacity>
            <View style={styles.div_entre_log_cad}></View>
            <TouchableOpacity onPress={this.cadastrar_novo} style={btn_cadastrar_styles.container}>
              <Text style={btn_cadastrar_styles.caption}>Cadastrar</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.div_entre_texts_buttons}>
            <TouchableOpacity onPress={this.limpar_campos} style={btn_cadastrar_styles.container}>
              <Text style={btn_cadastrar_styles.caption}>limpar</Text>
            </TouchableOpacity>
          </View>
        </View>
        <StatusBar animated={false} hidden={true} backgroundColor="rgba(255,255,255,1)"></StatusBar>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(227,136,53,1)"
  },
  group: {
    width: 264,
    height: 280,
    alignItems: "center"
  },
  group2: {
    width: 266,
    height: 109,
    marginTop: 18
  },
  group3: {
    width: 266,
    height: 522,
    marginTop: 109,
    alignSelf: "center"
  },
  image: {
    width: 229,
    height: 252,
    borderRadius: 100
  },
  materialRightIconTextbox: {
    width: 264,
    height: 43,
    backgroundColor: "rgba(230, 230, 230,1)",
    marginTop: 72
  },
  div_entre_log_cad: {
    flex: 1,
    flexDirection: "row"
  },
  div_entre_texts_buttons: {
    height: 36,
    flexDirection: "row",
    marginTop: 30
  }
});

const btn_logar_styles = StyleSheet.create({
  container: {
    backgroundColor: "#3F51B5",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 16,
    paddingLeft: 16,
    elevation: 2,
    minWidth: 88,
    borderRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "#000",
    shadowOpacity: 0.35,
    shadowRadius: 5
  },
  caption: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "roboto-regular"
  }
});

const btn_cadastrar_styles = StyleSheet.create({
  container: {
    backgroundColor: "#F44336",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 16,
    paddingLeft: 16,
    elevation: 2,
    minWidth: 88,
    borderRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "#000",
    shadowOpacity: 0.35,
    shadowRadius: 5
  },
  caption: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "roboto-regular"
  }
});

const txt_log_pwd_styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#D9D5DC",
    borderBottomWidth: 1,
  },
  inputStyle: {
    flex: 1,
    color: "#000",
    alignSelf: "stretch",
    paddingTop: 14,
    paddingRight: 16,
    paddingBottom: 8,
    fontSize: 16,
    fontFamily: "roboto-regular",
    lineHeight: 16
  },
  iconStyle: {
    color: "#616161",
    fontFamily: "Roboto",
    fontSize: 24,
    paddingRight: 8
  }
});