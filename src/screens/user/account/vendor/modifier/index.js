import React from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView, ScrollView, Platform, RefreshControl, TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';

import BackButton from '../../../../../components/backButton';
import Header from '../../../../../components/headerText';
import AuthService from '../../../../../services/AuthServices';
import { connect } from 'react-redux';

class Modifier extends React.Component {

    authService = new AuthService();

    constructor(props) {
        super(props);

        this.state = {
            reload : false,
            loading : false,
        }
    }

    componentDidMount() {
        this.getVendorModifierList()
    }

    getVendorModifierList = () => {

        let formData = new FormData();
        formData.append('userID', this.props.auth.userID);

        this.authService.getVendorDetails(formData, async (res) => {
            console.log(res)
        });
    }

    render() {
        return (
            <SafeAreaView style={styles.safeAreaContainer}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : null}
                    style={styles.container}>
                    <ScrollView refreshControl = {
                        <RefreshControl
                            colors={["red", "green", "blue"]}
                            tintColor = 'blue'
                            refreshing = {this.state.reload}
                            onRefresh = {() => {
                                this.getVendorModifierList()
                            }}
                         />   
                    }>
                        <View style={styles.container}>
                            <View style={styles.headerContainer}>
                                <BackButton navigation={this.props.navigation} />
                                <Header title="My Modifiers" />
                            </View>

                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate("VendorAddModifier")}
                                style={styles.rowContainer}>
                                <Ionicons name="add-circle" size={30} color={"#1A2D5A"} />
                                <Text style={styles.boldText}>Add Modifier</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate("VendorAddModifier", { edit: true })}
                                style={[styles.accountItem, { marginTop: 0 }]}>
                                <View>
                                    <Text style={styles.accountItemTitle}>Stake Temp</Text>
                                </View>
                                <Entypo name="chevron-thin-right" size={16} color={"#1A2D5A"} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate("VendorAddModifier", { edit: true })}
                                style={styles.accountItem}>
                                <View>
                                    <Text style={styles.accountItemTitle}>Cheese Burger</Text>
                                </View>
                                <Entypo name="chevron-thin-right" size={16} color={"#1A2D5A"} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate("VendorAddModifier", { edit: true })}
                                style={styles.accountItem}>
                                <View>
                                    <Text style={styles.accountItemTitle}>Cheese Type</Text>
                                </View>
                                <Entypo name="chevron-thin-right" size={16} color={"#1A2D5A"} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate("VendorAddModifier", { edit: true })}
                                style={styles.accountItem}>
                                <View>
                                    <Text style={styles.accountItemTitle}>Hamburger</Text>
                                </View>
                                <Entypo name="chevron-thin-right" size={16} color={"#1A2D5A"} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate("VendorAddModifier", { edit: true })}
                                style={styles.accountItem}>
                                <View>
                                    <Text style={styles.accountItemTitle}>Hot Dog</Text>
                                </View>
                                <Entypo name="chevron-thin-right" size={16} color={"#1A2D5A"} />
                            </TouchableOpacity>
                            
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
    };
};

export default connect(mapStateToProps, null)(Modifier);