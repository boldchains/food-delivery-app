import React from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView, ScrollView, Platform, TouchableOpacity, RefreshControl } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';

import BackButton from '../../../../../components/backButton';
import Header from '../../../../../components/headerText';
import VendorItem from '../../../../../components/vendorItem';

export default class Items extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            reload : false,
            loading : false,
        }
    }

    render() {
        return (
            <SafeAreaView style={styles.safeAreaContainer}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : null}
                    style={styles.container}>
                    <ScrollView 
                        style={styles.scrollViewContainer}
                        refreshControl = {
                            <RefreshControl
                                colors={["red", "green", "blue"]}
                                tintColor = 'blue'
                                refreshing = {this.state.reload}
                                onRefresh = {() => {
                                    // this.getVendorData()
                                    console.log('ok')
                                }}
                            />   
                    }>
                        <View style={styles.container}>
                            <BackButton navigation={this.props.navigation} />
                            <Header title={this.props.route.params.title} />
                            <View style={{ marginTop: 16 }}>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate("VendorAddItems")}
                                    style={styles.rowContainer}>
                                    <Ionicons name="add-circle" size={30} color={"#1A2D5A"} />
                                    <Text style={styles.boldText}>Add new Item</Text>
                                </TouchableOpacity>
                                <VendorItem number={1} navigation={this.props.navigation} />
                                <VendorItem number={2} navigation={this.props.navigation} />
                                <VendorItem number={3} navigation={this.props.navigation} />
                                <VendorItem number={4} navigation={this.props.navigation} />
                            </View>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}