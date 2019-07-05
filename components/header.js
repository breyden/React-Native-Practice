import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header=(props)=>{
    return(
        <View styles={styles.header}>
        <Text styles={styles.title}>{props.title}</Text>
        </View>
    )
}

const styles =StyleSheet.create(
    {
        header:{
            backgroundColor:'#1717171',
            height: 60,
            alignItems:'center',
            justifyContent:'center'

        
        
        },

        title:{
            color:'#FFFFFF',
            fontSize:10,
            fontWeight:'bold',
            textTransform:'uppercase'
        }
    }

);
export default Header;