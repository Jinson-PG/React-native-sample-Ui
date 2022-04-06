import React, { Component } from 'react'
import { View, StyleSheet, Image,Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class Videos extends Component {
    render() {
        return (
            <View style={styles.container}>

                <ScrollView style={styles.scrollview}>
                    <View style={styles.view2}
                    >
                        <Image
                            source={require('../assets/teaching.png')}
                            style={styles.image}>

                        </Image>
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

                    <View style={styles.view3}
                    >
                        <Image
                            source={require('../assets/lect.png')}
                            style={styles.image}>

                        </Image>
                        <Text style={styles.txt1} >
                        Long chapter name can be shown here.
                    </Text>
                    <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 12 }}>
                        <Icon style={{ marginTop: 5 }} name="radio-button-checked" size={15} color='#9F9F9F' />
                        <Text style={styles.chapterstxt1}>
                        Chapter 2
                        </Text>
                        <Icon style={{ marginTop: 5, marginLeft: 30 }} name="radio-button-checked" size={15} color='#9F9F9F' />
                        <Text style={styles.chapterstxt1}>
                        5 parts
                        </Text>
                    </View >
                    
                    </View>

                    <View style={styles.view3}
                    >
                        <Image
                            source={require('../assets/teaching.png')}
                            style={styles.image}>

                        </Image>
                        <Text style={styles.txt1} >
                        Long chapter name can be shown here.
                    </Text>
                    <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 12 }}>
                        <Icon style={{ marginTop: 5 }} name="radio-button-checked" size={15} color='#9F9F9F' />
                        <Text style={styles.chapterstxt1}>
                        Chapter 3
                        </Text>
                        <Icon style={{ marginTop: 5, marginLeft: 30 }} name="radio-button-checked" size={15} color='#9F9F9F' />
                        <Text style={styles.chapterstxt1}>
                        4 parts
                        </Text>
                    </View >
                    
                    </View>

                </ScrollView>
            </View>


        )
    }
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#F9F8F8',
    },
    scrollview: {
        width: 350,
        height: '100%',
        backgroundColor: '#F9F8F8',
    },
    view2: {
        width: 315,
        height: 250,
        backgroundColor: '#FFF',
        marginLeft: 33,
        marginTop: 10,
        borderRadius:15
    },
    view3: {
        width: 315,
        height: 250,
        backgroundColor: '#FFF',
        marginLeft: 33,
        marginTop: 15,
        borderRadius:15
    },
    image: {
       width:"100%",
       height:150,     
    },
    txt1: {
        fontFamily: 'Gilroy',
        fontWeight: '700',
        fontSize: 18,
        color: '#002333',
        marginTop: 15,
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
})