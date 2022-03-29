import React, { Component } from 'react'
import { View, StyleSheet, TextInput, Text, Image, ImageBackground, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.viewfirstpart}>
                    <View style={styles.view1}>
                        <View style={styles.viewdash}>
                            <Icon style={{ marginTop: 5 }} name="grid-view" size={20} color='#00C458' />
                        </View>
                        <Image
                            source={require('../src/assets/logo.png')}
                            style={styles.logo}>
                        </Image>
                        <View style={styles.viewbox}>
                            <TextInput
                                style={styles.round}>
                            </TextInput>
                            <Text style={styles.textclass} >
                                Classes
                            </Text>
                        </View>
                    </View>
                    <View style={{
                        borderBottomColor: '#F1F1F1',
                        borderBottomWidth: 1,
                        marginTop: 30
                    }}>
                    </View>
                    <Text style={styles.wishtxt}>
                        Goodmorning
                    </Text>
                    <Text style={styles.nametxt}>
                        Aaron Taylor
                    </Text>
                    <ImageBackground
                        source={require('../src/assets/squre.png')}
                        style={styles.squre}
                    >
                        <Text style={styles.imgbacktxt}>
                            Class
                        </Text>
                        <Text style={styles.imgbacktxt1}>
                            Plus two science
                        </Text>
                        <Icon style={{ marginLeft: 250, marginTop: -31 }} name="keyboard-arrow-down" size={22} color='white' />
                    </ImageBackground>

                </View>
                <View style={styles.ScrollView}>
                    <ScrollView
                        horizontal={true} style={{ height: 55, marginLeft: 32, marginTop: 50 }}>
                        <View style={styles.viewsubject}>
                            <TextInput
                                style={styles.circle}>
                            </TextInput>
                            <Text style={{
                                fontSize: 12,
                                fontFamily: "Gilroy",
                                fontWeight: '700',
                                color: '#002333',
                                marginTop: 8,
                            }} >
                                Biology
                            </Text>
                        </View>
                        <View style={styles.viewsubject}>
                            <TextInput
                                style={styles.circle}>
                            </TextInput>
                            <Text style={styles.txtsubject} >
                                Physics
                            </Text>
                        </View>
                        <View style={styles.viewsubject}>
                            <TextInput
                                style={styles.circle}>
                            </TextInput>
                            <Text style={styles.txtsubject} >
                                Chemistry
                            </Text>
                        </View>
                        <View style={styles.viewsubject}>
                            <TextInput
                                style={styles.circle}>
                            </TextInput>
                            <Text style={styles.txtsubject} >
                                Maths
                            </Text>
                            <View style={styles.viewsubject}>
                                <TextInput
                                    style={styles.circle}>
                                </TextInput>
                                <Text style={styles.txtsubject} >
                                    English
                                </Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
                <Text style={styles.txtrecent}>
                    Recent courses
                </Text>
                <View style={styles.videoview}>
                    <ScrollView horizontal={true} style={{ marginLeft: 32, marginTop: 15 }}>
                        <ImageBackground source={require('../src/assets/sci.png')}
                            style={{
                                width: 213,
                                height: 121,
                                resizeMode: 'contain',
                            }}>

                        </ImageBackground>
                        <ImageBackground source={require('../src/assets/biolgy.png')}
                            style={styles.videoimg}>

                        </ImageBackground>
                        <ImageBackground source={require('../src/assets/chem.png')}
                            style={styles.videoimg}>

                        </ImageBackground>


                    </ScrollView>
                </View>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        padding: 10
    },
    viewfirstpart: {
        width: '100%',
        height: 241,
        backgroundColor: '#F9F9F9'
    },
    view1: {
        flexDirection: 'row',
        marginTop: 40,
        alignItems: 'center',
        marginLeft: 32
    },
    viewdash: {
        width: 32,
        height: 32,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#D5D5D5',
        alignItems: 'center'
    },
    logo: {
        width: 116,
        height: 26,
        resizeMode: "contain",
        marginTop: 5,
        backgroundColor: 'white'
    },
    viewbox: {
        width: 75,
        height: 32,
        borderColor: '#00C458',
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 5,
        marginLeft: 74,
        marginRight: 32,
        flexDirection: 'row',
    },
    round: {
        width: 20,
        height: 20,
        borderRadius: 20 / 2,
        backgroundColor: '#007345',
        marginLeft: 8,
        marginTop: 5,
        marginBottom: 8
    },
    textclass: {
        fontSize: 10,
        fontFamily: "Gilroy",
        fontWeight: '700',
        color: '#00C458',
        marginTop: 8,
        marginLeft: 6
    },
    wishtxt: {
        fontSize: 12,
        fontFamily: 'Gilroy',
        fontWeight: '700',
        color: '#002333',
        marginLeft: 32,
        marginTop: 20
    },
    nametxt: {
        fontSize: 24,
        fontFamily: 'Gilroy ☞',
        fontWeight: 'bold',
        color: '#002333',
        marginLeft: 32,
        marginTop: 1

    }, squre: {
        width: 311,
        height: 64,
        resizeMode: 'contain',
        marginLeft: 32,
        marginTop: 30
    },
    imgbacktxt: {
        color: '#BAC3C7',
        fontFamily: 'Gilroy-Regular ☞',
        fontWeight: 'normal',
        fontSize: 12,
        marginTop: 16,
        marginLeft: 32
    },
    imgbacktxt1: {
        color: '#FFFFFF',
        fontFamily: 'Gilroy ☞',
        fontSize: 14,
        fontWeight: '600',
        marginLeft: 32,
        marginTop: 2
    },
    downarrow: {
        width: 7,
        height: 3,
        resizeMode: 'contain',
        marginLeft: 250,
        marginBottom: 100,
    },
    scrollview: {
        width: '100%',
        height: 55,
        flexDirection: 'row',
    },
    viewsubject: {
        width: 95,
        height: 40,
        borderColor: '#002333',
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        flexDirection: 'row',
        marginTop: 5,
        
    },
    circle: {
        width: 20,
        height: 20,
        borderRadius: 20 / 2,
        backgroundColor: '#00C458',
        marginLeft: 8,
        marginTop: 7,
        marginBottom: 8
    },
    txtsubject: {
        fontSize: 12,
        fontFamily: "Gilroy",
        fontWeight: '700',
        color: '#002333',
        marginTop: 8,
        marginLeft: 6,

    },
    txtrecent: {
        marginLeft: 32,
        color: '#002333',
        marginTop: 10,
        fontFamily: 'Gilroy',
        fontSize: 12,
        fontWeight: '500'
    },
    videoview: {
        width: '100%',
        height: 121,
        flexDirection: 'row'
    },
    videoimg: {
        width: 213,
        height: 121,
        resizeMode: 'contain',
        marginLeft: 8,
    }


})