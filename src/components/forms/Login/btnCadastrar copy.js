import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function ButtonCadastrar(props) {    
  return (
    <TouchableOpacity onPress={()=>{cadastrar_novo()}} style={[styles.container, props.style]}>
      <Text style={styles.caption}>Cadastrar</Text>
    </TouchableOpacity>
  );
}

function cadastrar_novo(texto = "") {
  var axios = require('axios')

  axios.get('https://pokeapi.co/api/v2/pokemon') .then(function(response){
      console.log(texto)
      // alert("Quem é esse pokemon ? é o " + response.data.results[0].name +"!!!!\n"+texto)  
  });
  
} 

const styles = StyleSheet.create({
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

export default ButtonCadastrar;
