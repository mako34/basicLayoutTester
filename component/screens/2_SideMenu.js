import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight,
  Dimensions
} from "react-native";

//
var { height } = Dimensions.get("window");
var { screenWidth } = Dimensions.get("window").width;

var box_count = 3;
var box_height = height / box_count;

//

class ScreenTwo extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      //titulo nav bar, mira como usan los params
      title: `Welcome  tkt${navigation.state.params.screen}`
    };
  };
  render() {
    const { state, navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={[styles.box1]}>
          <View
            style={{
              width: Dimensions.get("window").width / 2,
              height: 30,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <TouchableHighlight
              onPress={() =>
                navigate("ScreenGoTo", { screen: "ScreenGoTo mm" })
              }
            >
              <Text style={styles.selectorTextStyle}> Go To...</Text>
            </TouchableHighlight>
          </View>

          <View
            style={{
              width: Dimensions.get("window").width / 2,
              height: 30,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <TouchableHighlight
              onPress={() =>
                navigate("ScreenNewMatter", { screen: "ScreenNewMatter mm" })
              }
            >
              <Text style={styles.selectorTextStyle}>New...</Text>
            </TouchableHighlight>
          </View>
        </View>

        <Image
          style={styles.box2}
          resizeMode={"contain"}
          source={require("../images/placeHolderMenu.png")}
        />

        {/* <View style={[styles.box2]} /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "red",
    alignItems: "center"
  },

  //

  box: {
    height: box_height
  },
  box1: {
    flexDirection: "row",
    alignItems: "center",
    height: 33
  },
  box2: {
    height: 400
  },
  box3: {
    backgroundColor: "#e3aa1a"
  },

  //

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
    alignSelf: "center"
  },
  selectorTextStyle: {
    color: "yellow"
  }
});
export default ScreenTwo;
