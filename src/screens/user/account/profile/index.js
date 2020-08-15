import React from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView, ScrollView, Platform, Image } from 'react-native';

import styles from './styles';

import BackButton from '../../../../components/backButton';
import Header from '../../../../components/headerText';
import TextInput from '../../../../components/textInput';
import Button from '../../../../components/button';

export default class Profile extends React.Component {

    render() {
        return (
            <SafeAreaView style={styles.safeAreaContainer}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : null}
                    style={styles.container}>
                    <ScrollView contentContainerStyle={styles.scrollViewContaier}>
                        <View style={styles.container}>
                            <BackButton navigation={this.props.navigation} />
                            <View style={styles.userInfoContainer}>
                                <Image
                                    style={styles.avatarIcon}
                                    source={require("../../../../../assets/icons/avatarIcon.png")} />
                                <Header title="Jeep Worker" />
                            </View>
                            <View style={styles.inputFieldContainer}>
                                <TextInput placeholder="Full Name" />
                            </View>
                            <View style={styles.inputFieldContainer}>
                                <TextInput placeholder="Phone Number" />
                            </View>
                            <View style={styles.inputFieldContainer}>
                                <TextInput placeholder="Email Address" />
                            </View>
                            <View style={[styles.inputFieldContainer, { marginBottom: 40 }]}>
                                <TextInput placeholder="Password" />
                            </View>

                            <Button blue={true} title="SAVE" />
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}