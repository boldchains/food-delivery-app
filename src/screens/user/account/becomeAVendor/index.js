import React from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';

import styles from './styles';

import BackButton from '../../../../components/backButton';
import Header from '../../../../components/headerText';
import Button from '../../../../components/button';
import InputField from '../../../../components/textInput';

export default class BecomeAVendor extends React.Component {

    render() {
        return (
            <SafeAreaView style={styles.safeAreaContainer}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : null}
                    style={styles.container}>
                    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                        <View style={styles.container}>
                            <View style={{ flex: 1, marginBottom: 20 }}>
                                <BackButton navigation={this.props.navigation} />
                                <Header title="Become A Vendor" />

                                <View style={styles.inputContainer}>
                                    <InputField placeholder="Restaurant Name" />
                                </View>
                                <View style={styles.inputContainer}>
                                    <InputField placeholder="Address" />
                                </View>
                                <View style={{ flexDirection: "row" }}>
                                    <View style={[styles.inputContainer, { flex: 1, marginRight: 16 }]}>
                                        <InputField placeholder="City" />
                                    </View>
                                    <View style={[styles.inputContainer, { flex: 1, marginRight: 16 }]}>
                                        <InputField placeholder="State" />
                                    </View>
                                    <View style={[styles.inputContainer, { flex: 1 }]}>
                                        <InputField placeholder="ZIP" type="number-pad" max={5} />
                                    </View>
                                </View>
                                <View style={{ flexDirection: "row" }}>
                                    <View style={[styles.inputContainer, { flex: 1, marginRight: 16 }]}>
                                        <InputField placeholder="Phone" type="number-pad" />
                                    </View>
                                    <View style={[styles.inputContainer, { flex: 1 }]}>
                                        <InputField placeholder="Number of Locations" type="number-pad" />
                                    </View>
                                </View>
                            </View>

                            <Button blue={true} title="SUBMIT" />
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}