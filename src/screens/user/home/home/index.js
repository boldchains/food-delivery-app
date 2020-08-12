import React from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView, Image, Dimensions } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import styles from './styles';

const width = Dimensions.get("screen").width;

export default class ConfirmCode extends React.Component {

    changePassFunc = () => {
        this.props.navigation.navigate("ChangePassword");
    }

    render() {
        return (
            <SafeAreaView style={styles.safeAreaContainer}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : null}
                    style={styles.container}>
                    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                        <View style={styles.container}>
                            <View style={styles.headerContainer}>
                                <Text style={styles.headerNameText}>Jeep Worker</Text>
                                <View style={styles.headerRightContainer}>
                                    <Text style={styles.headerBlueText}>DELIVERING TO</Text>
                                    <View style={styles.rowContainer}>
                                        <Text style={styles.headerNameText}>New York</Text>
                                        <Entypo name="chevron-thin-down" size={18} color={"#2F80ED"} style={styles.headerIcon} />
                                    </View>
                                </View>
                            </View>
                            <View style={styles.mainContainer}>
                                <Text style={styles.mainHeaderText}>Todays Featured Restaurant</Text>
                                <Image
                                    style={styles.mainImage}
                                    source={require("../../../../../assets/images/slika1.png")} />
                            </View>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}