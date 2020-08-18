import React from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView, ScrollView, Platform, TextInput, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';

import BackButton from '../../../../../components/backButton';
import Header from '../../../../../components/headerText';
import Button from '../../../../../components/button';

export default class Description extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            description: "Send the link dummy jsakjnda adn akdakjsd ajsdkjask dasj dasd asjd akjsdk jalsd jalkj aks jd klajs"
        }
    }

    saveFunc = () => {
        this.props.navigation.goBack();
    }

    render() {
        return (
            <SafeAreaView style={styles.safeAreaContainer}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : null}
                    style={styles.container}>
                    <ScrollView style={styles.scrollViewContainer}>
                        <View style={styles.container}>
                            <BackButton navigation={this.props.navigation} />
                            <Header title="My Description" />
                            <TextInput
                                value={this.state.description}
                                multiline={true}
                                onChangeText={description => this.setState({ description })}
                                style={styles.inputField} />
                            <TouchableOpacity
                                //onPress={() => this.props.navigation.navigate("VendorAddItems")}
                                style={[styles.rowContainer, { marginTop: 0 }]}>
                                <Ionicons name="add-circle" size={30} color={"#1A2D5A"} />
                                <Text style={styles.boldText}>Add Logo/Photo</Text>
                            </TouchableOpacity>
                            <View style={styles.imageContainer}>
                                <View style={{ position: "absolute", zIndex: 10, top: -7, right: -7 }}>
                                    <Ionicons name="close-circle" size={20} color={"#1A2D5A"} />
                                </View>
                                <Image
                                    style={styles.image}
                                    source={require("../../../../../../assets/images/03.png")} />
                            </View>
                            <Button blue={true} title="SAVE" func={this.saveFunc} />
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}