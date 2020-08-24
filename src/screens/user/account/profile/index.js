import React from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView, ScrollView, Platform, Image } from 'react-native';
import { connect } from 'react-redux';

import styles from './styles';

import BackButton from '../../../../components/backButton';
import Header from '../../../../components/headerText';
import TextInput from '../../../../components/textInput';
import Button from '../../../../components/button';

class Profile extends React.Component {

    saveFunc = () => {
        this.props.navigation.goBack();
    }

    componentDidMount = () => {
        console.log("AccountProfile Screen[DidMount]: ", this.props);
    }

    render() {
        return (
            <SafeAreaView style={styles.safeAreaContainer}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : null}
                    style={styles.container}>
                    <ScrollView contentContainerStyle={styles.scrollViewContaier}>
                        <View style={styles.container}>
                            <BackButton navigation={this.props.navigation} />
                            <View style={styles.userInfoContainer}>
                                <Image
                                    style={styles.avatarIcon}
                                    source={require("../../../../../assets/icons/avatarIcon.png")} />
                                <Header title={this.props.auth.name} />
                            </View>
                            <View style={styles.inputFieldContainer}>
                                <TextInput
                                    input={this.props.auth.name}
                                    placeholder="Full Name" />
                            </View>
                            <View style={styles.inputFieldContainer}>
                                <TextInput
                                    input={this.props.auth.phone}
                                    placeholder="Phone Number" />
                            </View>
                            <View style={styles.inputFieldContainer}>
                                <TextInput
                                    input={this.props.auth.email}
                                    placeholder="Email Address" />
                            </View>
                            <View style={[styles.inputFieldContainer, { marginBottom: 40 }]}>
                                <TextInput placeholder="Password" />
                            </View>

                            <Button blue={true} title="SAVE" func={this.saveFunc} />
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: {
            name: state.auth.name,
            email: state.auth.email,
            phone: state.auth.phone
        },
    };
}

export default connect(mapStateToProps, null)(Profile);