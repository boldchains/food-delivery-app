import React from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView, Image, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import styles from './styles';

import BackButton from '../../../components/backButton';
import Header from '../../../components/headerText';
import InputField from '../../../components/textInput';
import Button from '../../../components/button';

export default class AddPayment extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            default: true
        }
    }

    continueFunc = () => {
        this.props.navigation.navigate("Tab");
    }

    render() {
        return (
            <SafeAreaView style={styles.safeAreaContainer}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : null}
                    style={styles.container}>
                    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                        <View style={styles.container}>
                            <View style={styles.headerContainer}>
                                <BackButton navigation={this.props.navigation} />
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate("Tab")}
                                    style={styles.skipButton}>
                                    <Text style={styles.skipButtonText}>SKIP</Text>
                                </TouchableOpacity>
                            </View>
                            <Header title="Add New Payment" />
                            <View style={[styles.inputContainer, { marginTop: 41 }]}>
                                <InputField placeholder="Name on card" />
                            </View>
                            <View style={[styles.inputContainer, { justifyContent: "center" }]}>
                                <InputField placeholder="Card number" type="number-pad" max={16} />
                                <View style={styles.cvvIcon}>
                                    <Image
                                        style={styles.masterCardIcon}
                                        source={require("../../../../assets/icons/mastercard.png")} />
                                </View>
                            </View>
                            <View style={styles.inputContainer}>
                                <InputField placeholder="Expire Date" type="number-pad" max={4} />
                            </View>
                            <View style={[styles.inputContainer, { justifyContent: "center" }]}>
                                <InputField placeholder="CVV" type="number-pad" max={3} />
                                <View style={styles.cvvIcon}>
                                    <EvilIcons name="question" size={35} color={"#DADADA"} />
                                </View>
                            </View>
                            <TouchableOpacity
                                onPress={() => this.setState({ default: !this.state.default })}
                                style={styles.rowContainer}>
                                <View style={styles.defaultMiniContainer}>
                                    {this.state.default ?
                                        <MaterialIcons name="done" size={20} color={"white"} /> : null}
                                </View>
                                <Text style={styles.defaultText}>Set as default payment method</Text>
                            </TouchableOpacity>
                            <Button blue={true} title="ADD AND CONTINUE" func={this.continueFunc} />
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}