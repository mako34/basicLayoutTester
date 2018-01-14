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

var { height } = Dimensions.get("window");


// import styles from "./styles";

class ScreenUno extends Component {
  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require("../images/notification-icon.png")}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    )
  };

  handleOnPress = () => this.setState({ toggleCharacter: false });

  _handler = () => alert("you clicked me");

  _selectorPressed() {
    console.log("TouchableHighlight pressed...");
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>

        <View style={[styles.boxNavBar]}>
          <NavBar style={styles}>
            {/* LeftButton */}
            <NavButton
              onPress={() => navigate("DrawerOpen")}
            >
              <Image
                style={styles.image}
                resizeMode={"contain"}
                source={require("../images/hambuIcon.png")}
              />

              {/* RightButton */}
            </NavButton>
            <NavTitle>{"Secure messaging"}</NavTitle>
            <NavButton
              // onPress={() => {
              //   alert("you clicked me 223");
              //   console.log("TouchableHighlight pressed...");

              // }}

              onPress={() => navigate("ScreenOptions", { screen: "la propia" })}
            >
              <Image
                style={styles.image}
                resizeMode={"contain"}
                source={require("../images/moreDots.png")}
              />
            </NavButton>
          </NavBar>
        </View>


        <View style={[styles.boxSegmentedK]}>

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

        </View>


        <Image
        style={styles.boxTable}
        resizeMode={"contain"}
        source={require("../images/placeHolderMessages.png")}
      />


        <View style={[styles.boxFooter]}>

        <TextInput
              style={{
                height: 40,
                width: 220,
                backgroundColor: "#E9E9E9",
                paddingLeft: 22,
                borderColor: "gray",
                borderWidth: 1
              }}
              placeholder="Enter a secure message"
            />

            <TouchableOpacity
              onPress={() => {
                alert("you clicked me 1");
              }}
            >
              <Image
                style={styles.image}
                source={require("../images/cameraIcon.png")}
                resizeMode={"contain"}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                alert("you clicked me 2");
                console.log("TouchableHighlight pressed...");
              }}
            >
              <Image
                style={styles.image}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  boxNavBar: {
    height: 60,
    backgroundColor: "#2196F3"
  },
  boxSegmentedK: {
    height: 50,
    backgroundColor: "#8BC34A"
  },
  boxTable: {
    height: 500,
    backgroundColor: "#e3aa1a"
  },
  boxFooter: {
    height: 60,
    backgroundColor: "#ff0000",
    flexDirection: "row",
    alignItems: "center"
  },
  image: {
    width: 30,
  },
});
