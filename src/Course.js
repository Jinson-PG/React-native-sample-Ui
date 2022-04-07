import React, { Component } from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'


export default class Course extends Component {
    render() {
        return (
            <View style={styles.container}
            >

                <View style={styles.view2}>
                    <View style={{ alignItems: 'center', width: 32, height: 32, borderWidth: 1, borderColor: '#ebe6e6', marginLeft: 32, marginTop: 40 }}>
                        <Icon style={{ marginTop: 5 }} name="chevron-left" size={20} color='#00C458' 
                         onPress={() => this.props.navigation.navigate('Home')}/>
                    </View>
                    <Text style={styles.txtbio}>
                        Biology
                    </Text>
                    <View style={{ flexDirection: 'row', marginLeft: 32, marginTop: 12 }}>
                        <Icon style={{ marginTop: 5 }} name="radio-button-checked" size={15} color='#00C458' />
                        <Text style={styles.chapterstxt}>
                            12 Chapters
                        </Text>
                        <Icon style={{ marginTop: 5, marginLeft: 30 }} name="radio-button-checked" size={15} color='#00C458' />
                        <Text style={styles.chapterstxt}>
                            124 hours
                        </Text>
                    </View >
                </View>
                <View style={{backgroundColor:'#F9F9F9'}}>
                <View style={styles.view3}>
                    <Text style={styles.txt1}
                    onPress={() => this.props.navigation.navigate('Video')} >
                        Long chapter name can be shown here.
                    </Text>
                    <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 12 }}>
                        <Icon style={{ marginTop: 5 }} name="radio-button-checked" size={15} color='#9F9F9F' />
                        <Text style={styles.chapterstxt1}>
                        Chapter 1
                        </Text>
                        <Icon style={{ marginTop: 5, marginLeft: 30 }} name="radio-button-checked" size={15} color='#9F9F9F' />
                        <Text style={styles.chapterstxt1}>
                        3 parts
                        </Text>
                    </View >
                </View>
                <View style={styles.view4}>
                    <Text style={styles.txt1} >
                        Long chapter name can be shown here.
                    </Text>
                    <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 12 }}>
                        <Icon style={{ marginTop: 5 }} name="radio-button-checked" size={15} color='#9F9F9F' />
                        <Text style={styles.chapterstxt1}>
                        Chapter 1
                        </Text>
                        <Icon style={{ marginTop: 5, marginLeft: 30 }} name="radio-button-checked" size={15} color='#9F9F9F' />
                        <Text style={styles.chapterstxt1}>
                        3 parts
                        </Text>
                    </View >
                </View>
                <View style={styles.view4}>
                    <Text style={styles.txt1} >
                        Long chapter name can be shown here.
                    </Text>
                    <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 12 }}>
                        <Icon style={{ marginTop: 5 }} name="radio-button-checked" size={15} color='#9F9F9F' />
                        <Text style={styles.chapterstxt1}>
                        Chapter 1
                        </Text>
                        <Icon style={{ marginTop: 5, marginLeft: 30 }} name="radio-button-checked" size={15} color='#9F9F9F' />
                        <Text style={styles.chapterstxt1}>
                        3 parts
                        </Text>
                    </View >
                </View>
                <View style={styles.view4}>
                    <Text style={styles.txt1} >
                        Long chapter name can be shown here.
                    </Text>
                    <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 12 }}>
                        <Icon style={{ marginTop: 5 }} name="radio-button-checked" size={15} color='#9F9F9F' />
                        <Text style={styles.chapterstxt1}>
                        Chapter 1
                        </Text>
                        <Icon style={{ marginTop: 5, marginLeft: 30 }} name="radio-button-checked" size={15} color='#9F9F9F' />
                        <Text style={styles.chapterstxt1}>
                        3 parts
                        </Text>
                    </View >
                </View>
                <View style={styles.view4}>
                    <Text style={styles.txt1} >
                        Long chapter name can be shown here.
                    </Text>
                    <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 12 }}>
                        <Icon style={{ marginTop: 5 }} name="radio-button-checked" size={15} color='#9F9F9F' />
                        <Text style={styles.chapterstxt1}>
                        Chapter 1
                        </Text>
                        <Icon style={{ marginTop: 5, marginLeft: 30 }} name="radio-button-checked" size={15} color='#9F9F9F' />
                        <Text style={styles.chapterstxt1}>
                        3 parts
                        </Text>
                    </View >
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
        backgroundColor: '#FFFFFF',

    },
    view2: {
        width: '100%',
        height: 225,
        backgroundColor: '#00202F'
    },
    txtbio: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 24,
        fontFamily: 'Gilroy',
        marginLeft: 32,
        marginTop: 40
    },
    chapterstxt: {
        fontFamily: 'Gilroy',
        fontSize: 10,
        fontWeight: '500',
        color: '#00C458',
        marginTop: 5,
        marginLeft: 5
    },
    view3: {
        width: 318,
        height: 115,
        borderWidth: 1,
        backgroundColor: "#FFFFFF",
        marginLeft: 32,
        marginRight: 32,
        borderColor: '#EEEEEE',
        shadowColor: '#EEEEEE',
        marginTop: -15,
        borderRadius: 8
    },
    txt1: {
        fontFamily: 'Gilroy',
        fontWeight: '700',
        fontSize: 18,
        color: '#002333',
        marginTop: 20,
        marginLeft: 20
    },
    chapterstxt1: {
        fontFamily: 'Gilroy',
        fontSize: 10,
        fontWeight: '500',
        color: '#9F9F9F',
        marginTop: 5,
        marginLeft: 5
    },
    view4: {
        width: 318,
        height: 115,
        borderWidth: 1,
        backgroundColor: "#FFFFFF",
        marginLeft: 32,
        marginRight: 32,
        borderColor: '#EEEEEE',
        shadowColor: '#EEEEEE',
        marginTop: 10,
        borderRadius: 8
    },
})