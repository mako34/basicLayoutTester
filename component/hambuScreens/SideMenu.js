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
var drawerWidth = 160;
var drawerHeight = 40;
var selectorButtonsWidth = 120;

class SideMenu extends Component {
  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  };

  //   render() {
  //     return (
  //       <View style={styles.container}>

  //         <View
  //           style={{
  //             borderBottomColor: "white",
  //             borderBottomWidth: 1
  //           }}
  //         />

  //         <ScrollView>
  //           <View>
  //             <Text style={styles.sectionHeadingStyle}>Section 1</Text>
  //             <View style={styles.navSectionStyle}>
  //               <Text
  //                 style={styles.navItemStyle}
  //                 onPress={this.navigateToScreen("Page1")}
  //               >
  //                 Page unu
  //               </Text>
  //             </View>
  //           </View>
  //           <View>
  //             <Text style={styles.sectionHeadingStyle}>Section 2</Text>
  //             <View style={styles.navSectionStyle}>
  //               <Text
  //                 style={styles.navItemStyle}
  //                 onPress={this.navigateToScreen("Page2")}
  //               >
  //                 Page2
  //               </Text>
  //               <Text
  //                 style={styles.navItemStyle}
  //                 onPress={this.navigateToScreen("Page3")}
  //               >
  //                 Page3
  //               </Text>
  //             </View>
  //           </View>
  //         </ScrollView>
  //       </View>
  //     );
  //   }
  // }

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.boxSelector]} />

        <View
          style={{
            flexDirection: "row",
            backgroundColor: "red"
          }}
        >
          <View
            style={{
              width: drawerWidth,
              height: segmentedSelectorHeight,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "yellow"
            }}
          >
            <TouchableHighlight
              style={[styles.selectorButtonMessages]}
              onPress={this.ShowHideTextComponentView}
              underlayColor="gray"
            >
              <Text>Go to...</Text>
            </TouchableHighlight>
          </View>

          <View
            style={{
              width: drawerWidth,
              height: segmentedSelectorHeight,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white"
            }}
          >
            <TouchableHighlight
              style={[styles.selectorButtonMessages]}
              onPress={this.ShowHideTextComponentView}
              underlayColor="gray"
            >
              <Text>New...</Text>
            </TouchableHighlight>
          </View>
        </View>

        <View style={[styles.box2]} />
        <View style={[styles.box3]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "orange"
  },
  boxSelector: {
    height: 40,
    backgroundColor: "blue"
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
    backgroundColor: "rgb(231,231,231)",
    width: selectorButtonsWidth,
    height: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  selectorButtonFiles: {
    backgroundColor: "rgb(244,244,244)",
    width: selectorButtonsWidth,
    height: 30,
    alignItems: "center",
    justifyContent: "center"
  }
});

SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default SideMenu;
