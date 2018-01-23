// Questions
// . ask designer how table works, 2 sections? long one?

// Notes
// . CheckBox
// https://github.com/ismayilmalik/react-native-checkbox-heaven

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
 

{/* staff box */}
        <View style={[styles.staffBox]}>

          <View style={[styles.leftBox]}>
            <Text>Staff</Text>
          </View>

          <View style={[styles.rightBox]}>

          </View>

        </View>

        <View style={[styles.separator]}/>
 
{/* parties box */}
        <View style={[styles.partiesBox]}>
          <View style={[styles.leftBox]}>
            <Text>Parties</Text>

          </View>

          <View style={[styles.rightBox]}>

          </View>          

        </View>

        <CheckBox
          label='Bart Vadala'
          labelStyle={styles.labelStyle}
          iconSize={28}
          iconName='matCircleMix'
          checked={this.state.checked}
          checkedColor='rgb(0,118,255)'
          uncheckedColor='gray'
          onChange={this.handleOnChange.bind(this)}
        />

        <CheckBox
          label='Hunter Steele'
          labelStyle={styles.labelStyle}
          iconSize={28}
          iconName='matCircleMix'
          checked={this.state.checked}
          checkedColor='rgb(0,118,255)'
          uncheckedColor='gray'
          onChange={this.handleOnChange.bind(this)}
        />

        <CheckBox
          label='Lisa Halliday'
          labelStyle={styles.labelStyle}
          iconSize={28}
          iconName='matCircleMix'
          checked={this.state.checked}
          checkedColor='rgb(0,118,255)'
          uncheckedColor='gray'
          onChange={this.handleOnChange.bind(this)}
        />


        <Button
            onPress={() => alert("create new contact homes")}
            title="add new contact"
            color="blue"
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
  },
  staffBox: {
    height: 200,
    backgroundColor: "#00ff00",
  },
  partiesBox: {
    height: 200,
    backgroundColor: "#0000ff",
  },
  leftBox: {
    width: Dimensions.get("window").width * (1/3),
    height: 200,
    backgroundColor: "#ff00ff",
  },
  rightBox: {
    width: Dimensions.get("window").width * (2/3),
    backgroundColor: "#0000ff",
  },
  separator:{
    height: 2,
    backgroundColor: 'grey',
  }
});
