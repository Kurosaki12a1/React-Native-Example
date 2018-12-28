import React, { Component } from 'react';
import { View  , TextInput} from 'react-native';
import Button from './common/Button';
import Card from './common/Card';
import CardSection from './common/CardSection';
export default class LoginForm extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                    <TextInput style={{ height: 20, width: 20 }} />
                </CardSection>
                <CardSection>
                    <Button>
                        Login
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

