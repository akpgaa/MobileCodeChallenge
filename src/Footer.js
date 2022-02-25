import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import User from './Assets/user.png';
import Debit from './Assets/Debit.png';
import Pay from './Assets/Payments.png';
export default class Footer extends Component {
    constructor(props) {
        super(props);
    }
    goto = here => {
        if (this.props.selected !== here) {
            this.props.goto(here);
        }
    }
    render() {
        let active = this.props.selected;
        return (
            <View style={{ position: 'absolute', bottom: 0, width: '100%', flexDirection: 'row', backgroundColor: '#FFF', paddingBottom: 5, paddingTop: 5, height: 60 }}>
                <TouchableOpacity style={{ flex: 1, ...Style.center }} activeOpacity={1}>
                    <Image source={User} style={{ resizeMode: 'contain', height: 20 }} />
                    <Text style={{ ...Style.text, color: '#D0D3DD' }}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ flex: 1, ...Style.center }} activeOpacity={1}>
                    <Image source={Debit} style={{ resizeMode: 'contain', height: 20 }} />
                    <Text style={{ ...Style.text, color: '#1E1E1E' }}>Debit Card</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ flex: 1, ...Style.center }} activeOpacity={1}>
                    <Image source={Pay} style={{ resizeMode: 'contain', height: 20 }} />
                    <Text style={{ ...Style.text, color: '#D0D3DD' }}>Payments</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ flex: 1, ...Style.center }} activeOpacity={1}>
                    <Image source={User} style={{ resizeMode: 'contain', height: 20 }} />
                    <Text style={{ ...Style.text, color: '#D0D3DD' }}>Credit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1, ...Style.center }} activeOpacity={1}>
                    <Image source={User} style={{ resizeMode: 'contain', height: 20 }} />
                    <Text style={{ ...Style.text, color: '#D0D3DD' }}>Profile</Text>
                </TouchableOpacity>
            </View>
        );
    }
};
const Style = StyleSheet.create({
    text: {
        fontSize: 10,
        fontWeight: 'bold'
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
})