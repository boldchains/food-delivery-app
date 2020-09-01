import React from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView, ScrollView, Platform, Image, TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { connect } from 'react-redux';

import styles from './styles';

import Header from '../../../../components/headerText';
import AuthService from '../../../../services/AuthServices';

class Home extends React.Component {
    authService = new AuthService();

    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            business_type : 0
        }
    }

    componentDidMount() {
        this.getDetailsData();
    }

    getDetailsData = () => {
        console.log('calling')
        let formdata = new FormData();
        formdata.append('userID', this.props.auth.userID);
        this.authService.getUserDetails(formdata, async (res) => {
            this.setState({business_type : res.response.userinfo.business_type})
        });
    };

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
                                    source={this.props.auth.photo === undefined || this.props.auth.photo === '' ? require("../../../../../assets/icons/logo.png") : { uri: this.props.auth.photo }} />
                                <View style={styles.userInfoContainer}>
                                    <Text style={styles.userName}>{this.props.auth.name}</Text>
                                    <Text style={styles.userEmail}>{this.props.auth.email}</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate("Payment")}
                                style={styles.accountItem}>
                                <View>
                                    <Text style={styles.accountItemTitle}>Payment</Text>
                                    <Text style={styles.accountItemGrey}>Visa **34</Text>
                                </View>
                                <Entypo name="chevron-thin-right" size={16} color={"#1A2D5A"} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate("Addresses")}
                                style={styles.accountItem}>
                                <View>
                                    <Text style={styles.accountItemTitle}>Addresses</Text>
                                    <Text style={styles.accountItemGrey}>3 addresses</Text>
                                </View>
                                <Entypo name="chevron-thin-right" size={16} color={"#1A2D5A"} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate("Support")}
                                style={styles.accountItem}>
                                <View>
                                    <Text style={styles.accountItemTitle}>Support</Text>
                                    <Text style={styles.accountItemGrey}>Support</Text>
                                </View>
                                <Entypo name="chevron-thin-right" size={16} color={"#1A2D5A"} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate("Reward")}
                                style={styles.accountItem}>
                                <View>
                                    <Text style={styles.accountItemTitle}>Reward Program</Text>
                                    <Text style={styles.accountItemGrey}>You have special reward program</Text>
                                </View>
                                <Entypo name="chevron-thin-right" size={16} color={"#1A2D5A"} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate("PromoCodes")}
                                style={styles.accountItem}>
                                <View>
                                    <Text style={styles.accountItemTitle}>Promo Codes</Text>
                                    <Text style={styles.accountItemGrey}>Promo Codes</Text>
                                </View>
                                <Entypo name="chevron-thin-right" size={16} color={"#1A2D5A"} />
                            </TouchableOpacity>
                            {this.state.business_type != 0 &&
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate("BecomeAVendor", {refresh : this.getDetailsData})}
                                    style={styles.accountItem}>
                                    <View>
                                        <Text style={styles.accountItemTitle}>Become A Vendor</Text>
                                    </View>
                                    <Entypo name="chevron-thin-right" size={16} color={"#1A2D5A"} />
                                </TouchableOpacity>
                            }
                            {this.state.business_type == 1 &&
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate("VendorHome")}
                                    style={styles.accountItem}>
                                    <View>
                                        <Text style={styles.accountItemTitle}>Vendor</Text>
                                    </View>
                                    <Entypo name="chevron-thin-right" size={16} color={"#1A2D5A"} />
                                </TouchableOpacity>
                            }
                            {this.state.business_type != 2 &&
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate("BecomeADriver")}
                                    style={styles.accountItem}>
                                    <View>
                                        <Text style={styles.accountItemTitle}>Become A Driver</Text>
                                    </View>
                                    <Entypo name="chevron-thin-right" size={16} color={"#1A2D5A"} />
                                </TouchableOpacity>
                            }
                            {this.state.business_type == 2 &&
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate("DriverHome")}
                                    style={styles.accountItem}>
                                    <View>
                                        <Text style={styles.accountItemTitle}>Driver</Text>
                                    </View>
                                    <Entypo name="chevron-thin-right" size={16} color={"#1A2D5A"} />
                                </TouchableOpacity>
                            }
                            <TouchableOpacity
                                //onPress={() => this.props.navigation.navigate("Auth", { screen: "SignUp" })}
                                style={styles.accountItem}>
                                <View>
                                    <Text style={styles.accountItemTitle}>Logout</Text>
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
        auth: state.auth
    };
}

export default connect(mapStateToProps, null)(Home);