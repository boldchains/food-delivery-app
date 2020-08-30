import React from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView, ScrollView, Platform, TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import styles from './styles';

import BackButton from '../../../../../components/backButton';
import Header from '../../../../../components/headerText';
import AuthService from '../../../../../services/AuthServices';
import { connect } from 'react-redux';

class Home extends React.Component {
    authService = new AuthService();

    constructor(props) {
        super(props);

        this.state = {
            loading : false,
            vendorName : '',
            vendorDescription : '',
            vendorLogo : '',
            vendorWebsite : ''
        }
    }

    componentDidMount() {
        this.getVendorData()
    }

    getVendorData = () => {
        let formData = new FormData();
        formData.append('userID', this.props.auth.userID);

        this.authService.getVendorDetails(formData, async (res) => {
            this.setState({
                vendorName : res.response.vendorinfo.restaurant_name == undefined? '' : res.response.vendorinfo.restaurant_name,
                vendorDescription : res.response.vendorinfo.restaurant_description == undefined? '' : res.response.vendorinfo.restaurant_description,
                vendorLogo : res.response.vendorinfo.restaurant_logourl == undefined? '' : res.response.vendorinfo.restaurant_logourl,
                vendorWebsite  : res.response.vendorinfo.restaurant_website == undefined? '' : res.response.vendorinfo.restaurant_website,
            })
        });
    }

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
                                <Header title={this.state.vendorName} />
                            </View>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate("VendorItems")}
                                style={styles.accountItem}>
                                <View>
                                    <Text style={styles.accountItemTitle}>My Menu Items</Text>
                                </View>
                                <Entypo name="chevron-thin-right" size={16} color={"#1A2D5A"} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate("VendorModifier")}
                                style={styles.accountItem}>
                                <View>
                                    <Text style={styles.accountItemTitle}>My Modifier</Text>
                                </View>
                                <Entypo name="chevron-thin-right" size={16} color={"#1A2D5A"} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate("VendorHours")}
                                style={styles.accountItem}>
                                <View>
                                    <Text style={styles.accountItemTitle}>My Hours</Text>
                                </View>
                                <Entypo name="chevron-thin-right" size={16} color={"#1A2D5A"} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate("VendorDescription", {description : this.state.vendorDescription, logo : this.state.vendorLogo, refresh : this.getVendorData})}
                                style={styles.accountItem}>
                                <View>
                                    <Text style={styles.accountItemTitle}>My Descriptions</Text>
                                </View>
                                <Entypo name="chevron-thin-right" size={16} color={"#1A2D5A"} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate("VendorWebsite", {website : this.state.vendorWebsite, refresh : this.getVendorData})}
                                style={styles.accountItem}>
                                <View>
                                    <Text style={styles.accountItemTitle}>My Website</Text>
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

export default connect(mapStateToProps, null)(Home);