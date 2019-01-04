import { Dimensions, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { Component } from 'react';
import { PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator } from 'rn-viewpager';
export default class User extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.avatar}
                    source={{ uri: this.props.image }}
                />
                <Text>
                    {this.props.text}
                </Text>
            </View>
        );
    }
}

const styles = {
    container: {
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: '#000000',
        padding: 10
    },
    avatar: {
        width: 100, height: 100,
        margin: 10
    }
}