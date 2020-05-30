import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function ButtonLogar(props) {
  return (
    <TouchableOpacity onPress={()=>{logar_sistema()}} style={[styles.container, props.style]}>
      <Text style={styles.caption}>Logar</Text>
    </TouchableOpacity>
  );
}

function logar_sistema() {
  alert("Usuario: Jhessica Weysen !")
} 

const styles = StyleSheet.create({
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

export default ButtonLogar;
