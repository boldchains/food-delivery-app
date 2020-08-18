import React from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import styles from './styles';

import Header from '../../../../components/headerText';
import CalendarItem from '../../../../components/calendarItem';
import Button from '../../../../components/button';

export default class Home extends React.Component {

    notifyMeFunc = () => {
        this.props.navigation.navigate("NotifyMe");
    }

    render() {
        return (
            <SafeAreaView style={styles.safeAreaContainer}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : null}
                    style={styles.container}>
                    <ScrollView contentContainerStyle={{ flex: 1 }}>
                        <View style={styles.container}>
                            <View style={styles.headerContainer}>
                                <Text style={styles.headerNameText}>Jeep Worker</Text>
                                <View style={styles.headerRightContainer}>
                                    <Text style={styles.headerBlueText}>DELIVERING TO</Text>
                                    <View style={styles.rowContainer}>
                                        <Text style={styles.headerNameText}>New York</Text>
                                        <Entypo name="chevron-thin-down" size={18} color={"#1A2D5A"} style={styles.headerIcon} />
                                    </View>
                                </View>
                            </View>
                            <View style={styles.mainContainer}>
                                <View style={{ flex: 1 }}>
                                    <Header title="Calendar" />
                                    <View style={styles.itemRowContainer}>
                                        <CalendarItem day="S" date="July 26" navigation={this.props.navigation} />
                                        <CalendarItem day="M" date="July 27" navigation={this.props.navigation} />
                                        <CalendarItem day="T" date="July 28" navigation={this.props.navigation} />
                                        <CalendarItem day="W" date="July 29" navigation={this.props.navigation} />
                                        <CalendarItem day="T" date="July 30" navigation={this.props.navigation} />
                                        <CalendarItem day="F" date="July 31" navigation={this.props.navigation} />
                                        <CalendarItem day="S" date="Aug 01" navigation={this.props.navigation} />
                                    </View>
                                    <View style={styles.itemRowContainer}>
                                        <CalendarItem day="S" date="Aug 02" navigation={this.props.navigation} />
                                        <CalendarItem day="M" date="Aug 03" navigation={this.props.navigation} />
                                        <CalendarItem day="T" date="Aug 04" navigation={this.props.navigation} />
                                        <CalendarItem day="W" date="Aug 05" navigation={this.props.navigation} />
                                        <CalendarItem day="T" date="Aug 06" navigation={this.props.navigation} />
                                        <CalendarItem day="F" date="Aug 07" navigation={this.props.navigation} />
                                        <CalendarItem day="S" date="Aug 08" navigation={this.props.navigation} />
                                    </View>
                                </View>
                                <Button blue={true} title="NOTIFY ME" func={this.notifyMeFunc} />
                            </View>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView >
        );
    }
}