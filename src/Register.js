import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TextInput, TouchableHighlight } from 'react-native'
export default class Register extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require('../src/assets/logo.png')}
                    style={styles.logo}>
                </Image>
                <Text style={styles.text1}>
                    Enter your mobile number
                </Text>

                <Text style={styles.txt2}>
                    We will send you an OTP to verify.
                </Text>
                <View style={styles.view1}>
                    <View style={styles.view2}>
                        <TextInput style={styles.inputbox1}
                            placeholder='+91'
                            editable={false}

                            placeholderTextColor={'white'}
                        >
                        </TextInput>
                        <TextInput style={styles.inputbox2}
                            maxLength={10}
                            placeholder='Phone number'
                            placeholderTextColor={'#446270'}
                            editable={true}
                        >
                        </TextInput>

                    </View>
                    <TouchableHighlight style={styles.touchable}
                    onPress={()=> this.props.navigation.navigate('Otp')}>

                        <Text style={styles.touchbletxt}>
                            Continue
                        </Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.compose({
    container: {
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    logo: {
        width: 253,
        height: 253,
        resizeMode: "contain",
        marginTop: 80,
        backgroundColor: 'white'
    },
    text1: {
        color: "#002333",
        fontSize: 20,
        fontFamily: 'Gilroy',
        fontWeight: '700',
        marginTop: 70
    },
    txt2: {
        color: '#9F9F9F',
        fontFamily: 'Gilroy-Regular',
        fontSize: 14,

    }, view1: {
        flexDirection: 'column',
        width: '100%',
        height: 300,
        backgroundColor: '#002333',
        borderRadius: 16,
        marginTop: 80
    },
    view2: {
        flexDirection: 'row',

    },
    inputbox1: {
        width: 59,
        height: 51,
        borderColor: '#13394A',
        borderWidth: 1,
        marginTop: 32,
        marginLeft: 32,
        backgroundColor: '#062E40',
        paddingLeft: 15
    },
    inputbox2: {
        width: 244,
        height: 51,
        borderColor: '#13394A',
        borderWidth: 1,
        marginTop: 32,
        marginLeft: 32,
        backgroundColor: '#062E40',
        paddingLeft: 15
    },
    touchable: {
        width: 311,
        height: 56,
        backgroundColor: '#00C458',
        marginLeft: 45,
        borderRadius: 8,
        marginTop: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    touchbletxt: {
        color: '#FFFFFF',
        fontSize: 20,
        fontFamily: 'Gilroy',
        fontWeight: '700',
    }
})
