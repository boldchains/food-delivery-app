import React from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView, ScrollView, Platform, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-picker';
import { connect } from 'react-redux';
import { initUser } from '../../../../redux/actions';

import styles from './styles';

import BackButton from '../../../../components/backButton';
import Header from '../../../../components/headerText';
import TextInput from '../../../../components/textInput';
import Button from '../../../../components/button';

import AuthService from '../../../../services/AuthServices';

class Profile extends React.Component {

    authService = new AuthService();

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            disabled: true,
            image: this.props.auth.photo,
            selectedImage: this.props.auth.photo,
            fullname: this.props.auth.name,
            phoneNumber: this.props.auth.phone,
        }
    }

    saveFunc = () => {
        this.props.navigation.goBack();
    }

    componentDidMount = () => {
        this.getDetailsData()
    }

    componentDidUpdate = () => {
        if (this.state.fullname !== this.props.auth.name ||
            this.state.selectedImage !== this.props.auth.photo ||
            this.state.phoneNumber !== this.props.auth.phone) {
            if (this.state.disabled) {
                this.setState({ disabled: false });
            }
        } else {
            if (!this.state.disabled) {
                this.setState({ disabled: true });
            }
        }
    }

    getDetailsData = () => {
        let formdata = new FormData()
        formdata.append('userID', this.props.auth.userID)
        this.authService.getUserDetails(formdata, async res => {
            console.log("details data", res)
        })
    }

    updateState = (key, value) => {
        this.setState({
            [key]: value
        });
    }

    pickImage = () => {
        const options = {
            title: 'Select Avatar',
            //customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        ImagePicker.showImagePicker(options, (response) => {
            console.log(response)
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                console.log("Izabrana slika: ", response.path);
                var data = {
                    uri: Platform.OS === "android" ? response.uri : response.uri.replace("file://", ""),
                    type: response.type,
                    name: response.fileName
                }
                this.setState({
                    selectedImage: response.uri,
                    image: data
                });
            }
        });
    }

    update = () => {
        this.setState({ loading: true }, async () => {
            let formData = new FormData()

            formData.append('userID', this.props.auth.userID)
            formData.append('fullname', this.state.fullname)
            formData.append('photo', this.state.image)
            formData.append('phonenumber', this.state.phoneNumber)
            formData.append('email', this.props.auth.email)

            this.authService.update(formData, async res => {
                const updatedUser = {
                    userID: res.response.userinfo.userID,
                    name: res.response.userinfo.fullname,
                    email: res.response.userinfo.email,
                    phoneNumber: res.response.userinfo.phonenumber,
                    userPhoto: res.response.userinfo.photourl
                };
                await this.props.initUser(updatedUser);
                this.setState({ loading: false }, () => {
                    this.props.navigation.goBack();
                });
            })
        });
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
                                        source={this.state.selectedImage === undefined ? require("../../../../../assets/icons/logo.png") : { uri: this.state.selectedImage }} />
                                    <View style={styles.addAvatarContainer}>
                                        <TouchableOpacity onPress={() => this.pickImage()}>
                                            <Ionicons name="add-circle" size={40} color="#1A2D5A" />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <Header title={this.props.auth.name} />
                            </View>
                            <View style={styles.inputFieldContainer}>
                                <TextInput
                                    update={true}
                                    updateFunc={this.updateState}
                                    state="fullname"
                                    editButton={true}
                                    input={this.state.fullname}
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

                            <Button
                                blue={true}
                                title="UPDATE"
                                func={this.update}
                                disabled={this.state.disabled}
                                loading={this.state.loading} />
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

export default connect(mapStateToProps, { initUser })(Profile);