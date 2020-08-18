import React from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView, ScrollView, Platform, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';

import BackButton from '../../../../../components/backButton';
import Header from '../../../../../components/headerText';
import Button from '../../../../../components/button';
import InputField from '../../../../../components/textInput';

export default class BecomeAVendor extends React.Component {

    continueFunc = () => {
        this.props.navigation.goBack();
    }

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
                                <Header title="Address" />

                                <Text style={styles.boldText}>Work</Text>
                                <View style={styles.inputContainer}>
                                    <InputField placeholder="Work Address" />
                                </View>
                                <View style={styles.inputContainer}>
                                    <InputField placeholder="Address1" />
                                </View>
                                <View style={styles.inputContainer}>
                                    <InputField placeholder="Address2" />
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
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate("AddAddresses")}
                                    style={styles.rowContainer}>
                                    <Ionicons name="add-circle" size={30} color={"#1A2D5A"} />
                                    <Text style={styles.boldText2}>Add another</Text>
                                </TouchableOpacity>
                            </View>

                            <Button blue={true} title="CONTINUE" func={this.continueFunc} />
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}