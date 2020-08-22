import React from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView, Image } from 'react-native';
import { connect } from 'react-redux';
import { initState } from '../../../redux/actions';
import styles from './styles';

import BackButton from '../../../components/backButton';
import Header from '../../../components/headerText';
import InputField from '../../../components/textInput';
import Button from '../../../components/button';

import AuthService from '../../../services/AuthServices';

import { validateEmail } from '../../../utils/validationUtils';
import { EMAIL_ERROR, PASSWORD_ERROR, CONFIRM_PASSWORD_ERROR, NAME_ERROR, PHONE_ERROR } from '../../../config/errorMessages';

class Welcome extends React.Component {

    authService = new AuthService();

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            signUpPressed: false,
            error: ""
        }
    }

    signUpFunc = () => {
        this.props.navigation.navigate("AddPayment");
    }

    signUp = () => {
        this.setState({ loading: true, signUpPressed: true }, () => {
            if (this.props.auth.email.length > 0 &&
                this.props.auth.password.length > 0 &&
                this.props.auth.confirmPassword.length > 0 &&
                this.props.auth.phone.length > 0 &&
                this.props.auth.name.length > 0 &&
                (this.props.auth.password === this.props.auth.confirmPassword) &&
                validateEmail(this.props.auth.email).length === 0) {

                //console.log("Korisnik je uspesno registrovan");
                const user = {
                    email: this.props.auth.email,
                    name: this.props.auth.name,
                    phone: this.props.auth.phone,
                    password: this.props.auth.phone
                }
                this.authService.signUp(user).then(res => {
                    console.log("Korisnik je uspesno registrovan");
                    this.setState({ loading: false, error: "" }, () => {
                        this.props.navigation.navigate("AddPayment");
                    });
                }, error => {
                    console.log("dobili smo gresku: ", error);
                    this.setState({ loading: false, error: error });
                });
            } else {
                console.log("Validacija nije prosla!");
                this.setState({ loading: false });
            }
        });
    }

    render() {
        return (
            <SafeAreaView style={styles.safeAreaContainer}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : null}
                    style={styles.container}>
                    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                        <View style={styles.container}>
                            <BackButton navigation={this.props.navigation} func={this.props.initState} />
                            <Header title="Sign up" />
                            <View style={styles.errorContainer}>
                                <Text style={styles.errorText}>{this.state.error}</Text>
                            </View>
                            <View style={styles.inputContainer}>
                                <InputField
                                    placeholder="Name"
                                    state="name"
                                    errorMessage={this.state.signUpPressed && this.props.auth.name.length === 0 ? NAME_ERROR : null} />
                            </View>
                            <View style={styles.inputContainer}>
                                <InputField
                                    placeholder="Email"
                                    state="email"
                                    errorMessage={this.state.signUpPressed && this.props.auth.email.length === 0 ? EMAIL_ERROR : null}
                                    errorMessage2={this.props.auth.email.length > 0 ? validateEmail(this.props.auth.email) : null} />
                            </View>
                            <View style={styles.inputContainer}>
                                <InputField
                                    placeholder="Phone"
                                    state="phone"
                                    errorMessage={this.state.signUpPressed && this.props.auth.phone.length === 0 ? PHONE_ERROR : null} />
                            </View>
                            <View style={styles.inputContainer}>
                                <InputField
                                    placeholder="Password"
                                    secure={true}
                                    state="password"
                                    errorMessage={this.state.signUpPressed && this.props.auth.password.length === 0 ? PASSWORD_ERROR : null} />
                            </View>
                            <View style={styles.inputContainer}>
                                <InputField
                                    placeholder="Confirm Password"
                                    secure={true}
                                    state="confirmPassword"
                                    errorMessage={this.state.signUpPressed && this.props.auth.confirmPassword.length === 0 ? CONFIRM_PASSWORD_ERROR : null} />
                            </View>
                            <Button blue={true} title="SIGN UP" func={this.signUp} loading={this.state.loading} />
                            <View style={styles.socialLoginContainer}>
                                <Text style={styles.forgotPasswordButtonText}>Or sign in with social account</Text>
                                <View style={styles.rowContainer}>
                                    <View style={[styles.socialButtonContainer, { marginRight: 16 }]}>
                                        <Image
                                            style={styles.socialButtonIcon}
                                            source={require("../../../../assets/icons/googleIcon.png")} />
                                    </View>
                                    <View style={styles.socialButtonContainer}>
                                        <Image
                                            style={styles.socialButtonIcon}
                                            source={require("../../../../assets/icons/facebookIcon.png")} />
                                    </View>
                                </View>
                            </View>
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
}

export default connect(mapStateToProps, { initState })(Welcome);