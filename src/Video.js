import React, { Component } from 'react'
import { View, StyleSheet, ImageBackground, Image, Text, TextInput, TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
export default class Video extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    source={require('../src/assets/teaching.png')}
                    style={styles.image}>
                    <View style={{
                        width: '100%', height: 235,
                        alignItems: 'center', justifyContent: 'center'
                    }}>
                        <Image
                            source={require('../src/assets/playbtn.png')}
                            style={{ width: 62, height: 62, }}>
                        </Image>
                    </View>
                </ImageBackground>
                <View style={styles.view1}>
                    <View style={{ flexDirection: 'row', height: 70 }}>
                        <Text style={styles.txt1}>
                            Long Chapter Name can be here shown here
                        </Text>
                        <View
                            style={{
                                borderLeftWidth: 1,
                                borderLeftColor: '#173442',
                                height: 40,
                                marginLeft: 50,
                                marginTop: 18
                            }}
                        />
                        <View style={{ flexDirection: 'column', alignItems: "center", }}>
                            <Icon style={{ marginTop: 20, marginLeft: 40 }} name="file-download" size={20} color='#FFF' />
                            <Text style={styles.txt2}>
                                Download
                            </Text>
                        </View>
                    </View>
                    <View style={{
                        width: '100%',
                        borderBottomColor: '#173442',
                        borderBottomWidth: 1,
                        marginTop: 8
                    }}>
                    </View>
                    <View style={styles.view2}>
                        <Icon style={{ marginLeft: 32, marginTop: 8 }} name="chevron-left" size={20} color='#9F9F9F' />
                        <Text style={styles.txt3}>
                            Previous
                        </Text>
                        <Icon style={{ marginTop: 10, marginLeft: 110 }} name="radio-button-checked" size={15} color='#00C458' />
                        <Text style={styles.txt4}>
                            Part 1
                        </Text>
                        <Text style={styles.txt5}>
                            Next
                        </Text>
                        <Icon style={{ marginTop: 8 }} name="chevron-right" size={20} color='#FFF' />
                    </View>
                    <View style={{
                        borderBottomColor: '#173442',
                        borderBottomWidth: 1,

                    }}>
                    </View>
                </View>
                <View style={{ width: '100%', height: '100%', backgroundColor: '#00202F' }}>
                    <View style={styles.view3}>
                        <Text style={styles.txtbox1}>
                            Your sample question can be shown here no matter how long
                        </Text>
                        <View style={styles.img}>
                            <Image style={styles.round}
                                source={require('../src/assets/propic.png')}>
                            </Image>
                        </View>
                    </View>
                    <View style={styles.view4}>
                        <TextInput style={styles.txtinput}
                            placeholder='Ask a question?'
                            placeholderTextColor={'#446270'}>

                        </TextInput>
                        <View style={styles.touchableview}>
                            <TouchableHighlight style={styles.touchablebtn}>
                                <Text style={styles.txttouchable}>
                                    Post
                                </Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                    <View style={styles.view5}
                    >
                        <Image
                            source={require('../src/assets/whatsapp.png')}
                            style={{ width: 20, height: 20, resizeMode: 'contain' }}>
                        </Image>
                        <Text style={styles.txt6}
                            onPress={() => this.props.navigation.navigate('Settings')}>
                            Chat with teacher
                        </Text>
                    </View>

                </View>
            </View >
        )
    }
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',

    },
    image: {
        width: '100%',
        height: 235,
        resizeMode: 'contain'
    },
    view1: {
        width: '100%',
        height: 130,
        backgroundColor: '#00202F',
    },
    txt1: {
        width: 204,
        height: 40,
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'Gilroy',
        color: '#FFFFFF',
        marginLeft: 32,
        marginTop: 18
    },
    txt2: {
        fontSize: 8,
        fontFamily: 'Gilroy',
        fontWeight: '700',
        color: '#FFFFFF',
        marginLeft: 40,
        marginTop: 2
    },
    view2: {
        width: '100%',
        height: 40,
        flexDirection: 'row',
        backgroundColor: '#00202F'
    },
    txt3: {
        fontSize: 8,
        fontWeight: '700',
        fontFamily: 'Gilroy',
        color: '#9F9F9F',
        marginTop: 12,
        marginLeft: 2
    },
    txt4: {
        fontSize: 8,
        fontWeight: '700',
        fontFamily: 'Gilroy',
        color: '#00C458',
        marginTop: 12,
        marginLeft: 5
    },
    txt5: {
        fontSize: 8,
        fontWeight: '700',
        fontFamily: 'Gilroy',
        color: '#FFFFFF',
        marginTop: 12,
        marginLeft: 95,
    },
    view3: {
        width: 321,
        height: 60,
        backgroundColor: '#000000',
        marginLeft: 32,
        marginRight: 32,
        marginTop: 150,
        flexDirection: 'row',
        borderRadius: 5
    },
    txtbox1: {
        width: 224,
        height: 30,
        fontFamily: 'Gilroy-Regular',
        fontSize: 12,
        fontWeight: '600',
        color: '#FFFFFF',
        marginLeft: 16,
        marginTop: 16
    },
    round: {
        width: 44,
        height: 44,
        borderRadius: 44 / 2,
        backgroundColor: '#007345',
        marginLeft: 12,
        marginTop: 8,
        marginBottom: 8
    },
    img: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    view4: {
        width: 321,
        height: 60,
        backgroundColor: '#062E40',
        marginLeft: 32,
        marginRight: 32,
        marginTop: 10,
        flexDirection: 'row',
        borderRadius: 5,
        borderColor: '#13394A',
        borderWidth: 1,
        flexDirection: 'row'
    },
    txtinput: {
        width: '70%',
        height: '100%',
        marginLeft: 16
    },
    touchableview: {
        width: 52,
        height: 52,
        alignItems: 'center',
        justifyContent: 'center'
    },
    touchablebtn: {
        width: 52,
        height: 32,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    txttouchable: {
        color: '#00202F',
        fontSize: 10,
        fontWeight: '700',
        fontFamily: 'Gilroy'
    },
    view5: {
        width: 321,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00202F',
        marginLeft: 32,
        marginRight: 32,
        marginTop: 10,
        flexDirection: 'row',
        borderRadius: 5,
        borderColor: '#00C458',
        borderWidth: 1,
        flexDirection: 'row',
    },
    txt6: {
        fontWeight: '700',
        fontSize: 14,
        fontFamily: "Gilroy",
        color: '#00C458',
        marginLeft: 15,
        marginTop: -5
    }

})