import React, { Component } from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class Settings extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.view1}>
                    <Text style={styles.txt1}>
                        Profile
                    </Text>
                    <Icon style={{ marginTop: 33, marginLeft: 80 }} name="notifications-none" size={25} color='#e3dada' />
                    <View style={styles.viewdash}>
                        <Icon style={{ marginTop: 5 }} name="grid-view" size={20} color='#00C458' 
                          onPress={() => this.props.navigation.navigate('Chapter')}/>
                    </View>
                </View>
                <View style={styles.view2}>
                    <View style={styles.view3}>
                        <View style={styles.img}>
                            <Image style={styles.round}
                                source={require('../src/assets/propic.png')}>
                            </Image>
                        </View>
                        <View style={styles.view4}>
                            <Text style={styles.txt2}>
                                Jane Doe
                            </Text>
                            <Text style={styles.txt3}>
                                ID: 12345678
                            </Text>
                        </View>
                    </View>
                    <Text style={styles.txt4}>
                        Personal Info
                    </Text>
                    <View style={{
                        width: '100%',
                        borderBottomColor: '#EEEEEE',
                        borderBottomWidth: 2,
                        marginTop: 20
                    }}>
                    </View>
                    <View style={styles.view5}>
                        <Text style={styles.txt6}>
                            Account Settings
                        </Text>
                        <Text style={styles.txt7}>
                            Aaron Taylor
                        </Text>
                    </View>
                    <View style={{
                        width: '90%',
                        borderBottomColor: '#EEEEEE',
                        borderBottomWidth: 2,
                        marginTop: 20,
                        marginLeft: 16,
                    }}>
                    </View>
                    <View style={styles.view5}>
                        <Text style={styles.txt6}>
                            Email
                        </Text>
                        <Text style={styles.txt7}>
                            emaidid123@server.com
                        </Text>
                    </View>
                    <View style={{
                        width: '90%',
                        borderBottomColor: '#EEEEEE',
                        borderBottomWidth: 2,
                        marginTop: 20,
                        marginLeft: 16,
                    }}>
                    </View>
                    <View style={styles.view5}>
                        <Text style={styles.txt6}>
                            Number
                        </Text>
                        <Text style={styles.txt7}>
                            +91 9876543210
                        </Text>
                    </View>
                    <View style={{
                        width: '90%',
                        borderBottomColor: '#EEEEEE',
                        borderBottomWidth: 2,
                        marginTop: 20,
                        marginLeft: 16,
                    }}>
                    </View>
                    <Text style={styles.txt8}>
                        Course Info
                    </Text>
                    <View style={{
                        width: '100%',
                        borderBottomColor: '#EEEEEE',
                        borderBottomWidth: 2,
                        marginTop: 20,
                    }}>
                    </View>
                    <View style={styles.view5}>
                        <Text style={styles.txt6}>
                            Center
                        </Text>
                        <Text style={styles.txt7}>
                            Inmakes edu
                        </Text>
                    </View>
                    <View style={{
                        width: '90%',
                        borderBottomColor: '#EEEEEE',
                        borderBottomWidth: 2,
                        marginTop: 20,
                        marginLeft: 16,
                    }}>
                    </View>
                    <View style={styles.view5}>
                        <Text style={styles.txt6}>
                            Course
                        </Text>
                        <Text style={styles.txt7}>
                            Plus Two Science
                        </Text>
                    </View>
                    <View style={{
                        width: '90%',
                        borderBottomColor: '#EEEEEE',
                        borderBottomWidth: 2,
                        marginTop: 20,
                        marginLeft: 16,
                    }}>
                    </View>
                    <View style={styles.view5}>
                        <Text style={styles.txt6}>
                            Payment Status
                        </Text>
                        <Text style={styles.txt7}>
                            Free
                        </Text>
                    </View>
                    <View style={{
                        width: '90%',
                        borderBottomColor: '#EEEEEE',
                        borderBottomWidth: 2,
                        marginTop: 20,
                        marginLeft: 16,
                    }}>
                    </View>
                    <View style={styles.view5}>
                        <Text style={styles.txt6}>
                            Expiry Date
                        </Text>
                        <Text style={styles.txt7}>
                            Not Applicable
                        </Text>
                    </View>
                    <View style={styles.view6}>
                        <View style={styles.view7}>
                            <Icon name="credit-card" size={25} color='#FFF' />
                        </View>
                        <Text style={styles.txt9}>
                            Custom Payment
                        </Text>
                        <Icon style={{ marginLeft: 120 }} name="chevron-right" size={20} color='#FFF' />
                    </View>
                    <View style={styles.view8}>
                        <Image style={styles.homeimg}
                            source={require('../src/assets/hom.png')}>
                        </Image>
                        <Text style={styles.hometxt}>
                            Home
                        </Text>
                        <Image style={styles.homeimg}
                            source={require('../src/assets/play.png')}>
                        </Image>
                        <Text style={styles.hometxt}>
                            Recent
                        </Text>
                        <Image style={styles.homeimg}

                            source={require('../src/assets/menu.png')}>
                        </Image>
                        <Text style={styles.hometxt}>
                            Exams
                        </Text>
                        <View style={{ flexDirection: 'column' }}
                          >
                            <Image style={styles.homeimg}

                                source={require('../src/assets/pro.png')}>
                            </Image>
                            <View style={{ width: 4, height: 4, borderRadius: 4 / 2, backgroundColor: '#000', marginLeft: 25, }}>

                            </View>
                        </View>
                        <Icon style={{ marginLeft: 20 }} name="email" size={20} color='#e3dada' />
                        <Text style={styles.hometxt}>
                            Contact
                        </Text>
                    </View>
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
        backgroundColor: '#F9F8F8',
    },
    view1: {
        width: '100%',
        height: 290,
        backgroundColor: '#00202F',
        flexDirection: 'row',

    },
    txt1: {
        fontSize: 20,
        fontFamily: 'Gilroy',
        fontWeight: '600',
        color: '#FFFFFF',
        marginTop: 30,
        marginLeft: 160
    },
    viewdash: {
        width: 32,
        height: 32,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#D5D5D5',
        alignItems: 'center',
        marginTop: 30,
        marginLeft: 20
    },
    view2: {
        width: 330,
        height: 515,
        marginTop: -200,
        backgroundColor: '#FFF',
        marginLeft: 27,
        borderColor: '#EEEEEE',
        borderRadius: 15
    },
    view3: {
        flexDirection: 'row',
        width: '100%',
        height: 70,
        backgroundColor: '#FFFFFF',
        borderRadius: 15
    },
    img: {
        width: 44,
        height: 44,
        resizeMode: 'contain'
    },
    round: {
        width: 44,
        height: 44,
        borderRadius: 44 / 2,
        backgroundColor: '#007345',
        marginLeft: 16,
        marginTop: 16,
        marginBottom: 8
    },
    view4: {

        backgroundColor: '#FFFFFF',
        width: 80,
        height: '100%',
        marginLeft: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txt2: {
        fontFamily: 'Gilroy',
        fontWeight: 'bold',
        fontSize: 14,
        color: '#4D4D4D'
    },
    txt3: {
        height: 12,
        fontSize: 10,
        fontFamily: 'Gilroy-Regular',
        fontWeight: '600',
        color: '#4D4D4D'
    },
    txt4: {
        fontFamily: 'Gilroy',
        fontWeight: 'bold',
        fontSize: 14,
        color: '#4D4D4D',
        marginLeft: 16,
        marginTop: 15
    },
    view5: {
        flexDirection: 'row',
        width: '100%',
        height: 15,
        marginTop: 10,
        borderColor: 'black',
        alignItems: 'center'
    },
    txt6: {
        width: 100,
        fontFamily: 'Gilroy-Regular',
        fontSize: 12,
        fontWeight: '600',
        color: '#4D4D4D',
        marginLeft: 16
    },
    txt7: {
        fontFamily: 'Gilroy',
        fontWeight: 'bold',
        fontSize: 12,
        color: '#4D4D4D',
        marginLeft: 15
    },
    txt8: {
        fontWeight: 'bold',
        fontSize: 14,
        fontFamily: 'Gilroy',
        color: '#4D4D4D',
        marginLeft: 16,
        marginTop: 25
    },
    view6: {
        width: 327,
        height: 60,
        backgroundColor: '#00C458',
        marginTop: 20,
        borderRadius: 10,
        alignItems: 'center',
        flexDirection: 'row'
    },
    view7: {
        width: 36,
        height: 36,
        backgroundColor: '#5aed6d',
        marginLeft: 16,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txt9: {
        fontFamily: 'Montserrat',
        fontWeight: '700',
        fontSize: 12,
        color: '#FFFFFF',
        marginLeft: 15
    },
    view8: {
        width: 343,
        height: 50,
        backgroundColor: '#FFF',
        borderColor: '#EEEEEE',
        borderWidth: 1,
        shadowColor: '#00000014',
        borderRadius: 10,
        marginTop: -5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    homeimg: {
        width: 17,
        height: 17,
        resizeMode: 'contain',
        marginLeft: 20,
        marginBottom: 5
    },
    hometxt: {
        fontFamily: 'Gilroy',
        fontWeight: '700',
        fontSize: 8,
        color: '#C2C2C2',
        marginLeft: 5
    }
})