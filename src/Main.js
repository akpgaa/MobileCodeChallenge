
import { Text, StyleSheet, Modal, View, SafeAreaView, ScrollView, Image, Switch, TouchableOpacity, } from 'react-native'
import React, { Component } from 'react'
import User from './Assets/user.png';
import Insight from './Assets/Insight.png';
import Transfer2 from './Assets/Transfer2.png';
import Transfer3 from './Assets/Transfer3.png';
import Transfer from './Assets/Transfer.png';
import Transfer1 from './Assets/Transfer1.png';
import Aspire from './Assets/aspire.png'
import Card from './Card';
import Progressbar from './Components/Progres';


export default class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                { id: 1, name: 'Top-up account', info: "Deposit money to your account to use with cardt", icon: Insight },
                { id: 2, name: 'Weekly spending limit', info: `Your weekly spending limit is`, limit: this.props.SpendLimit, icon: Transfer, isChecked: this.props.isChecked, func: this.toggleSwitch, isToogle: true },
                { id: 3, name: 'Freeze card', info: "Your debit card is currently active", icon: Transfer3, isChecked: false, func: this.toggleSwitch, isToogle: true },
                { id: 4, name: 'Get a new card', info: "This deactivates your current debit card", icon: Transfer1 },
                { id: 5, name: 'Deactivated cards', info: "Your previously deactivated cards", icon: Transfer2 },
            ],
            isEnabled: false,
            isShow: false,
            Limit: this.props.Limit
        }
    }

    toggleSwitch = (ival, i) => {
        let { data } = this.state;
        if (ival.id == 2) {
            if (this.props.isChecked) {
                this.props.removeChecked()
                data[i].isChecked = false
                this.setState({ data })
            } else {
                this.props.LimitScreen()
            }
        } else {
            data[i].isChecked = !data[i].isChecked
            this.setState({ data })

        }
    }
    HandleClick = () => {
        this.setState({ isShow: !this.state.isShow })
    }
    render() {
        let { data, isEnabled, isShow, Limit } = this.state;

        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: "#0C365A" }}>
                <ScrollView style={{ flex: 1 }} horizontal={false} >
                    <View style={{ ...styles.spacing, padding: 24, marginBottom: 50, }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', maxHeight: 35 }}>
                            <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row-reverse', alignItems: 'center', }}>
                                <Image source={Aspire} style={{ width: 25, height: 25, resizeMode: 'contain', }} />
                            </View>
                        </View>
                        <Text style={{ ...styles.heading, }}>Debit Card</Text>
                        <View style={{ marginVertical: 20 }}>
                            <View style={{ flex: 1 }}>
                                <Text style={{ color: '#FFFFFF', fontSize: 14, lineHeight: 16, textAlign: 'left' }}>Available balance</Text>
                            </View>
                            <View style={{ flex: 1, ...styles.spacing, flexDirection: 'row' }}>
                                <TouchableOpacity style={{ ...styles.center, marginVertical: 3, backgroundColor: '#01D167', paddingHorizontal: 8, borderRadius: 5 }}>
                                    <Text style={{ ...styles.textButton, color: '#FFFFFF' }}>  S$  </Text>
                                </TouchableOpacity>
                                <Text style={{ ...styles.heading, }}>   3,000 </Text>
                            </View>
                        </View>
                    </View>


                    <View style={{ ...styles.spacing, backgroundColor: "#FFFFFF", borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 24 }}>
                        <View style={{ ...styles.spacing, padding: 5, top: -100, }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', maxHeight: 35, top: 6 }} >
                                <View style={{ flex: 5, }} />
                                <TouchableOpacity onPress={this.HandleClick} style={{ flex: 4, padding: 5, alignSelf: 'stretch', flexDirection: 'row-reverse', alignItems: 'center', backgroundColor: 'white', borderTopLeftRadius: 6, borderTopRightRadius: 6, }}>
                                    <Text style={{ flex: 8, ...styles.show, }}> {isShow ? 'Hide' : 'Show'} card number </Text>
                                    <Image source={User} style={{ flex: 2, width: 15, height: 15, resizeMode: 'contain', }} />
                                </TouchableOpacity>
                            </View>
                            <Card isShow={isShow} />
                        </View>
                        <View style={{ flex: 1, top: -100 }}>
                            {
                                this.props.isChecked ?
                                    <View style={{ flex: 1 }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={{ flex: 1, fontSize: 14, color: '#222222', textAlign: 'left', fontWeight: '500' }}>Debit card spending limit</Text>
                                            <Text style={{ fontSize: 13, color: '#01D167', textAlign: 'left' }}>${Limit} | </Text>
                                            <Text style={{ fontSize: 13, color: '#22222233', textAlign: 'left' }}>${this.props.SpendLimit}</Text>
                                        </View>
                                        <View style={{ paddingVertical: 10, }}>
                                            <Progressbar {...this.props} />
                                        </View>
                                    </View>
                                    : null
                            }

                            {
                                data.map((ival, i) => (
                                    <TouchableOpacity style={{ flex: 1, flexDirection: 'row', marginVertical: 10, minHeight: 50 }} onPress={() => ival.func ? ival.func(ival, i) : null}>
                                        <View style={{ flex: 1, }}>
                                            <Image source={ival.icon} style={{ width: 32, height: 32, resizeMode: 'contain', }} />
                                        </View>
                                        <View style={{ flex: 8, }}>
                                            <Text style={{ fontSize: 14, color: '#25345F', textAlign: 'left', fontWeight: '500' }}> {ival.name}</Text>
                                            <Text style={{ fontSize: 13, color: '#5c5c5c', textAlign: 'left' }}> {ival.info} {ival.limit}</Text>
                                        </View>
                                        <View style={{ flex: 1, }}>
                                            {ival.isToogle ?
                                                <Switch
                                                    trackColor={{ false: "#EEEEEE", true: "#01D167" }}
                                                    thumbColor={isEnabled ? "#01D167" : "#EEEEEE"}
                                                    ios_backgroundColor="#3e3e3e"
                                                    style={{}}
                                                    onValueChange={() => ival.func(ival, i)}
                                                    value={ival.isChecked}
                                                /> : null}
                                        </View>
                                    </TouchableOpacity>
                                ))
                            }
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView >
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
    show: {
        color: '#01D167',
        fontSize: 12,
        fontWeight: 'bold',
        lineHeight: 20,
        // letterSpacing: 0.05,
    },

})
