import React from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView, ScrollView, Platform, TouchableOpacity, TextInput, FlatList } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';

import BackButton from '../../../../../../components/backButton';
import Header from '../../../../../../components/headerText';
import InputField from '../../../../../../components/textInput';
import Button from '../../../../../../components/button';

export default class Modifier extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            required: true,
            min: false,
            max: false,
            modifiers: [
            ],
        }
    }

    addFunc = () => {
        this.props.navigation.goBack();
    }

    modifierItem = ({ item, index }) => {
        let tempArray = this.state.modifiers
        return (
            <View style={[styles.row, { justifyContent: "space-between", marginBottom: 5 }]}>
                <TextInput
                    style={[styles.greyText, { borderWidth: 0.5, borderColor: 'grey', fontWeight: "bold", color : '#1A2D5A', width: '30%', height: 25, borderRadius: 5, paddingLeft: 5 }]}
                    value={item.name}
                    onChangeText={(value) => {
                        tempArray[index].name = value
                        this.setState({ modifiers: tempArray })
                    }}
                />
                <View style={{ flex: 1, alignItems: "center" }}>
                    <Text style={{ color: "#8D8D89" }}>...................................</Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <TextInput
                        style={{ fontWeight: "bold", color : '#1A2D5A',  marginRight: 12, borderWidth: 0.5, borderColor: 'grey', width: 60, height: 25, borderRadius: 5, paddingLeft: 5 }}
                        value={item.price == '' ? '0.00' : item.price}
                        onChangeText={(value) => {
                            tempArray[index].price = value
                            this.setState({ modifiers: tempArray })
                        }}
                    />
                    <TouchableOpacity
                        onPress={() => {
                            tempArray.splice(index, 1)
                            this.setState({ modifiers: tempArray })
                        }
                        }>
                        <View style={[styles.checkBox]}>
                                <MaterialIcons name="delete" size={17} color={"#1A2D5A"} /> 
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
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
                            <Header title={this.props.route.params ? "Modifier Name" : "Modifiers"} />
                            {/* {!this.props.route.params ?
                                <TouchableOpacity
                                    //onPress={() => this.props.navigation.navigate("VendorAddModifier")}
                                    style={styles.rowContainer}>
                                    <Ionicons name="add-circle" size={30} color={"#1A2D5A"} />
                                    <Text style={styles.boldText}>Add Modifier Category</Text>
                                </TouchableOpacity> : null} */}
                            <View style={{ marginTop: this.props.route.params ? 32 : 32 }}>
                                <InputField placeholder="Modifier Name" />
                            </View>
                            {!this.props.route.params ?
                                <View style={[styles.row, { marginTop: 30 }]}>
                                    <Text style={styles.greyText}>Required:</Text>
                                    <TouchableOpacity
                                        disabled={this.state.required}
                                        style={{ flexDirection: "row", alignItems: "center", marginLeft: 26 }}
                                        onPress={() => this.setState({ required: !this.state.required })}>
                                        <View style={[styles.checkBox, { backgroundColor: this.state.required ? "#1A2D5A" : "#F9F9F9", borderWidth: this.state.required ? 0 : 1 }]}>
                                            {this.state.required ?
                                                <MaterialIcons name="done" size={17} color={"white"} /> : null}
                                        </View>
                                        <Text style={{ color: "#333333", marginLeft: 7 }}>Yes</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        disabled={!this.state.required}
                                        style={{ flexDirection: "row", alignItems: "center", marginLeft: 26 }}
                                        onPress={() => this.setState({ required: !this.state.required })}>
                                        <View style={[styles.checkBox, { backgroundColor: !this.state.required ? "#1A2D5A" : "#F9F9F9", borderWidth: this.state.required ? 1 : 0 }]}>
                                            {!this.state.required ?
                                                <MaterialIcons name="done" size={17} color={"white"} /> : null}
                                        </View>
                                        <Text style={{ color: "#333333", marginLeft: 7 }}>No</Text>
                                    </TouchableOpacity>
                                </View> : null}
                            <View style={[styles.row, { marginTop: 25 }]}>
                                <Text style={styles.greyText}>Min Selected:</Text>
                                <TextInput style={{ borderColor: 'grey', borderWidth: 0.5, fontWeight: "bold", color : '#1A2D5A', marginLeft: 20, height: 30, width: 50, paddingLeft: 5, borderRadius: 5 }} />
                            </View>
                            <View style={[styles.row, { marginTop: 17 }]}>
                                <Text style={styles.greyText}>Max Selected:</Text>
                                <TextInput style={{ borderColor: 'grey', borderWidth: 0.5, fontWeight: "bold", color : '#1A2D5A', marginLeft: 17, height: 30, width: 50, paddingLeft: 5, borderRadius: 5 }} />
                            </View>
                            {!this.props.route.params ?
                                <TouchableOpacity
                                    onPress={() => {
                                        let tempArray = this.state.modifiers
                                        tempArray.push({ name: '', price: '' })
                                        console.log(tempArray)
                                        this.setState({ modifiers: tempArray })
                                    }}
                                    style={styles.rowContainer}>
                                    <Ionicons name="add-circle" size={30} color={"#1A2D5A"} />
                                    <Text style={styles.boldText}>Add Modifier</Text>
                                </TouchableOpacity> :
                                <Text style={[styles.boldText, { marginLeft: 0, marginVertical: 25, fontSize: 20 }]}>Modifier</Text>}
                            <View style={styles.miniContainer}>
                                {this.props.route.params ?
                                    <View style={[styles.row, { justifyContent: "space-between", marginBottom: 21 }]}>
                                        <Text style={styles.blueText}>Name</Text>
                                        <Text style={styles.blueText}>Charge</Text>
                                    </View> : null}
                                {this.props.route.params ?
                                    <View>
                                        <View style={styles.row}>
                                            <Text style={[styles.greyText, { width: 70 }]}>Mushroom</Text>
                                            <View style={{ flex: 1, alignItems: "center" }}>
                                                <Text style={{ color: "#8D8D89" }}>...........................................</Text>
                                            </View>
                                            <Text style={{ marginRight: 12 }}>$1.00</Text>
                                        </View>
                                        <View style={[styles.row, { marginTop: 19 }]}>
                                            <Text style={[styles.greyText, { width: 70 }]}>Bacon</Text>
                                            <View style={{ flex: 1, alignItems: "center" }}>
                                                <Text style={{ color: "#8D8D89" }}>...........................................</Text>
                                            </View>
                                            <Text style={{ marginRight: 12 }}>$2.00</Text>
                                        </View>
                                        <View style={[styles.row, { marginTop: 19 }]}>
                                            <Text style={[styles.greyText, { width: 70 }]}>Lettuce</Text>
                                            <View style={{ flex: 1, alignItems: "center" }}>
                                                <Text style={{ color: "#8D8D89" }}>...........................................</Text>
                                            </View>
                                            <Text style={{ marginRight: 12 }}>$2.99</Text>
                                        </View>
                                        <View style={[styles.row, { marginTop: 19 }]}>
                                            <Text style={[styles.greyText, { width: 70 }]}>Tomato</Text>
                                            <View style={{ flex: 1, alignItems: "center" }}>
                                                <Text style={{ color: "#8D8D89" }}>...........................................</Text>
                                            </View>
                                            <Text style={{ marginRight: 12 }}>$2.99</Text>
                                        </View>
                                    </View> :
                                    <View style={{ height: 150 }}>
                                        <FlatList
                                            data={this.state.modifiers}
                                            renderItem={this.modifierItem}
                                            keyExtractor={(item) => { item.index }}
                                        />
                                    </View>}
                            </View>
                            {this.props.route.params ?
                                <TouchableOpacity
                                    //onPress={() => this.props.navigation.navigate("VendorAddModifier")}
                                    style={[styles.rowContainer, { marginTop: 0 }]}>
                                    <Ionicons name="add-circle" size={30} color={"#1A2D5A"} />
                                    <Text style={styles.boldText}>Add Item</Text>
                                </TouchableOpacity> : null}
                            <Button blue={true} title={this.props.route.params ? "SAVE" : "ADD"} func={this.addFunc} />
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}