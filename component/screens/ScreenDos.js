import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image
} from 'react-native';

import styles from './styles';

class ScreenDos extends Component {
    static navigationOptions = {
        drawerLabel: 'Screen Dos',
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require('../images/notification-icon.png')}
            style={[styles.icon, { tintColor: tintColor }]}
          />
        )
      }
  render() {
    const { navigate } = this.props.navigation;
    return (
        <View style={styles.container}>
          <TouchableHighlight
            onPress={() => navigate('DrawerOpen')}
            style={[styles.button, {backgroundColor: '#FF00FF'}]}>
            <Text style={styles.buttonText}> Open Drawer </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default ScreenDos;