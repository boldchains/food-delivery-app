import React from 'react';
import { View, TextInput, SafeAreaView, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';

import styles from './styles';

import BackButton from '../../../../../components/backButton';
import Header from '../../../../../components/headerText';
import Button from '../../../../../components/button';

export default class PromoCodes extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            site: "www.blablabla.com"
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
                            <Header title="My Website" />
                            <TextInput
                                value={this.state.site}
                                onChangeText={site => this.setState({ site })}
                                style={styles.inputField} />
                            <Button blue={true} title="SAVE" func={this.saveFunc} />
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}