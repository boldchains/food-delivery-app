import React from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView, ScrollView, Platform, TouchableOpacity } from 'react-native';
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
            rare: true,
            medRare: true,
            med: true,
            medWell: true,
            wellDone: true
        }
    }

    addFunc = () => {
        this.props.navigation.goBack();
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
                            {!this.props.route.params ?
                                <TouchableOpacity
                                    //onPress={() => this.props.navigation.navigate("VendorAddModifier")}
                                    style={styles.rowContainer}>
                                    <Ionicons name="add-circle" size={30} color={"#1A2D5A"} />
                                    <Text style={styles.boldText}>Add Modifier Category</Text>
                                </TouchableOpacity> : null}
                            <View style={{ marginTop: this.props.route.params ? 32 : 0 }}>
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
                                <TouchableOpacity
                                    style={{ flexDirection: "row", alignItems: "center", marginLeft: 26 }}
                                    onPress={() => this.setState({ min: !this.state.min })}>
                                    <View style={[styles.checkBox, { backgroundColor: this.state.min ? "#1A2D5A" : "#F9F9F9", borderWidth: this.state.min ? 0 : 1 }]}>
                                        {this.state.min ?
                                            <MaterialIcons name="done" size={17} color={"white"} /> : null}
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.row, { marginTop: 17 }]}>
                                <Text style={styles.greyText}>Max Selected:</Text>
                                <TouchableOpacity
                                    style={{ flexDirection: "row", alignItems: "center", marginLeft: 26 }}
                                    onPress={() => this.setState({ max: !this.state.max })}>
                                    <View style={[styles.checkBox, { backgroundColor: this.state.max ? "#1A2D5A" : "#F9F9F9", borderWidth: this.state.max ? 0 : 1 }]}>
                                        {this.state.max ?
                                            <MaterialIcons name="done" size={17} color={"white"} /> : null}
                                    </View>
                                </TouchableOpacity>
                            </View>
                            {!this.props.route.params ?
                                <TouchableOpacity
                                    //onPress={() => this.props.navigation.navigate("VendorAddModifier")}
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
                                    <View>
                                        <View style={[styles.row, { justifyContent: "space-between" }]}>
                                            <Text style={styles.greyText}>Rare</Text>
                                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                                <Text style={{ fontWeight: "bold", marginRight: 12 }}>+ $2.99</Text>
                                                <TouchableOpacity onPress={() => this.setState({ rare: !this.state.rare })}>
                                                    <View style={[styles.checkBox, { backgroundColor: this.state.rare ? "#1A2D5A" : "#F9F9F9", borderWidth: this.state.rare ? 0 : 1 }]}>
                                                        {this.state.rare ?
                                                            <MaterialIcons name="done" size={17} color={"white"} /> : null}
                                                    </View>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                        <View style={[styles.row, { justifyContent: "space-between", marginTop: 21 }]}>
                                            <Text style={styles.greyText}>Med Rare</Text>
                                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                                <Text style={{ fontWeight: "bold", marginRight: 12 }}>+ $2.99</Text>
                                                <TouchableOpacity onPress={() => this.setState({ medRare: !this.state.medRare })}>
                                                    <View style={[styles.checkBox, { backgroundColor: this.state.medRare ? "#1A2D5A" : "#F9F9F9", borderWidth: this.state.medRare ? 0 : 1 }]}>
                                                        {this.state.medRare ?
                                                            <MaterialIcons name="done" size={17} color={"white"} /> : null}
                                                    </View>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                        <View style={[styles.row, { justifyContent: "space-between", marginTop: 21 }]}>
                                            <Text style={styles.greyText}>Med</Text>
                                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                                <Text style={{ fontWeight: "bold", marginRight: 12 }}>+ $2.99</Text>
                                                <TouchableOpacity onPress={() => this.setState({ med: !this.state.med })}>
                                                    <View style={[styles.checkBox, { backgroundColor: this.state.med ? "#1A2D5A" : "#F9F9F9", borderWidth: this.state.med ? 0 : 1 }]}>
                                                        {this.state.med ?
                                                            <MaterialIcons name="done" size={17} color={"white"} /> : null}
                                                    </View>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                        <View style={[styles.row, { justifyContent: "space-between", marginTop: 21 }]}>
                                            <Text style={styles.greyText}>Med Well</Text>
                                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                                <Text style={{ fontWeight: "bold", marginRight: 12 }}>+ $2.99</Text>
                                                <TouchableOpacity onPress={() => this.setState({ medWell: !this.state.medWell })}>
                                                    <View style={[styles.checkBox, { backgroundColor: this.state.medWell ? "#1A2D5A" : "#F9F9F9", borderWidth: this.state.medWell ? 0 : 1 }]}>
                                                        {this.state.medWell ?
                                                            <MaterialIcons name="done" size={17} color={"white"} /> : null}
                                                    </View>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                        <View style={[styles.row, { justifyContent: "space-between", marginTop: 21 }]}>
                                            <Text style={styles.greyText}>Well Done</Text>
                                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                                <Text style={{ fontWeight: "bold", marginRight: 12 }}>+ $2.99</Text>
                                                <TouchableOpacity onPress={() => this.setState({ wellDone: !this.state.wellDone })}>
                                                    <View style={[styles.checkBox, { backgroundColor: this.state.wellDone ? "#1A2D5A" : "#F9F9F9", borderWidth: this.state.wellDone ? 0 : 1 }]}>
                                                        {this.state.wellDone ?
                                                            <MaterialIcons name="done" size={17} color={"white"} /> : null}
                                                    </View>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
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