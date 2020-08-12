import React from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView, TouchableOpacity, Image } from 'react-native';

import styles from './styles';

import BackButton from '../../../components/backButton';
import Header from '../../../components/headerText';
import InputField from '../../../components/textInput';
import Button from '../../../components/button';

export default class SignIn extends React.Component {

    loginFunc = () => {
        this.props.navigation.navigate("Tab");
    }

    render() {
        return (
            <SafeAreaView style={styles.safeAreaContainer}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : null}
                    style={styles.container}>
                    <View style={styles.container}>
                        <ScrollView
                            contentContainerStyle={styles.scrollViewContainer}>
                            <View style={{ flex: 1, justifyContent: "space-between" }}>
                                <View >
                                    <BackButton navigation={this.props.navigation} />
                                    <Header title="Sign in" />
                                    <View style={[styles.inputContainer, { marginTop: 63 }]}>
                                        <InputField placeholder="Email" />
                                    </View>
                                    <View style={styles.inputContainer}>
                                        <InputField placeholder="Password" />
                                    </View>
                                    <TouchableOpacity
                                        onPress={() => this.props.navigation.navigate("ForgotPassword")}
                                        style={styles.forgotPasswordButton}>
                                        <Text style={styles.forgotPasswordButtonText}>Forgot your password?</Text>
                                    </TouchableOpacity>
                                    <Button blue={true} title="SIGN IN" func={this.loginFunc} />
                                </View>
                                <View style={styles.socialLoginContainer}>
                                    <Text style={styles.forgotPasswordButtonText}>Or sign in with social account</Text>
                                    <View style={styles.rowContainer}>
                                        <View style={[styles.socialButtonContainer, { marginRight: 16 }]}>
                                            <Image
                                                style={styles.socialButtonIcon}
                                                source={require("../../../../assets/icons/googleIcon.png")} />
                                        </View>
                                        <View style={styles.socialButtonContainer}>
                                            <Image
                                                style={styles.socialButtonIcon}
                                                source={require("../../../../assets/icons/facebookIcon.png")} />
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}