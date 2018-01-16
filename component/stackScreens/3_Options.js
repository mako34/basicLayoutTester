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

import { Switch } from "react-native-switch";

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
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "center"
          }}
        />

        <View style={[styles.boxUser]}>
          <Image
            style={styles.userIcon}
            resizeMode={"contain"}
            source={require("../images/userIcon.png")}
          />
          <Text>Manuel Betancurt </Text>

          <TouchableHighlight
            onPress={() => this.props.navigation.goBack(null)}
          >
            <Image
              style={styles.userIcon}
              resizeMode={"contain"}
              source={require("../images/closeIcon.png")}
            />
          </TouchableHighlight>
        </View>

        <View style={[styles.boxOptions]}>
          <Button
            onPress={() =>
              navigate("ScreenParticipants", { screen: "ScreenSecurity Two" })
            }
            title="Manage Participants"
            color="black"
          />

            <View style={styles.cellType}>

            <Button
              onPress={() => alert("Log out son")}
              title="View deleted messages"
              color="black"
            />

            <Switch
              value={true}
              onValueChange={val => console.log(val)}
              disabled={false}
              activeText={"On"}
              inActiveText={"Off"}
              circleSize={30}
              barHeight={30}
              circleBorderWidth={3}
              backgroundActive={"green"}
              backgroundInactive={"gray"}
              circleActiveColor={"#30a566"}
              circleInActiveColor={"#000000"}
            />

            </View>


        </View>

        {/* bottom buttons */}
        <View style={[styles.boxFooter]}>
          <Button
            onPress={() =>
              navigate("ScreenSecurity", { screen: "ScreenSecurity Two" })
            }
            style={styles.bottomButton}
            title="Security"
          />

          <Button
            onPress={() => alert("Log out son")}
            title="Sign out"
            style={styles.bottomButton}
          />
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
    backgroundColor: "white"
  },
  boxFooter: {
    height: boxFooterHeight,
    backgroundColor: "white"
  },
  userIcon: {
    height: 30
  },
  //fix!
  bottomButton: {
    width: "100%",
    height: "30%",
    justifyContent: "center",
    alignItems: "center"
  },
  cellType:{
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
});
