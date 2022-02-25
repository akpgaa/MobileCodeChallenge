
import { Text, StyleSheet, Modal, View, SafeAreaView, ScrollView, Image, KeyboardAvoidingView, Switch, FlatList, TouchableOpacity, TextInput, Dimensions, ActivityIndicator, } from 'react-native'
import React, { Component } from 'react'
import User from './Assets/user.png';
import Back from './Assets/back.png';
import Car from './Assets/pickup-car.png';
import Aspire from './Assets/aspire.png'
import { Toast } from './Components/Toast';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export default class SpendingLimit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            disabled: true,
        }
    }
    onChangeText = (e) => {
        this.setState({ text: e })
    }
    render() {
        let { text, disabled } = this.state;

        return (
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ flex: 1, }}
            >
                <SafeAreaView style={{ flex: 1, backgroundColor: "#0C365A" }}>
                    <ScrollView style={{ flex: 1, flexDirection: 'row' }} horizontal={false} >
                        <View style={{ flex: 1, ...styles.spacing, padding: 24, marginBottom: 50, }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', maxHeight: 35 }}>
                                <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row-reverse', alignItems: 'center', }}>
                                    <TouchableOpacity style={{}}>
                                        <Image source={Aspire} style={{ width: 25, height: 25, resizeMode: 'contain', }} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ flex: 10, }} onPress={this.props.LimitScreen}>
                                        <Image source={Back} style={{ width: 25, height: 25, resizeMode: 'contain', }} />
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <Text style={{ ...styles.heading, paddingVertical: 20 }}>Spending Limit</Text>
                        </View>


                        <View style={{ flex: 4, ...styles.spacing, backgroundColor: "#FFFFFF", borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 24 }}>
                            <View style={{ flex: 2 }} >
                                <View style={{ flexDirection: 'row', paddingVertical: 10 }} >
                                    <Image source={Car} style={{ width: 20, height: 20, resizeMode: 'contain', }} />
                                    <Text style={{ fontSize: 14, }}>  Set a weekly debit card spending limit</Text>
                                </View>
                                <View style={{ ...styles.spacing, flexDirection: 'row' }}>
                                    <TouchableOpacity style={{ flex: 1, ...styles.center, backgroundColor: '#01D167', borderRadius: 5, }}>
                                        <Text style={{ ...styles.textButton, color: '#FFFFFF' }}>  S$  </Text>
                                    </TouchableOpacity>
                                    {/* <Text style={{ ...styles.heading, }}>   3,000 </Text> */}
                                    <TextInput
                                        style={{ flex: 10, fontSize: 30, fontWeight: 'bold', }}
                                        onChangeText={this.onChangeText}
                                        value={text}
                                        keyboardType='number-pad'
                                    />
                                </View>
                                <View
                                    style={{
                                        borderBottomColor: '#E5E5E5',
                                        borderBottomWidth: 1,
                                    }}
                                />
                                <Text style={{ fontSize: 13, paddingVertical: 10, color: '#22222266' }}>Here weekly means the last 7 days - not the calendar week</Text>
                                <View style={{ padding: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <TouchableOpacity style={{ ...styles.center, marginHorizontal: 5, backgroundColor: '#deffe7', padding: 5, borderRadius: 5 }}
                                        onPress={() => {
                                            this.onChangeText('5000')
                                        }}
                                    >
                                        <Text style={{ ...styles.textButton, color: '#01D167' }}>S$ 5,000</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ ...styles.center, marginHorizontal: 5, backgroundColor: '#deffe7', padding: 5, borderRadius: 5 }}
                                        onPress={() => {
                                            this.onChangeText('10000')
                                        }}
                                    >
                                        <Text style={{ ...styles.textButton, color: '#01D167' }}>S$ 10,000</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ ...styles.center, marginHorizontal: 5, backgroundColor: '#deffe7', padding: 5, borderRadius: 5 }}
                                        onPress={() => {
                                            this.onChangeText('20000')
                                        }}
                                    >
                                        <Text style={{ ...styles.textButton, color: '#01D167' }}>S$ 20,000</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{ flex: 1, alignSelf: 'stretch' }}>
                                {disabled ?
                                    <TouchableOpacity style={{ ...styles.center, marginHorizontal: 15, backgroundColor: text ? '#01D167' : '#0000001F', padding: 15, borderRadius: 30 }}
                                        onPress={() => {
                                            if (text) {
                                                this.setState({ disabled: false })
                                                this.props.SaveSpend(text)
                                            } else {
                                                Toast('Enter Some Limit', 3)
                                            }
                                        }}

                                        activeOpacity={1}>
                                        <Text style={{ ...styles.textButton, color: text ? '#FFFFFF' : '' }}>Save</Text>
                                    </TouchableOpacity>
                                    :
                                    <ActivityIndicator size={50} color="#01D167" />
                                }
                            </View>
                        </View>

                    </ScrollView>
                </SafeAreaView >
            </KeyboardAvoidingView >
        )
    }
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
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    heading: {
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: 'bold',
        lineHeight: 32,
        // letterSpacing: 0.05,
    },
    show: {
        color: '#01D167',
        fontSize: 12,
        fontWeight: 'bold',
        lineHeight: 20,
        // letterSpacing: 0.05,
    },

})
