import React from 'react';
import {Platform, StyleSheet, Text, View } from 'react-native';
import Header from './components/header'
import InputBar from './components/inputBar'

export default class  App extends React.Component {
  constructor()
  {
    super();
    this.state={
      todoInput:'',
      todos:[{id:0,title:"homework",done:false},
      {id:1,title:"assignment",done:false}
    ]
    }
  }
  render(){
    const  statusbar=(Platform.is='ios')? <View style={styles.statusbar}></View>: <View style={styles.statusbar}></View>;
    return (
    <View style={styles.container}>
     {statusbar}
     <Header title='TodoApp!'/>
     <InputBar/>
    </View>
  );
}
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusbar:{
    backgroundColor: '#FFCE00',
    height:20
  }
});
