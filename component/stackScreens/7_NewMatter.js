import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Image,
  TextInput
} from "react-native";

import NavBar, { NavButton, NavButtonText, NavTitle } from "react-native-nav";

var grayBackground = "rgb(37,40,41)";
var boxNavBarHeight = 82;

class ScreenNewMatter extends Component {
  render() {
    const { state, navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={[styles.statusBar]} />

        <View style={[styles.boxNavBar]}>
          <NavBar style={styles}>
            {/* LeftButton */}
            <NavButton onPress={() => this.props.navigation.goBack(null)}>
              <Text>Cancel</Text>

              {/* RightButton */}
            </NavButton>

            <View style={[styles.boxNav]}>
              <Text style={styles.navTextTop}> Create New</Text>
            </View>
            {/* <NavTitle>{"Secure messaging"}</NavTitle> */}
            <NavButton
              onPress={() =>     alert("deal create")
            }
            >
              <Text>Create</Text>
            </NavButton>
          </NavBar>
        </View>

        <View style={[styles.lineSeparator]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  titleText: {
    fontSize: 22
  },
  buttonContainer: {
    flexDirection: "row",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20
  },
  button: {
    borderRadius: 20,
    height: 50,
    flex: 2,
    margin: 10,
    justifyContent: "center"
  },
  buttonText: {
    color: "white",
    alignSelf: "center",
    fontSize: 18
  },
  lineSeparator: {
    height: 1,
    backgroundColor: grayBackground
  },
  statusBar: {
    height: 40
  },
  searchBar: {
    height: 60,
    backgroundColor: "rgb(243,243,243)",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center"
  },
  searchIcon: {
    width: 30,
    resizeMode: "contain"
  },
  boxNavBar: {
    height: boxNavBarHeight,
    backgroundColor: "#2196F3"
  },
});
export default ScreenNewMatter;
