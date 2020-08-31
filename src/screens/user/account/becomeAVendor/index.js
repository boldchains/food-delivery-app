import React from 'react';
import { View, TextInput, SafeAreaView, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';

import styles from './styles';

import { connect } from 'react-redux';
import BackButton from '../../../../components/backButton';
import Header from '../../../../components/headerText';
import Button from '../../../../components/button';
import InputField from '../../../../components/textInput';
import AuthService from '../../../../services/AuthServices';
import { NAME_ERROR, PHONE_ERROR, ADDRESS_ERROR, CITY_ERROR, STATE_ERROR, ZIP_ERROR, NUMBER_OF_LOCATIONS_ERROR } from '../../../../config/errorMessages';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'


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
            city : '',
            state : '',
            zip : '',
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

    getFieldsForAutoComplete = (data) => {
        data.map(item => {
            if(item.types.includes('locality')){
                console.log('city', item.long_name)
                this.setState({city : item.long_name})
            }
            if(item.types.includes('administrative_area_level_1')){
                console.log('state', item.long_name)
                this.setState({state : item.long_name})
            }
            if(item.types.includes('postal_code')){
                console.log('zip', item.long_name)
                this.setState({zip : item.long_name})
            }
        })
    }

    render() {
        return (
            <SafeAreaView style={styles.safeAreaContainer}>
                <KeyboardAvoidingView
                    keyboardShouldPersistTaps = {'always'}
                    behavior={Platform.OS === "ios" ? "padding" : null}
                    style={styles.container}>
                    <ScrollView keyboardShouldPersistTaps = {'always'} contentContainerStyle={styles.scrollViewContainer}>
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
                                        errorMessage={this.state.submitPressed && this.state.restaurant_name ? NAME_ERROR : null} />
                                </View>
                                <View style={styles.inputContainer}>
                                        <GooglePlacesAutocomplete 
                                            placeholder = 'Address'
                                            fetchDetails = {true}
                                            styles = {{
                                                textInputContainer : {
                                                    backgroundColor : 'white',
                                                    borderTopWidth : 0,
                                                    borderBottomWidth : 0
                                                }
                                            }}
                                            onPress = {(data, details) => {
                                                this.setState({restaurant_address : data.description})
                                                const {address_components} = details
                                                if(address_components.length === 0)
                                                {
                                                    return
                                                }
                                                this.getFieldsForAutoComplete(address_components)
                                            }}
                                            query = {{
                                                key : 'AIzaSyCyQpmp9mMFMVhjX9Dus1GlAvsxfOKERE0',
                                                language : 'en',
                                                types : '(regions)'
                                            }}
                                        />
                                </View>
                                <View style={{ flexDirection: "row" }}>
                                    <View style={[styles.inputContainer, { flex: 1, marginRight: 16 }]}>
                                        <TextInput 
                                            placeholder = 'City'
                                            value = {this.state.city}
                                            onChange = {(value) => {
                                                this.setState({city : value})
                                            }}
                                        />
                                    </View>
                                    <View style={[styles.inputContainer, { flex: 1, marginRight: 16 }]}>
                                        <TextInput 
                                            placeholder = 'State'
                                            value = {this.state.state}
                                            onChange = {(value) => {
                                                this.setState({state : value})
                                            }}
                                        />
                                    </View>
                                    <View style={[styles.inputContainer, { flex: 1 }]}>
                                        <TextInput 
                                            placeholder = 'Zip'
                                            value = {this.state.zip}
                                            onChange = {(value) => {
                                                this.setState({zip : value})
                                            }}
                                        />
                                    </View>
                                </View>
                                <View style={{ flexDirection: "row" }}>
                                    <View style={[styles.inputContainer, { flex: 1, marginRight: 16 }]}>
                                        <InputField 
                                            placeholder="Phone"
                                            type="number-pad"
                                            InputField={this.state.restaurant_phone}
                                            state="restaurant_phone"
                                            errorMessage={this.state.submitPressed && this.state.restaurant_phone ? PHONE_ERROR : null} />
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