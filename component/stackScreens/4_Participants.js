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

import CheckBox from 'react-native-checkbox-heaven';

import NavBar, { NavButton, NavButtonText, NavTitle } from "react-native-nav";

var { height } = Dimensions.get("window");
var topSeparatorHeight = 35;
var boxUserHeight = 50;
var boxFooterHeight = 80;
var contentHeight =
  height - (topSeparatorHeight + boxUserHeight + boxFooterHeight);

export default class VerticalStackLayout extends Component {

  state = {
    checked: false
  }
  handleOnChange(val) {
    this.setState({ checked: val })
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
            <NavTitle>{"Manage participants"}</NavTitle>
          </NavBar>
        </View>
 
        <CheckBox
          label='Bart Vadala'
          labelStyle={styles.labelStyle}
          iconSize={28}
          iconName='matMix'
          checked={this.state.checked}
          checkedColor='#008080'
          uncheckedColor='#8b0000'
          onChange={this.handleOnChange.bind(this)}
        />

        <CheckBox
          label='Hunter Steele'
          labelStyle={styles.labelStyle}
          iconSize={28}
          iconName='matMix'
          checked={this.state.checked}
          checkedColor='#008080'
          uncheckedColor='#8b0000'
          onChange={this.handleOnChange.bind(this)}
        />

        <CheckBox
          label='Lisa Halliday'
          labelStyle={styles.labelStyle}
          iconSize={28}
          iconName='matMix'
          checked={this.state.checked}
          checkedColor='#008080'
          uncheckedColor='#8b0000'
          onChange={this.handleOnChange.bind(this)}
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
  },
  labelStyle: {
    marginLeft: 4,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2f4f4f'
  }
});
