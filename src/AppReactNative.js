/*
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from './components/common/Header';
import firebase from 'firebase';
*/
import LoginForm from "./components/LoginForm";
import { SwitchNavigator, createStackNavigator } from 'react-navigation';
import MainScreen from './components/common/MainScreen';
/*
const AppReactNative = SwitchNavigator(
    {
        LoginForm,
        MainScreen
    },
    {
        initialRouteName: 'LoginForm'
    }

)
*/

const AppReactNative = createStackNavigator({
    Screen_LoginForm: {
        screen: LoginForm,
        navigationOptions: {
            header: null
        }
    },

    Screen_MainScreen: {
        screen: MainScreen,
        navigationOptions: {
            header: null
        }
    }
})

export default AppReactNative;

/*
export default class AppReactNative extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyB_h5E2Bd2io5h5If2xqT2yGxRBQbnLrzc",
            authDomain: "learnreactnative-c6d77.firebaseapp.com",
            databaseURL: "https://learnreactnative-c6d77.firebaseio.com",
            projectId: "learnreactnative-c6d77",
            storageBucket: "learnreactnative-c6d77.appspot.com",
            messagingSenderId: "829438081904"
        });
    }


    render() {
        return (
            <View>
                <Header headerText={"Authentication"} />
                <LoginForm />

            </View>
        );
    }
}
*/