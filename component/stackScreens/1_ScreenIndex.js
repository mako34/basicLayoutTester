import React, { Component } from "react";

import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
  TextInput,
  Button
} from "react-native";

import NavBar, { NavButton, NavButtonText, NavTitle } from "react-native-nav";

var { height } = Dimensions.get("window");
var topSeparatorHeight = 35;
var boxNavBarHeight = 60;
var segmentedSelectorHeight = 50;
var boxFooterHeight = 60;
var screenHeight =
  height -
  (topSeparatorHeight +
    boxNavBarHeight +
    segmentedSelectorHeight +
    boxFooterHeight);

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

  _selectorPressed = function() {
    console.log("TouchableHighlight pressed...");
    alert("y y y1");
  };

  constructor() {
    super();

    this.state = {
      status: true
    };
  }

  ShowHideTextComponentView = () => {
    if (this.state.status == true) {
      this.setState({ status: false });
    } else {
      this.setState({ status: true });
    }
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        {/* separator */}
        <View
          style={{
            width: Dimensions.get("window").width,
            height: topSeparatorHeight,
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "center"
          }}
        />

        <View style={[styles.boxNavBar]}>
          <NavBar style={styles}>
            {/* LeftButton */}
            <NavButton onPress={() => navigate("DrawerOpen")}>
              <Image
                style={styles.image}
                resizeMode={"contain"}
                source={require("../images/hambuIcon.png")}
              />

              {/* RightButton */}
            </NavButton>

            <View style={[styles.boxNav]}>
              <Text style={styles.navTextTop}> NAKANO - SALE - DALE</Text>
              <Text style={styles.navTextBottom}>
                {" "}
                Taki Nakano, hunter Steele and you
              </Text>
            </View>
            {/* <NavTitle>{"Secure messaging"}</NavTitle> */}
            <NavButton
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
                height: segmentedSelectorHeight,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <TouchableHighlight
                style={[styles.selectorButton]}
                onPress={this.ShowHideTextComponentView}
                underlayColor="gray"
              >
                <Text>MESSAGES</Text>
              </TouchableHighlight>
            </View>
            <View
              style={{
                width: Dimensions.get("window").width / 2,
                height: segmentedSelectorHeight,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <TouchableHighlight
                style={[styles.selectorButton]}
                onPress={this.ShowHideTextComponentView}
                underlayColor="gray"
              >
                <Text>FILES</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>

        {this.state.status ? (
          <View style={styles.boxTable}>
<Text>FILES</Text>
          </View>
        ) : (
          <View style={styles.boxTable2}>
<Text>Mess</Text>
          </View>
        )}

        {/* <Button
          title="Hide Text Component"
          onPress={this.ShowHideTextComponentView}
        /> */}

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
    height: boxNavBarHeight,
    backgroundColor: "#2196F3"
  },
  boxNav: {
    backgroundColor: "rgb(243,243,243)",
    width: Dimensions.get("window").width - 100,
    height: 80,
    justifyContent: "center"
  },
  boxSegmentedK: {
    height: segmentedSelectorHeight,
    backgroundColor: "rgb(243,243,243)"
  },
  boxTable: {
    // height: screenHeight,
    // backgroundColor: "#e3aa1a",

    position: "absolute",
    width: Dimensions.get("window").width,
    height: screenHeight,
    top: topSeparatorHeight + boxNavBarHeight + segmentedSelectorHeight,
    left: 0,
    backgroundColor: "green"
  },
  boxTable2: {
    // height: screenHeight,
    // backgroundColor: "#ff00ff"

    position: "absolute",
    width: Dimensions.get("window").width,
    height: screenHeight,
    top: topSeparatorHeight + boxNavBarHeight + segmentedSelectorHeight,
    left: 0,
    backgroundColor: "orange"
  },
  boxFooter: {
    height: boxFooterHeight,
    backgroundColor: "rgb(243,243,243)",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    top:
      topSeparatorHeight +
      boxNavBarHeight +
      segmentedSelectorHeight +
      screenHeight,
    width: Dimensions.get("window").width
  },
  image: {
    width: 30
  },
  navTextTop: {
    color: "gray",
    fontSize: 10
  },
  navTextBottom: {
    color: "black"
  },
  selectorButton: {
    backgroundColor: "rgb(231,231,231)",
    width: 170,
    height: 30,
    alignItems: "center",
    justifyContent: "center"
  }
});
