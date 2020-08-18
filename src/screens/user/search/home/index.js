import React from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView, ScrollView, Platform, TextInput, TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';

import styles from './styles';

import Header from '../../../../components/headerText';

export default class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            search: ""
        }
    }

    render() {
        return (
            <SafeAreaView style={styles.safeAreaContainer}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : null}
                    style={styles.container}>
                    <ScrollView contentContainerStyle={{}}>
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
                                <Header title="Search" />
                                <View style={styles.searchContainer}>
                                    <Feather name="search" size={18} color={"rgba(0,0,0,0.36)"} />
                                    <TextInput
                                        value={this.state.search}
                                        style={styles.searchInputField}
                                        onChangeText={search => this.setState({ search })} />
                                </View>
                                <ScrollView style={{ marginTop: 14 }} horizontal={true}>
                                    <TouchableOpacity
                                        style={styles.button}>
                                        <Text style={styles.buttonText}>Name</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.button}>
                                        <Text style={styles.buttonText}>Category</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.button}>
                                        <Text style={styles.buttonText}>Rating</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.button}>
                                        <Text style={styles.buttonText}>Price</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.button}>
                                        <Text style={styles.buttonText}>Something</Text>
                                    </TouchableOpacity>
                                </ScrollView>
                                <Text style={styles.blueText}>A</Text>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate("Restaurant", { search: true })}>
                                    <Text style={styles.boldText}>Asian Restarant</Text>
                                </TouchableOpacity>
                                <Text style={styles.blueText}>B</Text>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate("Restaurant", { search: true })}>
                                    <Text style={styles.boldText}>Breakfast Restarant</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate("Restaurant", { search: true })}>
                                    <Text style={styles.boldText}>Burgers Restarant</Text>
                                </TouchableOpacity>
                                <Text style={styles.blueText}>C</Text>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate("Restaurant", { search: true })}>
                                    <Text style={styles.boldText}>Chilcken Restarant</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate("Restaurant", { search: true })}>
                                    <Text style={styles.boldText}>Chinese Restarant</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate("Restaurant", { search: true })}>
                                    <Text style={styles.boldText}>Coffee Restarant</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}