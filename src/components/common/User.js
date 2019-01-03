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
            <Card>
                <CardSecton>
                    <Image
                        style={styles.imgParentalStyle}
                        source={{ uri: this.props.image }}
                    />
                </CardSecton>

            </Card>
        );
    }
}

const styles = {
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
    imgParentalStyle: {
        position: "absolute",
        top: 5,
        left: 5,
    }
}