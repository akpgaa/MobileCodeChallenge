
import { Text, StyleSheet, Modal, View, SafeAreaView, ScrollView, Image, Switch, FlatList, TouchableOpacity, TextInput, Dimensions, } from 'react-native'
import React from 'react'
import Insight from './Assets/Insight.png';
import Visa from './Assets/visa.png';
import Aspire from './Assets/AspireLogo.png';

export default function Card(props) {
    var codes = [4422, 4442, 2222]
    return (
        <SafeAreaView style={{ backgroundColor: "#01D167", height: 220, borderRadius: 10, }}>
            <View style={{ ...styles.spacing, padding: 24, marginBottom: 50, }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', maxHeight: 35 }}>
                    <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row-reverse', alignItems: 'center', }}>
                        <Image source={Aspire} style={{ width: 74, height: 21, resizeMode: 'contain', }} />
                    </View>
                </View>
                <Text style={{ ...styles.heading, }}>Mark Henry</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 15, maxHeight: 35 }}>
                    {codes.map((ival) => (
                        props.isShow ?
                            <Text style={{ ...styles.card, flex: 2 }}>2202</Text>
                            :
                            <Text style={{ ...styles.card, flex: 2 }}>&#11044;&#11044;&#11044;&#11044;</Text>
                    ))}
                    <Text style={{ ...styles.card, flex: 2 }}>2202</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5, maxHeight: 35 }}>
                    <Text style={{ ...styles.card1, flex: 1 }}>Thru: 12/20</Text>
                    <Text style={{ ...styles.card1, flex: 1 }}>CVV: {props.isShow ? 456 : "***"}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', maxHeight: 35 }}>
                    <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row-reverse', alignItems: 'center', }}>
                        <Image source={Visa} style={{ width: 59, height: 20, resizeMode: 'contain', }} />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}




const styles = StyleSheet.create({
    spacing: {
        marginVertical: 5
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 12,
        color: '#848484',
        textAlign: 'center'
    },
    textButton: {
        fontSize: 10,
        fontWeight: 'bold'
    },
    heading: {
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: 'bold',
        lineHeight: 32,
        // letterSpacing: 0.05,
    },
    card: {
        color: '#FFFFFF',
        fontSize: 14,
        // fontWeight: 'bold',
        lineHeight: 19,
        letterSpacing: 3.16,
    },
    card1: {
        color: '#FFFFFF',
        fontSize: 13,
        // fontWeight: 'bold',
        lineHeight: 24,
        letterSpacing: 1.56,
    },
})
