import React from 'react';
import { StyleSheet, Text, View ,TextInput,TouchableOpacity} from 'react-native';

const InputBar=(props)=>{
    return(
        <View styles={styles.inputContainer}>
        <TextInput styles={styles.TextInput}/>
        <TouchableOpacity styles={styles.addButton}>
        <Text styles={styles.addButtonText}></Text>
        </TouchableOpacity>
        </View>
    )
}
const styles=StyleSheet.create(
    {
       inputContainer:{
            flexDirection:'row',
            justifyContent:'space-between',
            shadowOffset:{width:0, height:3},
            shadowColor: '#171717',
            shadowOpacity:.1

        },
        input:{
            backgroundColor:'#D3D3D3',
            flex:1,
            fontSize:18,
            height:35
        }
    }
);
export default InputBar;