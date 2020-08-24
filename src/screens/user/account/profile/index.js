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
            fullname: this.props.auth.name,
            phoneNumber: this.props.auth.phone,
        }
    }

    saveFunc = () => {
        this.props.navigation.goBack();
    }

    componentDidMount = () => {
        console.log("AccountProfile Screen[DidMount]: ", this.props);
    }

    componentDidUpdate = () => {
        if (this.state.fullname !== this.props.auth.name ||
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
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                console.log("Izabrana slika: ", response);
                //const source = { uri: response.uri };

                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };
                this.setState({
                    image: response.uri
                });
            }
        });
    }

    createFormData = (photo, body) => {
        const data = new FormData();

        data.append("photo", {
            name: "image",
            type: photo.type,
            uri:
                Platform.OS === "android" ? photo.uri : photo.uri.replace("file://", "")
        });

        Object.keys(body).forEach(key => {
            data.append(key, body[key]);
        });

        return data;
    };

    updateImage = () => {
        console.log("Azuriranje slike");
        this.setState({ loading: true }, async () => {

            //let data = await this.createFormData(this.state.image, { userID: this.props.auth.userID })
            const formData = new FormData();
            formData.append('picture', { uri: Platform.OS === "android" ? this.state.image.uri : this.state.image.uri.replace("file://", "") })
            //let data = this.createFo
            this.authService.updateImage(formData).then(res => {
                console.log("Uspesno smo azurirali sliku: ", res);
            }, error => {
                console.log("Desila se greska prilikom update slike: ", error);
            });
        });
    }

    update = () => {
        this.setState({ loading: true }, () => {
            const update = {
                userID: this.props.auth.userID,
                name: this.state.fullname,
                image: "",
                phone: this.state.phoneNumber
            }
            this.authService.update(update).then(async res => {
                console.log("Update je uspesno zavrsen: ", res);
                const updatedUser = {
                    userID: res.userinfo.userID,
                    name: res.userinfo.fullname,
                    email: res.userinfo.email,
                    phoneNumber: res.userinfo.phonenumber,
                    userPhoto: res.userinfo.photourl
                };
                await this.props.initUser(updatedUser);
                this.setState({ loading: false }, () => {
                    this.props.navigation.goBack();
                });
            }, error => {
                console.log("Desila se greska prilikom update[ProfileScreen]: ", error);
                this.setState({ loading: false });
            });
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
                                        source={this.state.image === "" ? require("../../../../../assets/icons/logo.png") : { uri: this.state.image }} />
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