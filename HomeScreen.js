
import React, { Component } from 'react'
import {Platform, StyleSheet,View, Text, Button} from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation';

class HomeScreen extends Component {

  constructor(props) {
      super(props);
  }

  render () {
    const  statusbar=(Platform.is='ios')? <View style={styles.statusbar}></View>: <View style={styles.statusbar}></View>;

    return (
    

    <View style={styles.container}>
    {statusbar}
    <Button
          title="Go to Settings"
          onPress={() => this.props.navigation.navigate('settings')}
     />
    </View>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
  },
  statusbar:{
    backgroundColor: '#FFCE00',
    height:20
  }
});
export default  HomeScreen;