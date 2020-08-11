import React from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

import styles from './styles';

import Header from '../../../components/headerText';
import Button from '../../../components/button';

export default class SignUp extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <SafeAreaView style={styles.safeAreaContainer}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : null}
                    style={styles.container}>
                    <View style={styles.container}>
                        <ScrollView
                            scrollEnabled={false}
                            contentContainerStyle={styles.scrollViewContainer}>
                            <View style={styles.headerContainer}>
                                <Header title="Welcome to DeliverEaze" />
                            </View>
                            <Button blue={false} title="SIGN IN" />
                            <View style={styles.buttonContainer}>
                                <Button blue={true} title="GET STARTED" />
                            </View>
                        </ScrollView>
                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}