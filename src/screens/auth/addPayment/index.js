import React from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView, Image, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { connect } from 'react-redux';

import styles from './styles';

import Header from '../../../components/headerText';
import InputField from '../../../components/textInput';
import Button from '../../../components/button';

import PaymentService from '../../../services/PaymentServices';

import { CARD_NAME_ERROR, CARD_NUMBER_ERROR, EXPIRE_DATE_ERROR, CVV_ERROR, INVALID_CARD_NUMBER, INVALID_CVV_NUMBER } from '../../../config/errorMessages';

class AddPayment extends React.Component {

    paymentService = new PaymentService();

    constructor(props) {
        super(props);

        this.state = {
            default: true,
            loading: false,
            addPaymentPressed: false
        }
    }

    continueFunc = () => {
        this.props.navigation.navigate("Tab");
    }

    addPayment = () => {
        this.setState({ loading: true, addPaymentPressed: true }, () => {
            if (this.props.auth.cardName.length > 0 &&
                this.props.auth.cardNumber.length === 16 &&
                this.props.auth.cvv.length === 3 &&
                this.props.auth.expired_date.length === 4
            ) {

                const card = {
                    expired_date: this.props.auth.expired_date,
                    cvv: this.props.auth.cvv,
                    account_name: this.props.auth.cardName,
                    card_number: this.props.auth.cardNumber
                }

                this.paymentService.addCard(card).then(res => {
                    console.log("uspesno smo dodali karticu!");
                    this.setState({ loading: false }, () => {
                        this.props.navigation.navigate("Tab");
                    });
                }, error => {
                    console.log("Desila se greska prilikom dodavanja kartice! ", error);
                    this.setState({ loading: false });
                });

            } else {
                console.log("validacija nije prosla");
                this.setState({ loading: false });
            }
        });
    }

    render() {
        return (
            <SafeAreaView style={styles.safeAreaContainer}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : null}
                    style={styles.container}>
                    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                        <View style={styles.container}>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate("Tab")}
                                style={styles.skipButton}>
                                <Text style={styles.skipButtonText}>SKIP</Text>
                            </TouchableOpacity>
                            <Header title="Add New Payment" />
                            <View style={[styles.inputContainer, { marginTop: 41 }]}>
                                <InputField
                                    placeholder="Name on card"
                                    state="cardName"
                                    errorMessage={this.state.addPaymentPressed && this.props.auth.cardName.length === 0 ? CARD_NAME_ERROR : null} />
                            </View>
                            <View style={[styles.inputContainer, { justifyContent: "center" }]}>
                                <InputField
                                    placeholder="Card number"
                                    type="number-pad"
                                    max={16}
                                    state="cardNumber"
                                    errorMessage={this.state.addPaymentPressed && this.props.auth.cardNumber.length === 0 ? CARD_NUMBER_ERROR : null}
                                    errorMessage2={this.props.auth.cardNumber.length > 0 && this.props.auth.cardNumber.length < 16 ? INVALID_CARD_NUMBER : null} />
                                <View style={styles.cvvIcon}>
                                    <Image
                                        style={styles.masterCardIcon}
                                        source={require("../../../../assets/icons/mastercard.png")} />
                                </View>
                            </View>
                            <View style={styles.inputContainer}>
                                <InputField
                                    placeholder="Expire Date"
                                    type="number-pad"
                                    max={4}
                                    state="expired_date"
                                    errorMessage={this.state.addPaymentPressed && this.props.auth.expired_date.length === 0 ? EXPIRE_DATE_ERROR : null} />
                            </View>
                            <View style={[styles.inputContainer, { justifyContent: "center" }]}>
                                <InputField
                                    placeholder="CVV"
                                    type="number-pad"
                                    max={3}
                                    state="cvv"
                                    errorMessage={this.state.addPaymentPressed && this.props.auth.cvv.length === 0 ? CVV_ERROR : null}
                                    errorMessage2={this.state.addPaymentPressed && this.props.auth.cvv.length > 0 && this.props.auth.cvv.length < 3 ? INVALID_CVV_NUMBER : null} />
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
                            <Button blue={true} title="ADD AND CONTINUE" func={this.addPayment} loading={this.state.loading} />
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        payment: state.payment
    };
}

export default connect(mapStateToProps, null)(AddPayment);