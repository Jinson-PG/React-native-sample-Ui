import React, { Component } from "react"
import { View, StyleSheet, Image, Text, TextInput, TouchableHighlight } from 'react-native'


export default class Otp extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require('../src/assets/logo.png')}
                    style={styles.logo}>
                </Image>
                <Image
                    source={require('../src/assets/group.png')}
                    style={styles.icon}>
                </Image>
                <Text style={styles.txt1}>
                    Verification code
                </Text>
                <Text style={styles.txt2}>
                    Please type the verification code sent to
                </Text>
                <Text style={styles.txt3}>
                    +91 9048518043
                </Text>
                <View style={styles.view1}>
                    <View style={styles.view2}>
                        <TextInput style={styles.inputbox1}
                            editable={true}
                            placeholderTextColor={'white'}
                        >
                        </TextInput>
                        <TextInput style={styles.inputbox1}
                            editable={true}
                            placeholderTextColor={'white'}
                        >
                        </TextInput>
                        <TextInput style={styles.inputbox1}
                            editable={true}
                            placeholderTextColor={'white'}
                        >
                        </TextInput>

                        <TextInput style={styles.inputbox1}
                            editable={true}
                            placeholderTextColor={'white'}
                        >
                        </TextInput>
                        <TextInput style={styles.inputbox1}
                            editable={true}
                            placeholderTextColor={'white'}
                        >
                        </TextInput>

                        <TextInput style={styles.inputbox1}
                            editable={true}
                            placeholderTextColor={'white'}
                        >
                        </TextInput>


                    </View>
                    <TouchableHighlight style={styles.touchable}
                        onPress={() => this.props.navigation.navigate('Otp')}>

                        <Text style={styles.touchbletxt}>
                        Resend OTP
                        </Text>
                    </TouchableHighlight>

                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
    }, logo: {
        width: 169,
        height: 42,
        resizeMode: "contain",
        marginTop: 46,
        backgroundColor: 'white'
    },
    icon: {
        width: 141,
        height: 128,
        resizeMode: 'contain',
        marginTop: 100
    },
    txt1: {
        width: 156,
        height: 24,
        fontFamily: 'Gilroy',
        fontWeight: '700',
        color: '#002333',
        marginTop: 100,
        fontSize: 20
    },
    txt2: {
        height: 16,
        fontFamily: 'Gilroy-Regular',
        fontSize: 'normal',
        fontSize: 14,
        color: '#9F9F9F',
        marginTop: 5
    },
    txt3: {
        height: 16,
        fontFamily: 'Gilroy',
        fontWeight: '700',
        fontSize: 14,
        color: '#002333',
        marginTop: 60
    },
    view1: {
        flexDirection: 'column',
        width: '100%',
        height: 300,
        backgroundColor: '#002333',
        borderRadius: 16,
        marginTop: 20,
        alignItems: 'center'
    },
    view2: {
        flexDirection: 'row',

    },
    inputbox1: {
        width: 45,
        height: 45,
        borderColor: '#13394A',
        borderWidth: 1,
        marginTop: 32,
        marginLeft: 8,
        backgroundColor: '#062E40',
        paddingLeft: 15
    },
    touchable: {
        width: 311,
        height: 56,
        backgroundColor: '#00C458',
        borderRadius: 5,
        marginTop: 20,
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
