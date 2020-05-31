import React, { Component } from "react";
import { StyleSheet, View, Image, StatusBar } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import TextboxTela from "../components/forms/Login/txtTela";
import ButtonLogar from "../components/forms/Login/btnLogar";
import ButtonCadastrar from "../components/forms/Login/btnCadastrar";



function loginScreen(props) {
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
        
        <TextboxTela secure={false} loginpwd={"login"} labeltext={"Usuário"} style={styles.materialRightIconTextbox}></TextboxTela>
        <View style={styles.group2}>
          <TextboxTela secure={true} loginpwd={"key"} labeltext={"Senha"} style={styles.materialRightIconTextbox1}></TextboxTela>
          <View style={styles.materialButtonViolet1Row}>
          <ButtonLogar style={styles.ButtonLogar}></ButtonLogar>
            <View style={styles.materialButtonViolet1Filler}></View>
            <ButtonCadastrar style={styles.btnCadastro}></ButtonCadastrar>
          </View>
        </View>
      </View>
      <StatusBar animated={false} hidden={true} backgroundColor="rgba(255,255,255,1)"></StatusBar>
    </View>
  );
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
  ellipse: {
    width: 263,
    height: 270
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
  materialRightIconTextbox1: {
    width: 264,
    height: 43,
    backgroundColor: "rgba(230, 230, 230,1)"
  },
  materialButtonViolet1: {
    width: 100,
    height: 36
  },
  materialButtonViolet1Filler: {
    flex: 1,
    flexDirection: "row"
  },
  materialButtonDanger: {
    width: 100,
    height: 36
  },
  materialButtonViolet1Row: {
    height: 36,
    flexDirection: "row",
    marginTop: 30
  }
});

export default loginScreen;
