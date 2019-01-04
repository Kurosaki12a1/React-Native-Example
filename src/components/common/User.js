import { Dimensions, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { Component } from 'react';
import Card from './Card';
import CardSecton from './CardSection';
export default class User extends Component {
    constructor(props) {
        super(props)
        console.log(this.props.image)
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
        borderRadius:10,
        borderWidth:0.5,
        borderColor:'#000000',
        margin:10
    },

    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    avatar: {
        width: 100, height: 100,
        margin:10
    }
}