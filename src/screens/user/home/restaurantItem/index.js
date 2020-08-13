import React from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView, Image } from 'react-native';

import styles from './styles';

import BackButton from '../../../../components/backButton';
import Header from '../../../../components/headerText';
import InputField from '../../../../components/textInput';
import Button from '../../../../components/button';

export default class RestaurantItem extends React.Component {

    changePassFunc = () => {
        //this.props.navigation.navigate("ChangePassword");
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
                                    <View style={styles.checkBox} />
                                </View>
                                <View style={styles.rowContainerModifier}>
                                    <Text style={styles.greyText}>No Ketchup</Text>
                                    <View style={{ flex: 1, alignItems: "center" }}>
                                        <Text style={styles.greyText}>................</Text>
                                    </View>
                                    <View style={styles.checkBox} />
                                </View>
                                <View style={styles.rowContainerModifier}>
                                    <Text style={styles.greyText}>No Tomato</Text>
                                    <View style={{ flex: 1, alignItems: "center" }}>
                                        <Text style={styles.greyText}>................</Text>
                                    </View>
                                    <View style={styles.checkBox} />
                                </View>
                                <View style={styles.rowContainerModifier}>
                                    <Text style={styles.greyText}>No Lettuce</Text>
                                    <View style={{ flex: 1, alignItems: "center" }}>
                                        <Text style={styles.greyText}>................</Text>
                                    </View>
                                    <View style={styles.checkBox} />
                                </View>
                            </View>
                            <Text style={[styles.blackText, { fontSize: 16, marginTop: 32 }]}>Add On</Text>
                            <View style={[styles.rowContainerModifier, { marginBottom: 58 }]}>
                                <Text style={styles.greyText}>Bacon</Text>
                                <View style={{ flex: 1, alignItems: "center" }}>
                                    <Text style={styles.greyText}>................</Text>
                                </View>
                                <Text style={[styles.blackText, { fontSize: 16, marginRight: 12 }]}>+$2.99</Text>
                                <View style={styles.checkBox} />
                            </View>
                            <Button blue={true} title="ADD TO BAG" func={this.changePassFunc} />
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}