import { Dimensions, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { Component } from 'react';

export default class User extends Component {

    state ={ imageUrl : null}
    
    constructor(props) {
        super(props)
        let imgUrl = props.image ? {uri : this.props.image} :  require('../picture/company_logo.png');
        this.state = { imageUrl : imgUrl}
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.avatar}
                    source={this.state.imageUrl}
                />
                <Text style={styles.textStyle}>
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
        margin: 10

    },
    avatar: {
        width: 100, height: 100,
        margin: 10,
        resizeMode :  'contain'
    },
    textStyle: {
        fontSize: 14,
        marginLeft : 10,
        color : 'red'
    }
}