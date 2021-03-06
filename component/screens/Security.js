//TODO
// PUT BACK BUTTON TITLE

import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Dimensions,
  Image,
  Button
} from "react-native";

import NavBar, { NavButton, NavButtonText, NavTitle } from "react-native-nav";
import CheckBox from "react-native-checkbox-heaven";

var topSeparatorHeight = 35;

class ScreenTwo extends Component {
 

  state = {
    checked: false
  };
  handleOnChange(val) {
    this.setState({ checked: val });
  }

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
            <NavTitle>{"Security"}</NavTitle>
          </NavBar>
        </View>

        <CheckBox
          label="Nothing"
          labelPosition="left"
          labelStyle={styles.labelStyle}
          iconSize={28}
          iconName="matCircleMix"
          checked={this.state.checked}
          checkedColor="rgb(0,118,255)"
          uncheckedColor="gray"
          onChange={this.handleOnChange.bind(this)}
        />

        <Button
          onPress={() => alert("handle PIN")}
          title="PIN"
          color="black"
        />

        <Button
          onPress={() => alert("handle Fingerprints")}
          title="Fingerprints"
          color="black"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
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
  navImage: {
    width: 30
  }
});
export default ScreenTwo;
