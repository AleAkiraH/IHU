import React, { Component } from "react";
import { StyleSheet, View, Image, StatusBar } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import MaterialRightIconTextbox from "./MaterialRightIconTextbox";
import MaterialButtonDanger from "./MaterialButtonDanger";

function Untitled1(props) {
  return (
    <View style={styles.container}>
      <View style={styles.group5}>
        <View style={styles.group4}>
          <Image
            source={require("../../assets/images/1.png")}
            resizeMode="center"
            style={styles.image}>
          </Image>
        </View>
        <MaterialRightIconTextbox style={styles.materialRightIconTextbox}></MaterialRightIconTextbox>
        <MaterialRightIconTextbox style={styles.materialRightIconTextbox1}></MaterialRightIconTextbox>
        <MaterialButtonDanger style={styles.materialButtonDanger}></MaterialButtonDanger>
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
  group5: {
    width: 264,
    height: 519,
    marginTop: 110,
    alignSelf: "center"
  },
  group4: {
    height: 280,
    alignItems: "center"
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
    backgroundColor: "rgba(230, 230, 230,1)",
    marginTop: 18
  },
  materialButtonDanger: {
    width: 100,
    height: 36,
    marginTop: 27,
    marginLeft: 83
  }
});

export default Untitled1;
