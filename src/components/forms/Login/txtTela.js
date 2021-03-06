import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function TextboxTela(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TextInput secureTextEntry={props.secure} placeholder={props.labeltext} style={styles.inputStyle} ></TextInput>
      <Icon name={props.loginpwd} style={styles.iconStyle}></Icon>
    </View>
  );
}

const txt_log_pwd_styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#D9D5DC",
    borderBottomWidth: 1
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

export default TextboxTela;
