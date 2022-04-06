import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Videos from '../src/Tab/Videos'
import Resources from '../src/Tab/Resources'
import ChapterTest from '../src/Tab/ChapterTest'
import QNBank from '../src/Tab/QNBank'

const Tab = createMaterialTopTabNavigator()
function MyTab() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarLabelStyle: { fontSize: 12 },
                tabBarStyle: { backgroundColor: '#00202F' },
                
            }}>
            <Tab.Screen
                name='Videos'
                component={Videos}
                options={{
                    tabBarActiveTintColor: '#FFF',
                    tabBarInactiveTintColor: '#9F9F9F',
                    tabBarIndicatorStyle:{backgroundColor:'#00C458',height:5,width:60,marginLeft:20}
                    
                }} />
            <Tab.Screen
                name='Chapter Test'
                component={ChapterTest}
                options={{
                    tabBarActiveTintColor: '#FFF',
                    tabBarInactiveTintColor: '#9F9F9F',
                    tabBarIndicatorStyle:{backgroundColor:'#00C458',height:5,width:60,marginLeft:18}
                }} />
            <Tab.Screen
                name='Resources'
                component={Resources}
                options={{
                    tabBarActiveTintColor: '#FFF',
                    tabBarInactiveTintColor: '#9F9F9F',
                    tabBarIndicatorStyle:{backgroundColor:'#00C458',height:5,width:60,marginLeft:18}
                }} />
            <Tab.Screen
                name='QN Bank'
                component={QNBank}
                options={{
                    tabBarActiveTintColor: '#FFF',
                    tabBarInactiveTintColor: '#9F9F9F',
                    tabBarIndicatorStyle:{backgroundColor:'#00C458',height:5,width:60,marginLeft:20}
                }} />
        </Tab.Navigator>
    )
}
export default class Chapter extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.view1}>
                    <View style={{ flexDirection: 'row', marginTop: 40 }}>
                        <View style={{ alignItems: 'center', width: 32, height: 32, borderWidth: 1, borderColor: '#ebe6e6', marginLeft: 32, }}>
                            <Icon style={{ marginTop: 5 }} name="chevron-left" size={20} color='#00C458' />
                        </View>
                        <Text style={styles.txtbiology}>
                            Biology
                        </Text>
                    </View>
                    <Text style={styles.chaptername}>
                        Long chapter name can be shown here.
                    </Text>
                    <View style={{ flexDirection: 'row', marginLeft: 32, marginTop: 12 }}>
                        <Icon style={{ marginTop: 5 }} name="radio-button-checked" size={15} color='#00C458' />
                        <Text style={styles.chapterstxt}>
                            Chapter 1
                        </Text>
                        <Icon style={{ marginTop: 5, marginLeft: 30 }} name="radio-button-checked" size={15} color='#00C458' />
                        <Text style={styles.chapterstxt}>
                            3 parts
                        </Text>
                    </View >

                </View>
                <MyTab />
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
        height: 240,
        backgroundColor: '#00202F'
    },
    txtbiology: {
        fontFamily: 'Gilroy',
        fontSize: 20,
        fontWeight: '600',
        color: '#FFF',
        marginLeft: 100
    },
    chaptername: {
        fontFamily: 'Gilroy',
        fontSize: 25,
        fontWeight: 'bold',
        color: '#FFF',
        marginLeft: 32,
        marginTop: 30
    },
    chapterstxt: {
        fontFamily: 'Gilroy',
        fontSize: 10,
        fontWeight: '500',
        color: '#00C458',
        marginTop: 5,
        marginLeft: 5
    },
})