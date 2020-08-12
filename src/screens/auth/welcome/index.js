import React from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView, Image } from 'react-native';

import styles from './styles';

import BackButton from '../../../components/backButton';
import Header from '../../../components/headerText';
import InputField from '../../../components/textInput';
import Button from '../../../components/button';

export default class Welcome extends React.Component {

    signUpFunc = () => {
        this.props.navigation.navigate("AddPayment");
    }

    render() {
        return (
            <SafeAreaView style={styles.safeAreaContainer}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : null}
                    style={styles.container}>
                    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                        <View style={styles.container}>
                            <BackButton navigation={this.props.navigation} />
                            <Header title="Sign up" />
                            <View style={[styles.inputContainer, { marginTop: 63 }]}>
                                <InputField placeholder="Name" />
                            </View>
                            <View style={styles.inputContainer}>
                                <InputField placeholder="Email" />
                            </View>
                            <View style={styles.inputContainer}>
                                <InputField placeholder="Phone" />
                            </View>
                            <View style={styles.inputContainer}>
                                <InputField placeholder="Password" secure={true} />
                            </View>
                            <View style={styles.inputContainer}>
                                <InputField placeholder="Confirm Password" secure={true} />
                            </View>
                            <Button blue={true} title="SIGN UP" func={this.signUpFunc} />
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
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}