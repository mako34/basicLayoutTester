import PropTypes from "prop-types";
import React, { Component } from "react";
import styles from "./SideMenu.style";
import { NavigationActions } from "react-navigation";
import {
    StyleSheet,
  ScrollView,
  Text,
  View,
  Dimensions,
  TouchableHighlight
} from "react-native";



var { height } = Dimensions.get('window');
 
var box_count = 3;
var box_height = height / box_count;

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

<View style={{ flex: 1, flexDirection: "row" }}>
          <View style={styles.segmentedControlButton}>
            <TouchableHighlight onPress={() => this._selectorPressed}>
              <Text style={styles.segmentedText}>Go to...</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.segmentedControlButton}>
            <TouchableHighlight onPress={() => this._selectorPressed}>
              <Text style={styles.segmentedText}>New...</Text>
            </TouchableHighlight>
          </View>
        </View>


            <View style={[styles.box, styles.box1]}></View>
            <View style={[styles.box, styles.box2]}></View>
            <View style={[styles.box, styles.box3]}></View>
        </View>
    );
  }
}
 
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column'
//   },
//   box: {
//     height: box_height
//   },
//   box1: {
//     backgroundColor: '#2196F3'
//   },
//   box2: {
//     backgroundColor: '#8BC34A'
//   },
//   box3: {
//     backgroundColor: '#e3aa1a'
//   }
// });




SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default SideMenu;
