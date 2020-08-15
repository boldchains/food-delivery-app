import React from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView, ScrollView, Platform, TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';

import BackButton from '../../../../../components/backButton';
import Header from '../../../../../components/headerText';

export default class Modifier extends React.Component {

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
                                <Header title="My Modifiers" />
                            </View>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate("VendorWebsite")}
                                style={styles.accountItem}>
                                <View>
                                    <Text style={styles.accountItemTitle}>My Website</Text>
                                </View>
                                <Entypo name="chevron-thin-right" size={16} color={"#9B9B9B"} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate("VendorWebsite")}
                                style={styles.accountItem}>
                                <View>
                                    <Text style={styles.accountItemTitle}>Steak Temp</Text>
                                </View>
                                <Entypo name="chevron-thin-right" size={16} color={"#9B9B9B"} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate("VendorWebsite")}
                                style={styles.accountItem}>
                                <View>
                                    <Text style={styles.accountItemTitle}>Cheese Type</Text>
                                </View>
                                <Entypo name="chevron-thin-right" size={16} color={"#9B9B9B"} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate("VendorWebsite")}
                                style={styles.accountItem}>
                                <View>
                                    <Text style={styles.accountItemTitle}>Hamburger</Text>
                                </View>
                                <Entypo name="chevron-thin-right" size={16} color={"#9B9B9B"} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate("VendorWebsite")}
                                style={styles.accountItem}>
                                <View>
                                    <Text style={styles.accountItemTitle}>Hot Dog</Text>
                                </View>
                                <Entypo name="chevron-thin-right" size={16} color={"#9B9B9B"} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.rowContainer}>
                                <Ionicons name="add-circle" size={30} color={"#333333"} />
                                <Text style={styles.boldText}>Add Modifier</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}