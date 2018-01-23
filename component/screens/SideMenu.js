import PropTypes from "prop-types";
import React, { Component } from "react";
// import styles from "./SideMenu.style";
import { NavigationActions } from "react-navigation";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Dimensions,
  TouchableHighlight
} from "react-native";

var { height } = Dimensions.get("window");

var box_count = 3;
var box_height = height / box_count;

var segmentedSelectorHeight = 50;
var drawerButtonWidth = 160;
var drawerHeight = 40;
var grayBackground = "rgb(37,40,41)";

class SideMenu extends Component {
 

    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
          routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
      }


  render() {
    const { navigate } = this.props.navigation;


    return (
      <View style={styles.container}>
        <View style={[styles.boxSelector]} />

        {/* segmentedControl */}
        <View
          style={{
            flexDirection: "row"
          }}
        >
          <View
            style={{
              width: drawerButtonWidth,
              height: segmentedSelectorHeight,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <TouchableHighlight
              style={[styles.selectorButtonMessages]}
              onPress={this.navigateToScreen('ScreenGoTo')}
            >
              <Text style={styles.segmentedTextStyle}>Go to...</Text>
            </TouchableHighlight>
          </View>

          <View
            style={{
              width: drawerButtonWidth,
              height: segmentedSelectorHeight,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <TouchableHighlight
              style={[styles.selectorButtonMessages]}
              onPress={this.navigateToScreen('ScreenNewMatter')}
            >
              <Text style={styles.segmentedTextStyle}>+ New...</Text>
            </TouchableHighlight>
          </View>
        </View>

        <View style={[styles.lineSeparator]} />

        {/* opciones */}

        <View style={[styles.separator]} />

        <View
          style={{
            flexDirection: "row"
          }}
        >
          <View
            style={{
              width: 20
            }}
          />

          <ScrollView>
            <View style={{}}>
              <Text style={styles.sectionTitle}>UNREAD</Text>
              <View style={[styles.separator]} />

              <Text style={styles.cellTitle}>JACKSON - DIVORCE - JACKSON</Text>
              <Text style={styles.cellSubtitle}>
                Jack Jackson, Lisa Halliday, ...
              </Text>

              <View style={[styles.separator]} />

              <Text style={styles.sectionTitle}>RECENT MATTERS</Text>

              <View style={[styles.separator]} />

              <Text style={styles.cellTitle}>JONES - ANDERSON</Text>
              <Text style={styles.cellSubtitle}>
                Jim Jones, Hunter Steele and you
              </Text>
              <Text style={styles.cellSubtitle}>Jim Jones and you</Text>

              <View style={[styles.separator]} />

              <Text style={styles.cellTitle}>LEE - SALE - ANDERSON</Text>
              <Text style={styles.cellSubtitle}>
                Alex Lee, Lisa Halliday and you
              </Text>

              <View style={[styles.separator]} />

              <Text style={styles.cellTitle}>COLLINS SURVEYOUR</Text>
              <Text style={styles.cellSubtitle}>Hunter Nakano</Text>

              <View style={[styles.separator]} />

              <Text style={styles.cellTitle}>NAKANO - SALE - DALE</Text>
              <Text style={styles.cellSubtitle}>Taki Nakano and you</Text>
              <Text style={styles.cellSubtitle}>
                Taki Nakano, Hunter STeele and you
              </Text>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "rgb(37,40,41)"
  },
  boxSelector: {
    height: 40,
    backgroundColor: "white"
  },
  box1: {
    backgroundColor: "#2196F3",
    height: 40
  },
  box2: {
    backgroundColor: "#8BC34A",
    height: 40
  },
  box3: {
    backgroundColor: "#ff00ff",
    height: 40
  },
  selectorButtonMessages: {
    backgroundColor: grayBackground,
    width: drawerButtonWidth,
    height: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  selectorButtonFiles: {
    backgroundColor: "rgb(244,244,244)",
    width: drawerButtonWidth,
    height: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  segmentedTextStyle: {
    color: "white"
  },
  sectionTitle: {
    color: "rgb(73.95, 66.3, 226.95)",
    fontSize: 13
  },
  cellTitle: {
    color: "rgba(255, 255, 255,0.59)",
    fontSize: 11
  },
  cellSubtitle: {
    color: "rgba(255, 255, 255,1)",
    fontSize: 17
  },
  separator: {
    height: 20
  },
  lineSeparator: {
    height: 0.5,
    backgroundColor: "white"
  }
});

SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default SideMenu;
