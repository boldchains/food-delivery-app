import React from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';

import BackButton from '../../../../components/backButton';
import Header from '../../../../components/headerText';
import Button from '../../../../components/button';

export default class Payment extends React.Component {

    successFunc = () => {
        this.props.navigation.navigate("Success");
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
                            <Header title="Payment" />
                            <Image
                                style={styles.mainImage}
                                source={require("../../../../../assets/images/slika3.png")} />
                            <Text style={[styles.blackText, { fontSize: 16, marginTop: 32 }]}>Delivery Details</Text>
                            <View style={styles.rowContainerModifier}>
                                <Text style={styles.greyText}>Bag Total:</Text>
                                <Text style={styles.blackText}>$18.22</Text>
                            </View>
                            <View style={styles.rowContainerModifier}>
                                <Text style={styles.greyText}>Drop Off Time:</Text>
                                <Text style={styles.blackText}>11.30 PM</Text>
                            </View>
                            <View style={styles.rowContainerModifier}>
                                <Text style={styles.greyText}>Drop Off Location:</Text>
                                <Text style={styles.blackText}>Lowes-Boulevard Plaza</Text>
                            </View>
                            <Text style={[styles.blackText, { fontSize: 16, marginTop: 32 }]}>Payment</Text>
                            <View style={styles.rowContainerModifier}>
                                <Text style={styles.greyText}>Payment method:</Text>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <Image
                                        style={styles.masterCardIcon}
                                        source={require("../../../../../assets/icons/mastercard.png")} />
                                    <Text style={styles.blackText}>**** **** **** 3947</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 39 }}>
                                <Text style={styles.greyText}>Add payment method:</Text>
                                <TouchableOpacity style={styles.addPaymentMethod}>
                                    <Ionicons name="add-circle-sharp" size={27} color={"#333333"} />
                                </TouchableOpacity>
                            </View>
                            <Button blue={true} title="PLACE ORDER $18.22" func={this.successFunc} />
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}