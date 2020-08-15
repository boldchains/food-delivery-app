import React from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView, ScrollView, Platform, TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import styles from './styles';

import BackButton from '../../../../../components/backButton';
import Header from '../../../../../components/headerText';
import Button from '../../../../../components/button';
import DriverHoursItem from '../../../../../components/driverHoursItem';

export default class Hours extends React.Component {

    saveFunc = () => {
        this.props.navigation.navigate("DriverHome");
    }

    render() {
        return (
            <SafeAreaView style={styles.safeAreaContainer}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : null}
                    style={styles.container}>
                    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                        <View style={styles.container}>
                            <BackButton navigation={this.props.navigation} />
                            <Header title="My Hours" />

                            <DriverHoursItem day="Monday" second={true} />
                            <DriverHoursItem day="Tuesday" second={false} />

                            <View style={styles.buttonContainer}>
                                <Button blue={true} title="SAVE" func={this.saveFunc} />
                            </View>

                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}