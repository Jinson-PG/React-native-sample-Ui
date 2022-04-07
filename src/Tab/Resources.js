import React,{Component}from'react'
import {View ,Text,StyleSheet}from 'react-native'

export default class Videos extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.txt}>
                    Update Soon !
                </Text>
            </View>
    
        )
    }
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        backgroundColor: '#F9F8F8',
        alignItems:'center',
        justifyContent:'center'
    },
    txt:{
        color:'#000',
        fontSize:20,
        fontWeight:'bold'
    }
})