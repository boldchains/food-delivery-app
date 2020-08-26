import React from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView, Platform, Image } from 'react-native';

import styles from './styles';
import Button from '../../../components/button';

export default class SignUp extends React.Component {

    constructor(props) {
        super(props);
    }

    signInFunc = () => {
        this.props.navigation.navigate("SignIn");
    }

    signUpFunc = () => {
        this.props.navigation.navigate("Welcome");
    }

    render() {
        return (
            <SafeAreaView style={styles.safeAreaContainer}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : null}
                    style={styles.container}>
                    <View style={styles.container}>
                        <View style={styles.headerContainer}>
                            <Text style={styles.headerText}>Welcome to</Text>
                            <Image
                                style={styles.welcomeLogo}
                                source={require("../../../../assets/icons/welcomeLogo.png")} />
                        </View>
                        <Button blue={false} title="SIGN IN" func={this.signInFunc} />
                        <View style={styles.buttonContainer}>
                            <Button blue={true} title="GET STARTED" func={this.signUpFunc} />
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}