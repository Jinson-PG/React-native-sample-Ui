import React, { Component } from "react"
import { View, StyleSheet, TouchableHighlight, Image, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'


export default class SideBar extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ alignItems: 'center', width: 32, height: 32, borderWidth: 1, borderColor: '#ebe6e6', marginLeft: 32, marginTop: 32 }}>
                    <Icon style={{ marginTop: 5 }} name="close" size={20} color='#00C458' />
                </View>
                <View style={styles.view3}>
                    <View style={styles.img}>
                        <Image style={styles.round}
                            source={require('../assets/propic.png')}>
                        </Image>
                    </View>
                    <View style={styles.view4}>
                        <Text style={styles.txt2}>
                            Aaron Taylor
                        </Text>
                        <Text style={styles.txt3}>
                            ID: 12345678
                        </Text>
                    </View>
                    <Icon style={{ marginTop: 20, marginLeft: 50 }} name="chevron-right" size={20} color='#00C458' />
                </View>
                <View style={styles.boxview1}>
                    <View style={styles.box}>

                    </View>
                    <Text style={styles.texts}>
                        Exam corner
                    </Text>
                </View>              
                <View style={{
                        width: '80%',
                        borderBottomColor: '#173442',
                        borderBottomWidth: 2,
                        marginTop: 5,
                        marginLeft: 32,
                    }}>
                    </View>

                    <View style={styles.boxview}>
                    <View style={styles.box}>

                    </View>
                    <Text style={styles.texts}>
                    Subrscriptions
                    </Text>
                </View>              
                <View style={{
                        width: '80%',
                        borderBottomColor: '#173442',
                        borderBottomWidth: 2,
                        marginTop: 5,
                        marginLeft: 32,
                    }}>
                    </View>
                    <View style={styles.boxview}>
                    <View style={styles.box}>

                    </View>
                    <Text style={styles.texts}>
                    Analytics
                    </Text>
                </View>              
                <View style={{
                        width: '80%',
                        borderBottomColor: '#173442',
                        borderBottomWidth: 2,
                        marginTop: 5,
                        marginLeft: 32,
                    }}>
                    </View>
                    <View style={styles.boxview}>
                    <View style={styles.box}>

                    </View>
                    <Text style={styles.texts}>
                    Downloads
                    </Text>
                </View>              
                <View style={{
                        width: '80%',
                        borderBottomColor: '#173442',
                        borderBottomWidth: 2,
                        marginTop: 5,
                        marginLeft: 32,
                    }}>
                    </View>
                    <View style={styles.boxview}>
                    <View style={styles.box}>

                    </View>
                    <Text style={styles.texts}>
                    Notifications
                    </Text>
                </View>              
                <View style={{
                        width: '80%',
                        borderBottomColor: '#173442',
                        borderBottomWidth: 2,
                        marginTop: 5,
                        marginLeft: 32,
                    }}>
                    </View>
                    <View style={styles.boxview}>
                    <View style={styles.box}>

                    </View>
                    <Text style={styles.texts}>
                    Referrals
                    </Text>
                </View>              
                <View style={{
                        width: '80%',
                        borderBottomColor: '#173442',
                        borderBottomWidth: 2,
                        marginTop: 5,
                        marginLeft: 32,
                    }}>
                    </View>

                    <View style={styles.boxview}>
                    <View style={styles.box}>

                    </View>
                    <Text style={styles.texts}>
                    Share app
                    </Text>
                </View>              
                <View style={{
                        width: '80%',
                        borderBottomColor: '#173442',
                        borderBottomWidth: 2,
                        marginTop: 5,
                        marginLeft: 32,
                    }}>
                    </View>
                    <View style={styles.boxview}>
                    <View style={styles.boxred}>

                    </View>
                    <Text style={styles.textsred}>
                    Logout
                    </Text>
                </View> 
                <View style={styles.view5}
                    >
                       
                        <Text style={styles.txt6}
                            onPress={() => this.props.navigation.navigate('Settings')}>
                         Enquire now
                        </Text>
                    </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        height: '100%',
        backgroundColor: '#002333'
    },
    viewback: {
        width: '100%',
        height: 100,
        marginTop: 10,
        backgroundColor: '#002333',
        justifyContent: 'center',
    },
    img: {
        width: 44,
        height: 44,
        resizeMode: 'contain'
    },
    round: {
        width: 54,
        height: 54,
        borderRadius: 54 / 2,
        backgroundColor: '#007345',
        borderColor: '#00C458',
        borderWidth: 2,
        marginLeft: 32,
    },
    view3: {
        flexDirection: 'row',
        width: '100%',
        height: 50,
        backgroundColor: '#002333',
        borderRadius: 15,
        marginTop: 30
    },
    txt2: {
        fontFamily: 'Gilroy',
        fontWeight: 'bold',
        fontSize: 14,
        color: '#FFFFFF',
        width: 90,
        marginLeft: 25
    },
    view4: {
        backgroundColor: '#002333',
        width: 80,
        marginLeft: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txt3: {
        height: 12,
        fontSize: 10,
        fontFamily: 'Gilroy-Regular',
        fontWeight: '600',
        color: '#6A828E'
    },
    boxview: {
        flexDirection: 'row',
        width: '100%',
        height: 45,
        backgroundColor: '#002333',
        marginTop: 10,
        alignItems: 'center',
    },
    boxview1: {
        flexDirection: 'row',
        width: '100%',
        height: 45,
        backgroundColor: '#002333',
        marginTop: 40,
        alignItems: 'center',
    },
    box: {
        width: 30,
        height: 30,
        marginLeft: 32,
        borderRadius: 5,
        
        borderColor: '#00C458',
        borderWidth: 1
    },
    boxred: {
        width: 30,
        height: 30,
        marginLeft: 32,
        borderRadius: 5,
        borderColor: '#E14949',
        borderWidth: 1
    },
    texts: {
        color: '#FFFFFF',
        fontFamily: 'Gilroy-Regular',
        fontSize: 14,
        marginLeft: 30,
        fontWeight:'normal'
    },
    textsred: {
        color: '#E14949',
        fontFamily: 'Gilroy-Regular',
        fontSize: 14,
        marginLeft: 30,
        fontWeight:'normal'
    },
    view5: {
        width: 193,
        height: 47,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00202F',
        marginLeft: 32,
        marginRight: 32,
        marginTop: 5,
        flexDirection: 'row',
        borderRadius: 5,
        borderColor: '#00C458',
        borderWidth: 1,
        flexDirection: 'row',
    },
    txt6: {
        fontWeight: '700',
        fontSize: 12,
        fontFamily: "Gilroy",
        color: '#00C458',
                
    }
    
})

