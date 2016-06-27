/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Alert,
} from 'react-native';

class ReactNativeTest extends Component {
  render() {
    return (
      <View style={styles.container}>

        <TouchableHighlight onPress={this._onPressButtonGET} style={styles.button}>
          <Text>GET</Text>
        </TouchableHighlight>
      </View>
    );
  }

  _onPressButtonGET() {
      fetch("https://snackboard.herokuapp.com/users/me", {"method": "GET"})
      .then((response) => response.json())
      .then((responseData) => {
        Alert.alert(
          'GET Response',
          responseData.error,
          [
            {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ]
          ,
        );
      });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    backgroundColor: "#EEEEEE",
    padding: 10,
  }
});

AppRegistry.registerComponent('ReactNativeTest', () => ReactNativeTest);
