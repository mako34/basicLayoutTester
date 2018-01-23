import React, { Component } from "react";

import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
  TextInput
} from "react-native";

import NavBar, { NavButton, NavButtonText, NavTitle } from "react-native-nav";

import styles from "./styles";

class ScreenUno extends Component {
  static navigationOptions = {
    drawerLabel: "Screen uno MK ss9",
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require("../images/notification-icon.png")}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    )
  };

  handleOnPress = () => this.setState({ toggleCharacter: false });

  _selectorPressed() {
    console.log("TouchableHighlight pressed...");
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <NavBar style={styles}>
          <NavButton onPress={() => navigate("DrawerOpen")}>
            <Image
              style={styles.image}
              resizeMode={"contain"}
              source={require("../images/hambuIcon.png")}
            />
          </NavButton>
          <NavTitle>{"Secure messaging"}</NavTitle>
          <NavButton onPress={() => alert("Log out son")}>
            <Image
              style={styles.image}
              resizeMode={"contain"}
              source={require("../images/moreDots.png")}
            />
          </NavButton>
        </NavBar>

        {/* button selector */}

        <View style={{ flex: 1, flexDirection: "row" }}>
          <View
            style={{
              width: Dimensions.get("window").width / 2,
              height: 50,
              backgroundColor: "powderblue",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <TouchableHighlight onPress={() => this._selectorPressed}>
              <Text>MESSAGES</Text>
            </TouchableHighlight>
          </View>
          <View
            style={{
              width: Dimensions.get("window").width / 2,
              height: 50,
              backgroundColor: "skyblue",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <TouchableHighlight onPress={() => this._selectorPressed}>
              <Text>FILES</Text>
            </TouchableHighlight>
          </View>
        </View>

        {/* table for messages or files*/}

        {/* footer, search bar */}

        <View
          style={{
            position: "absolute",
            flexDirection: "row",
            width: Dimensions.get("window").width,
            height: 60,
            backgroundColor: "orange",
            alignItems: "center",
            top: Dimensions.get("window").height - 60
          }}
        >
          <TextInput
            style={{
              height: 40,
              width: 220,
              backgroundColor: "#E9E9E9",

              borderColor: "gray",
              borderWidth: 1
            }}
            placeholder="Enter a secure message"
          />

          <TouchableOpacity
            onPress={() => {
              alert("you clicked me");
            }}
          >
            <Image
              style={[styles.searchIcon]}
              source={require("../images/cameraIcon.png")}
              resizeMode={"contain"}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              alert("you clicked me");
            }}
          >
            <Image
              style={[width=40]}
              source={require("../images/paperClip.png")}
              resizeMode={"contain"}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default ScreenUno;
