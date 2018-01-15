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

var { height } = Dimensions.get("window");
var topSeparatorHeight = 35;
var boxUserHeight = 50;
var boxFooterHeight = 80;
var contentHeight = height - (topSeparatorHeight + boxUserHeight+ boxFooterHeight);

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

          <Button
            onPress={() => alert("Log out son")}
            title="View deleted messages"
            color="black"
          />
        </View>

{/* bottom buttons */}
        <View style={[styles.boxFooter]}>
          <Button style={styles.bottomButton}
            onPress={() =>
              navigate("ScreenSecurity", { screen: "ScreenSecurity Two" })
            }
            title="Security"
            color="blue"
          />

          <Button
            onPress={() => alert("Log out son")}
            title="Sign out"
            color="blue"
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
    backgroundColor: "#ff0000"
  },
  boxFooter: {
    height: boxFooterHeight,
    backgroundColor: "#00ff00",
    
  },
  userIcon: {
    height: 30
  },
  bottomButton: {
    textAlign: 'left',
  }
});
 
