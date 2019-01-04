import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import Button from './common/Button';
import Card from './common/Card';
import CardSection from './common/CardSection';
import firebase from '@firebase/app';
import Header from './common/Header';

export default class LoginForm extends React.Component {
    state = { email: 'test@gmail.com', password: '123456', errorMessage: null }

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

    handleLogin = () => {
        const { email, password } = this.state
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => this.props.navigation.navigate('Screen_MainScreen'))
            .catch(error => this.setState({ errorMessage: error.message }))

    }

    render() {
        return (
            <Card>
                <View>
                    <Header headerText={"Authentication Firebase New"} />
                </View>
                <CardSection
                    style={styles.container}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Email"
                        autoCapitalize="none"
                        onChangeText={email => this.setState({ email })}
                        value={this.state.email}
                    />

                </CardSection>
                <CardSection
                    style={styles.container}>
                    <TextInput
                        secureTextEntry={true}
                        style={styles.textInput}
                        placeholder="Password"
                        autoCapitalize="none"
                        onChangeText={password => this.setState({ password })}
                        value={this.state.password}
                    />
                </CardSection>

                <CardSection>
                    <Button
                        onPress={() => this.handleLogin()}>
                        Login
                    </Button>
                    <Text style={styles.errorTextStyle}>{this.state.errorMessage}</Text>
                </CardSection>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        height: 40,
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        alignSelf: 'center',

    },
    errorTextStyle: {
        color: '#E64A19',
        alignSelf: 'center',
        paddingTop: 10,
        paddingBottom: 10
    }
})

