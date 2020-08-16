import React from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView, ScrollView, Platform, TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import styles from './styles';

import BackButton from '../../../../../components/backButton';
import Header from '../../../../../components/headerText';

export default class Home extends React.Component {

    render() {
        return (
            <SafeAreaView style={styles.safeAreaContainer}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : null}
                    style={styles.container}>
                    <ScrollView >
                        <View style={styles.container}>
                            <View style={styles.headerContainer}>
                                <BackButton navigation={this.props.navigation} />
                                <Header title="Vendor Name" />
                            </View>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate("VendorItems")}
                                style={styles.accountItem}>
                                <View>
                                    <Text style={styles.accountItemTitle}>My Menu Items</Text>
                                </View>
                                <Entypo name="chevron-thin-right" size={16} color={"#9B9B9B"} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate("VendorModifier")}
                                style={styles.accountItem}>
                                <View>
                                    <Text style={styles.accountItemTitle}>My Modifier</Text>
                                </View>
                                <Entypo name="chevron-thin-right" size={16} color={"#9B9B9B"} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate("DriverHours")}
                                style={styles.accountItem}>
                                <View>
                                    <Text style={styles.accountItemTitle}>My Hours</Text>
                                </View>
                                <Entypo name="chevron-thin-right" size={16} color={"#9B9B9B"} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate("VendorDescription")}
                                style={styles.accountItem}>
                                <View>
                                    <Text style={styles.accountItemTitle}>My Descriptions</Text>
                                </View>
                                <Entypo name="chevron-thin-right" size={16} color={"#9B9B9B"} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate("VendorWebsite")}
                                style={styles.accountItem}>
                                <View>
                                    <Text style={styles.accountItemTitle}>My Website</Text>
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