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
 

export default class VerticalStackLayout extends Component {
  render() {
    const { state, navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <View style={[styles.boxUser]}>
          <Image
            style={styles.userIcon}
            resizeMode={"contain"}
            source={require("../images/userIcon.png")}
          />
          <Text>Participants </Text>

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
              navigate("ScreenSecurity", { screen: "ScreenSecurity Two" })
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

        <View style={[styles.boxFooter]}>
          <Button
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
    height: 50,
    backgroundColor: "rgb(243, 243, 243)",
    justifyContent: "center",
    alignItems: "center",

    flexDirection: "row"
  },
  boxOptions: {
    height: 400,
    backgroundColor: "#8BC34A"
  },
  boxFooter: {
    height: 100,
    backgroundColor: "#e3aa1a"
  },
  userIcon: {
    height: 30
  }
});

// import React, { Component } from 'react';
// import {
//   StyleSheet,
//   View,
//   Text,
//   TouchableHighlight
// } from 'react-native';

// class ScreenTwo extends Component {
//   static navigationOptions = ({ navigation }) => {
//     return {
//       //titulo nav bar, mira como usan los params
//       title: `ss9  tkt${navigation.state.params.screen}`,
//     }
//   };
//   render() {
// const { state, navigate } = this.props.navigation;
//     return (
//       <View style={styles.container}>
//         <Text style={styles.titleText}>{state.params.screen}</Text>

//         <TouchableHighlight
//           onPress={() => navigate("ScreenParticipants", {screen: "ScreenParticipants Two"})}
//           style={[styles.button, {backgroundColor: '#C56EE0'}]}     >

//         </TouchableHighlight>

//         <TouchableHighlight
//           onPress={() => navigate("ScreenSecurity", {screen: "ScreenSecurity Two"})}
//           style={[styles.button, {backgroundColor: '#FF0000'}]}     >
//           <Text
//             >Security </Text>
//         </TouchableHighlight>

//       </View>
//     );
//   }
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   titleText: {
//     fontSize: 22
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     marginLeft: 20,
//     marginRight: 20,
//     marginTop: 20
//   },
//   button: {
//     borderRadius: 20,
//     height: 50,
//     flex: 2,
//     margin: 10,
//     justifyContent: 'center'
//   },
//   buttonText: {
//     color: 'white',
//     alignSelf: 'center',
//     fontSize: 18
//   }
// });
// export default ScreenTwo;
