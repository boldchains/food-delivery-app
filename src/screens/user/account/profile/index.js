import React from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView, ScrollView, Platform, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
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
                                <View>
                                    <Image
                                        style={styles.avatarIcon}
                                        source={require("../../../../../assets/icons/logo.png")} />
                                    <View style={styles.addAvatarContainer}>
                                        <TouchableOpacity>
                                            <Ionicons name="add-circle" size={40} color="#1A2D5A" />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <Header title={this.props.auth.name} />
                            </View>
                            <View style={styles.inputFieldContainer}>
                                <TextInput
                                    editButton={true}
                                    input={this.props.auth.name}
                                    placeholder="Full Name" />
                            </View>
                            <View style={styles.inputFieldContainer}>
                                <TextInput
                                    editButton={true}
                                    input={this.props.auth.phone}
                                    placeholder="Phone Number" />
                            </View>
                            <View style={styles.inputFieldContainer}>
                                <TextInput
                                    editButton={true}
                                    input={this.props.auth.email}
                                    placeholder="Email Address" />
                            </View>
                            <View style={[styles.inputFieldContainer, { marginBottom: 40 }]}>
                                <TextInput
                                    editButton={true}
                                    changeButton={true}
                                    input=""
                                    placeholder="Password" />
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