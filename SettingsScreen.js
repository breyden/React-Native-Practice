
import React, { Component } from 'react'
import {Platform, StyleSheet, View, Text, Button} from 'react-native'
class SettingsScreen extends Component {

  constructor(props) {
      super(props);
  }

  render () {
    return (
    <View>
        <Button
          title="Go to home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
    </View>

    );
  }
}

export default  SettingsScreen;