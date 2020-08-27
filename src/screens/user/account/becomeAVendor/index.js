import React from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';

import styles from './styles';

import { connect } from 'react-redux';
import BackButton from '../../../../components/backButton';
import Header from '../../../../components/headerText';
import Button from '../../../../components/button';
import InputField from '../../../../components/textInput';
import AuthService from '../../../../services/AuthServices';
import { NAME_ERROR, PHONE_ERROR, ADDRESS_ERROR, CITY_ERROR, STATE_ERROR, ZIP_ERROR, NUMBER_OF_LOCATIONS_ERROR } from '../../../../config/errorMessages';

class BecomeAVendor extends React.Component {

    authService = new AuthService();

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            restaurant_name : this.props.auth.restaurant_name,
            restaurant_address : this.props.auth.restaurant_address,
            number_of_locations : this.props.auth.number_of_locations,
            restaurant_phone : this.props.auth.restaurant_phone,
            submitPressed : false
        }
    }

    submitFunc = () => {
        this.setState({submitPressed : true})
        this.become_Vendor()
    }

    componentDidMount() {
    }

    updateState = (key, value) => {
        this.setState({
            [key]: value,
        });
    };

    become_Vendor = () => {
        if(this.state.restaurant_name.length > 0 &&
            this.state.restaurant_phone.length > 0 &&
            this.state.restaurant_address.length > 0 )
        {
            let formdata = new FormData();
            formdata.append('userID', this.props.auth.userID);
            formdata.append('restaurant_name', this.state.restaurant_name);
            formdata.append('restaurant_address', this.state.restaurant_address);
            formdata.append('number_of_locations', this.state.number_of_locations);
            formdata.append('restaurant_phone', this.state.restaurant_phone);
            formdata.append('action_time', new Date().toString());
    
            this.authService.becomeVendor(formdata, async (res) => {
                this.props.route.params.refresh()
                this.props.navigation.goBack();
                console.log('become a vendor', res);
            });
        }
    };

    render() {
        return (
            <SafeAreaView style={styles.safeAreaContainer}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : null}
                    style={styles.container}>
                    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                        <View style={styles.container}>
                            <View style={{ flex: 1, marginBottom: 20 }}>
                                <BackButton navigation={this.props.navigation} />
                                <Header title="Become A Vendor" />

                                <View style={styles.inputContainer}>
                                    <InputField
                                        updateFunc={this.updateState}
                                        placeholder="Restaurant Name"
                                        InputField={this.state.restaurant_name}
                                        state="restaurant_name"
                                        errorMessage={this.state.submitPressed && this.state.restaurant_name.length === 0 ? NAME_ERROR : null} />
                                </View>
                                <View style={styles.inputContainer}>
                                    <InputField 
                                        placeholder="Address"
                                        InputField={this.state.restaurant_address}
                                        state="restaurant_address"
                                        errorMessage={this.state.submitPressed && this.state.restaurant_address.length === 0 ? ADDRESS_ERROR : null} />
                                </View>
                                <View style={{ flexDirection: "row" }}>
                                    <View style={[styles.inputContainer, { flex: 1, marginRight: 16 }]}>
                                        <InputField placeholder="City" />
                                    </View>
                                    <View style={[styles.inputContainer, { flex: 1, marginRight: 16 }]}>
                                        <InputField placeholder="State" />
                                    </View>
                                    <View style={[styles.inputContainer, { flex: 1 }]}>
                                        <InputField placeholder="ZIP" type="number-pad" max={5} />
                                    </View>
                                </View>
                                <View style={{ flexDirection: "row" }}>
                                    <View style={[styles.inputContainer, { flex: 1, marginRight: 16 }]}>
                                        <InputField 
                                            placeholder="Phone"
                                            type="number-pad"
                                            InputField={this.state.restaurant_phone}
                                            state="restaurant_phone"
                                            errorMessage={this.state.submitPressed && this.state.restaurant_phone.length === 0 ? PHONE_ERROR : null} />
                                    </View>
                                    <View style={[styles.inputContainer, { flex: 1 }]}>
                                        <InputField
                                            placeholder="Number of Locations"
                                            type="number-pad"
                                            InputField={this.state.number_of_locations}
                                            state="number_of_locations"
                                            errorMessage={this.state.submitPressed && this.state.number_of_locations === 0 ? NUMBER_OF_LOCATIONS_ERROR : null} />
                                    </View>
                                </View>
                            </View>

                            <Button
                                blue={true}
                                title="SUBMIT"
                                loading={this.state.loading}
                                func={this.submitFunc}
                            />
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

export default connect(mapStateToProps, null)(BecomeAVendor);