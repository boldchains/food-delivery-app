import React from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import { initState } from '../../../redux/actions';
import styles from './styles';

import BackButton from '../../../components/backButton';
import Header from '../../../components/headerText';
import InputField from '../../../components/textInput';
import Button from '../../../components/button';

import { validateEmail } from '../../../utils/validationUtils';
import { EMAIL_ERROR, PASSWORD_ERROR } from '../../../config/errorMessages';

import AuthServices from '../../../services/AuthServices';

class SignIn extends React.Component {

    authServices = new AuthServices();

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            signInPressed: false,
            error: "",
            validEmail: validateEmail(this.props.auth.email)
        }
    }

    componentDidMount = () => {
        console.log("SignIn[DidMount]: ", this.props);
    }

    login = async () => {
        console.log("Kredencijali: ", this.props.auth);
        console.log("ValidEmail: ", this.state.validEmail);
        const emailValid = validateEmail(this.props.auth.email);
        console.log("EMAIL VALID:", emailValid);
        this.setState({ loading: true, signInPressed: true }, () => {

            if (this.props.auth.email.length > 0 &&
                this.props.auth.password.length > 0 &&
                validateEmail(this.props.auth.email).length === 0) {
                console.log("validacije je uspesno prosla");
                const user = {
                    email: this.props.auth.email,
                    password: this.props.auth.password
                }
                this.authServices.login(user).then(res => {
                    console.log("uspesno vraceno iz servisa: ", res);
                    this.setState({ loading: false, error: "" }, () => {
                        this.props.navigation.navigate("Tab");
                    });
                }, error => {
                    console.log("vracena greska iz servisa: ", error);
                    this.setState({ loading: false, error: error });
                });
            } else {
                console.log("Treba da se prikaze greska! ", EMAIL_ERROR);
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
                    <View style={styles.container}>
                        <ScrollView
                            contentContainerStyle={styles.scrollViewContainer}>
                            <View style={{ flex: 1, justifyContent: "space-between" }}>
                                <View>
                                    <BackButton navigation={this.props.navigation} func={this.props.initState} />
                                    <Header title="Sign in" />
                                    <View style={styles.errorContainer}>
                                        <Text style={styles.errorText}>{this.state.error}</Text>
                                    </View>
                                    <View style={styles.inputContainer}>
                                        <InputField
                                            input={this.props.auth}
                                            placeholder="Email"
                                            state="email"
                                            errorMessage2={this.props.auth.email.length > 0 ? validateEmail(this.props.auth.email) : null}
                                            errorMessage={this.state.signInPressed && this.props.auth.email.length === 0 ? EMAIL_ERROR : null} />
                                    </View>
                                    <View style={styles.inputContainer}>
                                        <InputField
                                            placeholder="Password"
                                            state="password"
                                            secure={true}
                                            errorMessage={this.state.signInPressed && this.props.auth.password.length === 0 ? PASSWORD_ERROR : null} />
                                    </View>
                                    <TouchableOpacity
                                        onPress={() => this.props.navigation.navigate("ForgotPassword")}
                                        style={styles.forgotPasswordButton}>
                                        <Text style={styles.forgotPasswordButtonText}>Forgot your password?</Text>
                                    </TouchableOpacity>
                                    <Button blue={true} title="SIGN IN" func={this.login} loading={this.state.loading} />
                                </View>
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
                    </View>
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

export default connect(mapStateToProps, { initState })(SignIn);