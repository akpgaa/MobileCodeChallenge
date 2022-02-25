import React, { Component } from 'react';
import { Animated, StyleSheet, Text, View, } from 'react-native';


class Progressbar extends Component {
    render() {
        let { } = this.props
        return (
            <View style={styles.progressBar}>
                <Animated.View style={[StyleSheet.absoluteFill], { backgroundColor: "#01D167", width: `${this.props.Percent}%`, borderRadius: 15 }} />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    progressBar: {
        height: 15,
        flexDirection: "row",
        width: '100%',
        backgroundColor: '#deffe7',
        // borderColor: 'transaparent',
        // borderWidth: 1,
        // borderRadius: 15
    }
});
export default Progressbar