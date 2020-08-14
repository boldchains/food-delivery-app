import React from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView, ScrollView, Platform, Image, TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import styles from './styles';

import Header from '../../../../components/headerText';

export default class Home extends React.Component {

    render() {
        return (
            <SafeAreaView style={styles.safeAreaContainer}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : null}
                    style={styles.container}>
                    <ScrollView>
                        <View style={styles.container}>
                            <View style={styles.headerTextContainer}>
                                <Header title="Account" />
                            </View>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate("Profile")}
                                style={styles.rowContainer}>
                                <Image
                                    style={styles.avatar}
                                    source={require("../../../../../assets/images/avatar.png")} />
                                <View style={styles.userInfoContainer}>
                                    <Text style={styles.userName}>Jeep Worker</Text>
                                    <Text style={styles.userEmail}>email@email.com</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate("Payment")}
                                style={styles.accountItem}>
                                <View>
                                    <Text style={styles.accountItemTitle}>Payment</Text>
                                    <Text style={styles.accountItemGrey}>Visa **34</Text>
                                </View>
                                <Entypo name="chevron-thin-right" size={16} color={"#9B9B9B"} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate("Payment")}
                                style={styles.accountItem}>
                                <View>
                                    <Text style={styles.accountItemTitle}>Addresses</Text>
                                    <Text style={styles.accountItemGrey}>3 addresses</Text>
                                </View>
                                <Entypo name="chevron-thin-right" size={16} color={"#9B9B9B"} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate("Payment")}
                                style={styles.accountItem}>
                                <View>
                                    <Text style={styles.accountItemTitle}>Support</Text>
                                    <Text style={styles.accountItemGrey}>Support</Text>
                                </View>
                                <Entypo name="chevron-thin-right" size={16} color={"#9B9B9B"} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate("Payment")}
                                style={styles.accountItem}>
                                <View>
                                    <Text style={styles.accountItemTitle}>Reward Program</Text>
                                    <Text style={styles.accountItemGrey}>You have special reward program</Text>
                                </View>
                                <Entypo name="chevron-thin-right" size={16} color={"#9B9B9B"} />
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}