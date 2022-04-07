import React, { Component } from 'react'
import { View, StyleSheet, TextInput, Text, Image, ImageBackground, ScrollView } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import SideBar from './Drawer/SideBar'
import Icon from 'react-native-vector-icons/MaterialIcons'

// function MyDrawer() {
//     return (
//         <Drawer.Navigator
//         drawerContent={()=> <SideBar/>}
//         >
         
//         </Drawer.Navigator>
//     )
// }
// function MyDrawer(){
//   return(
//     <Drawer.Screen
//    name='SideBar'
//    component={SideBar}
//     />
//   )
// }
export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>

                <View style={styles.viewfirstpart}>
                    <View style={styles.view1}>
                        <View style={styles.viewdash}>
                            {/* <MyDrawer/> */}
                            <Icon style={{ marginTop: 5 }} name="grid-view" size={20} color='#00C458'
                            />
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
                        <View style={styles.viewsubject1}
                          >
                            <TextInput
                                style={styles.circle}>
                            </TextInput>
                            <Text style={{
                                fontSize: 12,
                                fontFamily: "Gilroy",
                                fontWeight: '700',
                                color: '#002333',
                                marginTop: 8,
                            }} 
                            onPress={() => this.props.navigation.navigate('Course')}>
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
                        <ImageBackground source={require('../src/assets/biolgy.png')}
                            style={{
                                width: 213,
                                height: 121,
                                resizeMode: 'contain',
                            }}>
                            <View style={styles.imgbackview}>
                                <Image style={styles.playbtn}
                                    source={require('../src/assets/playbtn.png')} >
                                </Image>
                                <Text style={styles.coursetitletxt}>
                                    Course Title
                                </Text>
                            </View>
                        </ImageBackground>
                        <ImageBackground
                            source={require('../src/assets/sci.png')}
                            style={styles.videoimg}>
                            <View style={styles.imgbackview}>
                                <Image style={styles.playbtn}
                                    source={require('../src/assets/playbtn.png')}>
                                </Image>
                                <Text style={styles.coursetitletxt}>
                                    Course Title
                                </Text>
                            </View>
                        </ImageBackground>
                        <ImageBackground source={require('../src/assets/chem.png')}
                            style={styles.videoimg}>
                            <View style={styles.imgbackview}>
                                <Image style={styles.playbtn}
                                    source={require('../src/assets/playbtn.png')}>
                                </Image>
                                <Text style={styles.coursetitletxt}>
                                    Course Title
                                </Text>
                            </View>
                        </ImageBackground>
                    </ScrollView>
                </View>
                <View style={{ marginTop: 10, marginLeft: 32, height: 200, marginBottom: 10, borderRadius: 10 }}>

                    <ScrollView horizontal={true} >

                        <View style={{ flexDirection: 'column', width: 238, height: '100%', backgroundColor: '#002333', borderRadius: 15 }}>

                            <TextInput style={styles.procircle}>
                            </TextInput>
                            <Text style={{
                                fontWeight: 'bold',
                                color: '#FFFFFF', fontFamily: 'Gilroy', fontSize: 18, marginLeft: 20,
                            }}>
                                Target live classes
                            </Text>

                            <Text style={{ color: '#446270', fontSize: 12, marginLeft: 24 }}>
                                Live classes by best teachers from LearningHub to clear your doubts and to provide individual attention
                            </Text>
                            <TouchableHighlight style={styles.touchable}>
                                <Text style={styles.touchbletxt}>
                                    Book a free Class
                                </Text>
                            </TouchableHighlight>
                        </View>
                        <View style={{ flexDirection: 'column', width: 238, height: '100%', backgroundColor: '#002333', borderRadius: 15, marginLeft: 5 }}>
                            <TextInput style={styles.procircle}>
                            </TextInput>
                            <Text style={{
                                fontWeight: 'bold',
                                color: '#FFFFFF', fontFamily: 'Gilroy', fontSize: 18, marginLeft: 20,
                            }}>
                                Avail free online counselling session
                            </Text>
                            <Text style={{ color: '#446270', fontSize: 12, marginLeft: 24 }}>
                                By LearningHub's career experts
                            </Text>
                            <TouchableHighlight style={styles.touchable}
                             >
                                <Text style={styles.touchbletxt}>
                                    Schedule a call
                                </Text>
                            </TouchableHighlight>
                            <View style={styles.endbox}>
                                <View style={styles.view8}>
                                    <View>
                                        <Image style={styles.homeimg}
                                            source={require('../src/assets/home.png')}>
                                        </Image>

                                        <View style={{ width: 4, height: 4, borderRadius: 4 / 2, backgroundColor: '#000', marginLeft: 25, }}>
                                        </View>
                                    </View>
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
                                    <Image style={styles.homeimg}
                                        source={require('../src/assets/pronormal.png')}
                                        onPress={() => this.props.navigation.navigate('Settings')}>
                                    </Image>
                                    <Text style={styles.hometxt}
                                    onPress={() => this.props.navigation.navigate('Settings')}>
                                        Profile
                                    </Text>
                                    <Icon style={{ marginLeft: 20 }} name="email" size={20} color='#e3dada' />
                                    <Text style={styles.hometxt}>
                                        Contact
                                    </Text>
                                </View>
                            </View>
                        </View>
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
    viewsubject1: {
        width: 95,
        height: 40,
        borderColor: '#002333',
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        flexDirection: 'row',
        marginTop: 5,

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
        marginLeft:5

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
    },
    imgbackview: {
        flexDirection: 'row',
        marginTop: 72,
        marginLeft: 10
    },
    playbtn: {
        width: 24,
        height: 24,
        resizeMode: 'contain'
    },
    coursetitletxt: {
        fontFamily: "Gilroy",
        fontSize: 12,
        fontWeight: '800',
        color: '#FFFFFF',
        marginLeft: 10,
        marginTop: 4
    },
    procircle: {
        width: 60,
        height: 60,
        borderRadius: 100 / 2,
        backgroundColor: '#002E43',
        marginLeft: 20,
        marginTop: 20,
        marginBottom: 8
    },
    touchable: {
        width: 100,
        height: 30,
        marginLeft: 24,
        backgroundColor: '#00C458',
        borderRadius: 5,
        marginTop: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    touchbletxt: {
        color: '#FFFFFF',
        fontSize: 12,
        fontFamily: 'Gilroy',
        fontWeight: '700',
    },
    endbox: {
        flexDirection: 'row',
        borderRadius: 10,
        marginLeft: -245,
        marginTop: -69,
        width: 343,
        height: 50,
        backgroundColor: '#FFFFFF',
        shadowColor: '#00000014',
        borderWidth: 1,
        borderColor: '#EEEEEE'
    },
    view8: {
        width: 333,
        height: 50,
        backgroundColor: '#FFF',
        borderColor: '#EEEEEE',
        borderWidth: 1,
        shadowColor: '#00000014',
        borderRadius: 5,

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