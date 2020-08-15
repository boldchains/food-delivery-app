import React from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView, ScrollView, Platform, TouchableOpacity, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Picker from 'react-native-picker-select';

import styles from './styles';

import BackButton from '../../../../../../components/backButton';
import Header from '../../../../../../components/headerText';
import InputField from '../../../../../../components/textInput';
import Button from '../../../../../../components/button';

export default class Website extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            picker: "",
            description: ""
        }
    }

    addItemFunc = () => {
        this.props.navigation.navigate("VendorItems");
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
                            <Header title="Add Item" />
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate("VendorAddItems")}
                                style={styles.rowContainer}>
                                <Ionicons name="add-circle" size={30} color={"#333333"} />
                                <Text style={styles.boldText}>Item Image</Text>
                            </TouchableOpacity>
                            <View >
                                <InputField placeholder="Item Name" />
                            </View>
                            <TextInput
                                placeholder="Item Description"
                                placeholderTextColor="#9B9B9B"
                                multiline={true}
                                style={styles.inputField}
                                onChangeText={description => this.setState({ description })}
                                value={this.state.description} />
                            <View style={styles.pickerContainer}>
                                <Picker
                                    value={this.state.picker}
                                    onValueChange={picker => this.setState({ picker })}
                                    items={[
                                        { label: 'Item Category 1', value: 'Item Category 1' },
                                        { label: 'Item Category 2', value: 'Item Category 2' },
                                        { label: 'Item Category 3', value: 'Item Category 3' },
                                    ]}
                                    placeholder={{ label: "Item Category", value: "" }}
                                    style={{
                                        inputIOS: {
                                            width: "100%",
                                            height: "100%",
                                            fontSize: 14,
                                            color: "#9B9B9B",
                                            padding: 0
                                        },
                                        inputAndroid: {
                                            width: "100%",
                                            height: "100%",
                                            fontSize: 14,
                                            color: "#9B9B9B",
                                            padding: 0
                                        }
                                    }}
                                />
                            </View>
                            <View style={{ width: "50%", marginTop: 16 }}>
                                <InputField placeholder="Price" type="number-pad" />
                            </View>
                            <Text style={styles.text}>Modifier</Text>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate("VendorAddItems")}
                                style={styles.rowContainer}>
                                <Ionicons name="add-circle" size={30} color={"#333333"} />
                                <Text style={styles.boldText}>Add Modifier Category</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate("VendorAddItems")}
                                style={[styles.rowContainer, { marginTop: 0 }]}>
                                <Ionicons name="add-circle" size={30} color={"#333333"} />
                                <Text style={styles.boldText}>Add Modifier</Text>
                            </TouchableOpacity>
                            <Button blue={true} title="ADD" func={this.addItemFunc} />
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}