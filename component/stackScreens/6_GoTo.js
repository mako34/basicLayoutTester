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

class GoToScreen extends Component {
  render() {
    const { state, navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={[styles.statusBar]} />
        <View style={[styles.searchBar]}>

        <TouchableHighlight
            onPress={() => this.props.navigation.goBack(null)}
          >
          <Image
            style={styles.searchIcon}
            source={require("../images/closeIcon.png")}
          />
          </TouchableHighlight>

          <TextInput
            style={{
              height: 40,
              width: 290,
              backgroundColor: "#E9E9E9",
              paddingLeft: 22,
              borderColor: "white",
              borderWidth: 1
            }}
            placeholder="Search"
          />
        </View>

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
export default GoToScreen;
