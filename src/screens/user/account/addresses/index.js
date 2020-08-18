import React from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView, ScrollView, Platform, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

import styles from './styles';

import BackButton from '../../../../components/backButton';
import Header from '../../../../components/headerText';
import Button from '../../../../components/button';

export default class Addresses extends React.Component {

    render() {
        return (
            <SafeAreaView style={styles.safeAreaContainer}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : null}
                    style={styles.container}>
                    <ScrollView style={styles.scrollViewContainer}>
                        <View style={styles.container}>
                            <BackButton navigation={this.props.navigation} />
                            <Header title="Account Address" />
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate("AddAddresses")}
                                style={styles.rowContainer}>
                                <Ionicons name="add-circle" size={30} color={"#1A2D5A"} />
                                <Text style={styles.boldText}>Add another</Text>
                            </TouchableOpacity>
                            <Text style={styles.text}>Saved Address</Text>
                            <View style={[styles.row, { justifyContent: "space-between" }]}>
                                <View style={[styles.row, { marginTop: 0 }]}>
                                    <View style={styles.circle} />
                                    <Text style={{ marginLeft: 12, color: "#1A2D5A" }}>Work Address 1212412</Text>
                                </View>
                                <TouchableOpacity style={{ padding: 5 }}>
                                    <Entypo name="edit" size={18} color={"#1A2D5A"} />
                                </TouchableOpacity>
                            </View>

                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}