import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Image,
  TextInput
} from "react-native";

var grayBackground = "rgb(37,40,41)";

class ScreenNewMatter extends Component {
  render() {
    const { state, navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={[styles.statusBar]} />
        
        <TouchableHighlight
            onPress={() => this.props.navigation.goBack(null)}
          >
          <Image
            style={styles.searchIcon}
            source={require("../images/closeIcon.png")}
          />
          </TouchableHighlight>

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
  }
});
export default ScreenNewMatter;
