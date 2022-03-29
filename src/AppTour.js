import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class AppTour extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.view1}>
                    <Text style={styles.txt1} >
                        Images/Illustrations
                    </Text>
                </View>
                <Text style={styles.txt2}>
                    App tour title
                </Text>
                <Text style={styles.txt3}>
                    The app tour description goes here.
                </Text>
                <TouchableHighlight style={styles.touchable}
                    onPress={() => this.props.navigation.navigate('StudentDetails')}>

                    <Text style={styles.touchbletxt}>
                    <Icon style={{ marginTop: 8 }} name="east" size={22} color='white' />
                    </Text>
                </TouchableHighlight>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    },
    view1: {
        width: 351,
        height: 520,
        backgroundColor: '#F3F3F3',
        margin: 20,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: 'center'
    },
    txt1: {
        color: '#000000',
        fontSize: 12,
        fontWeight: '700',
        fontFamily: 'Gilroy'
    },
    txt2: {
        height: 24,
        fontSize: 20,
        fontWeight: '700',
        fontFamily: 'Gilroy',
        color: '#002333'
    },
    txt3: {
        fontSize: 14,
        fontFamily: 'Gilroy-Regular',
        fontWeight: 'normal',
        color: '#9F9F9F',
        marginTop: 5
    },
    touchable: {
        width: 56,
        height: 56,
        backgroundColor: '#00C458',
        borderRadius: 5,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor:'#E5E5E5',
        borderWidth:3,
        borderRadius:10
    },
    touchbletxt: {
        color: '#FFFFFF',
        fontSize: 20,
        fontFamily: 'Gilroy',
        fontWeight: '700',
    },

})