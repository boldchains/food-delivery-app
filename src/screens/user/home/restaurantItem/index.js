import React from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView, Image, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

import BackButton from '../../../../components/backButton';
import Header from '../../../../components/headerText';
import InputField from '../../../../components/textInput';
import Button from '../../../../components/button';

export default class RestaurantItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            noLetuce: false,
            noTomato: false,
            noKetchup: false,
            noChesse: false,
            bacon: false
        }
    }

    addToBagFunc = () => {
        this.props.navigation.navigate("RestaurantDetails");
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
                            <Header title="Orders" />
                            <Image
                                style={styles.mainImage}
                                source={require("../../../../../assets/images/slika2.png")} />
                            <View style={styles.rowContainer}>
                                <Text style={styles.blackText}>Chesse Burger</Text>
                                <Text style={styles.blackText}>$10</Text>
                            </View>
                            <Text style={[styles.blackText, { fontSize: 16, marginTop: 32 }]}>Modifier</Text>
                            <View>
                                <View style={styles.rowContainerModifier}>
                                    <Text style={styles.greyText}>No Chesse</Text>
                                    <View style={{ flex: 1, alignItems: "center" }}>
                                        <Text style={styles.greyText}>................</Text>
                                    </View>
                                    <TouchableOpacity
                                        onPress={() => this.setState({ noChesse: !this.state.noChesse })}
                                        style={[styles.checkBox, { borderWidth: this.state.noChesse ? 0 : 1, backgroundColor: this.state.noChesse ? "#2F80ED" : "#F9F9F9" }]}>
                                        {this.state.noChesse ?
                                            <MaterialIcons name="done" size={17} color={"white"} /> : null}
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.rowContainerModifier}>
                                    <Text style={styles.greyText}>No Ketchup</Text>
                                    <View style={{ flex: 1, alignItems: "center" }}>
                                        <Text style={styles.greyText}>................</Text>
                                    </View>
                                    <TouchableOpacity
                                        onPress={() => this.setState({ noKetchup: !this.state.noKetchup })}
                                        style={[styles.checkBox, { borderWidth: this.state.noKetchup ? 0 : 1, backgroundColor: this.state.noKetchup ? "#2F80ED" : "#F9F9F9" }]}>
                                        {this.state.noKetchup ?
                                            <MaterialIcons name="done" size={17} color={"white"} /> : null}
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.rowContainerModifier}>
                                    <Text style={styles.greyText}>No Tomato</Text>
                                    <View style={{ flex: 1, alignItems: "center" }}>
                                        <Text style={styles.greyText}>................</Text>
                                    </View>
                                    <TouchableOpacity
                                        onPress={() => this.setState({ noTomato: !this.state.noTomato })}
                                        style={[styles.checkBox, { borderWidth: this.state.noTomato ? 0 : 1, backgroundColor: this.state.noTomato ? "#2F80ED" : "#F9F9F9" }]}>
                                        {this.state.noTomato ?
                                            <MaterialIcons name="done" size={17} color={"white"} /> : null}
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.rowContainerModifier}>
                                    <Text style={styles.greyText}>No Lettuce</Text>
                                    <View style={{ flex: 1, alignItems: "center" }}>
                                        <Text style={styles.greyText}>................</Text>
                                    </View>
                                    <TouchableOpacity
                                        onPress={() => this.setState({ noLetuce: !this.state.noLetuce })}
                                        style={[styles.checkBox, { borderWidth: this.state.noLetuce ? 0 : 1, backgroundColor: this.state.noLetuce ? "#2F80ED" : "#F9F9F9" }]}>
                                        {this.state.noLetuce ?
                                            <MaterialIcons name="done" size={17} color={"white"} /> : null}
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <Text style={[styles.blackText, { fontSize: 16, marginTop: 32 }]}>Add On</Text>
                            <View style={[styles.rowContainerModifier, { marginBottom: 58 }]}>
                                <Text style={styles.greyText}>Bacon</Text>
                                <View style={{ flex: 1, alignItems: "center" }}>
                                    <Text style={styles.greyText}>................</Text>
                                </View>
                                <Text style={[styles.blackText, { fontSize: 16, marginRight: 12 }]}>+$2.99</Text>
                                <TouchableOpacity
                                    onPress={() => this.setState({ bacon: !this.state.bacon })}
                                    style={[styles.checkBox, { borderWidth: this.state.bacon ? 0 : 1, backgroundColor: this.state.bacon ? "#2F80ED" : "#F9F9F9" }]}>
                                    {this.state.bacon ?
                                        <MaterialIcons name="done" size={17} color={"white"} /> : null}
                                </TouchableOpacity>
                            </View>
                            <Button blue={true} title="ADD TO BAG" func={this.addToBagFunc} />
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}