import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableHighlight,
  Button
} from "react-native";



import NavBar, { NavButton, NavButtonText, NavTitle } from "react-native-nav";

var { height } = Dimensions.get("window");
var topSeparatorHeight = 35;
var boxUserHeight = 50;
var boxFooterHeight = 80;
var contentHeight =
  height - (topSeparatorHeight + boxUserHeight + boxFooterHeight);

export default class VerticalStackLayout extends Component {
  render() {
    const { state, navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        {/* separator */}
        <View
          style={{
            width: Dimensions.get("window").width,
            height: topSeparatorHeight,
            backgroundColor: "skyblue",
            alignItems: "center",
            justifyContent: "center"
          }}
        />

        <View style={[styles.boxNavBar]}>
          <NavBar style={styles}>
            {/* LeftButton */}
            <NavButton onPress={() => this.props.navigation.goBack(null)}>
              <Image
                style={styles.navImage}
                resizeMode={"contain"}
                source={require("../images/backIcon.png")}
              />
            </NavButton>
            <NavTitle>{"Manage participants"}</NavTitle>
          </NavBar>
        </View>
 
 

      </View>
 
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  boxUser: {
    height: boxUserHeight,
    backgroundColor: "rgb(243, 243, 243)",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  boxOptions: {
    height: contentHeight,
    backgroundColor: "#ff0000"
  },
  boxFooter: {
    height: boxFooterHeight,
    backgroundColor: "#00ff00"
  },
  userIcon: {
    height: 30
  },
  bottomButton: {
    textAlign: "left"
  },
  navImage: {
    width: 30
  }
});
