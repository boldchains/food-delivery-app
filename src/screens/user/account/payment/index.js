import React from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView, ScrollView, Platform, Image, TouchableOpacity, Modal } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import styles from './styles';

import BackButton from '../../../../components/backButton';
import Header from '../../../../components/headerText';
import InputField from '../../../../components/textInput';
import Button from '../../../../components/button';

export default class Payment extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            default: true,
            modalVisible: false,
            defaultModal: true
        }
    }

    addNewCardFunc = () => {
        this.setState({ modalVisible: false });
    }

    render() {
        return (
            <SafeAreaView style={styles.safeAreaContainer}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : null}
                    style={styles.container}>
                    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                        <View style={styles.container}>
                            <Modal
                                animationType="slide"
                                visible={this.state.modalVisible}
                                transparent={true}>
                                <View style={styles.modalMainContainer}>
                                    <View style={styles.modalContainer}>
                                        <Text style={styles.modalBoldText}>Add new card</Text>
                                        <View style={[styles.inputContainer, { marginTop: 41 }]}>
                                            <InputField placeholder="Name on card" />
                                        </View>
                                        <View style={[styles.inputContainer, { justifyContent: "center" }]}>
                                            <InputField placeholder="Card number" type="number-pad" max={16} />
                                            <View style={styles.cvvIcon}>
                                                <Image
                                                    style={styles.masterCardIcon}
                                                    source={require("../../../../../assets/icons/mastercard.png")} />
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
                                            onPress={() => this.setState({ defaultModal: !this.state.defaultModal })}
                                            style={[styles.rowContainer, { marginBottom: 20 }]}>
                                            <View style={styles.defaultMiniContainer}>
                                                {this.state.defaultModal ?
                                                    <MaterialIcons name="done" size={20} color={"white"} /> : null}
                                            </View>
                                            <Text style={styles.defaultText}>Set as default payment method</Text>
                                        </TouchableOpacity>
                                        <Button blue={true} title="ADD NEW CARD" func={this.addNewCardFunc} />
                                    </View>
                                </View>

                            </Modal>
                            <BackButton navigation={this.props.navigation} />
                            <Header title="Payment" />
                            <Text style={styles.boldText}>Your Payment cards</Text>
                            <Image
                                style={styles.cardImage}
                                source={require("../../../../../assets/images/Card.png")} />
                            <TouchableOpacity
                                onPress={() => this.setState({ default: !this.state.default })}
                                style={styles.rowContainer}>
                                <View style={[styles.checkBox, { backgroundColor: this.state.default ? "#333333" : "#F9F9F9", borderWidth: this.state.default ? 0 : 1 }]}>
                                    {this.state.default ?
                                        <MaterialIcons name="done" size={17} color={"white"} /> : null}
                                </View>
                                <Text style={styles.text}>Use as  default payment method</Text>
                            </TouchableOpacity>
                            <View style={styles.addPaymentContainer}>
                                <TouchableOpacity onPress={() => this.setState({ modalVisible: true })}>
                                    <Ionicons name="add-circle" size={50} color={"#333333"} style={styles.addIcon} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}