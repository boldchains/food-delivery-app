import React from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView, Image, Dimensions, TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { connect } from 'react-redux';

import styles from './styles';

const width = Dimensions.get("screen").width;

class Home extends React.Component {

    constructor(props) {
        super(props);
    }


    componentDidMount = () => {
        console.log("Home[DidMount]: ", this.props);
    }

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
                                        <Entypo name="chevron-thin-down" size={18} color={"#1A2D5A"} style={styles.headerIcon} />
                                    </View>
                                </View>
                            </View>
                            <View style={styles.mainContainer}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate("RestaurantDetails")}>
                                    <Text style={styles.mainHeaderText}>Todays Featured Restaurant</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate("RestaurantDetails")}>
                                    <Image
                                        style={styles.mainImage}
                                        source={require("../../../../../assets/images/slika1.png")} />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate("RestaurantDetails")}>
                                    <Text style={[styles.mainHeaderText, { fontSize: 20, marginTop: 22 }]}>The NoMad Restaurant</Text>
                                </TouchableOpacity>
                                <Text style={styles.mainGreyText}>Lorem Ipsus is simply dummy text  of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown</Text>
                                <Text style={[styles.mainHeaderText, { fontSize: 16, marginVertical: 13, }]}>Up comming restaurants</Text>
                                <ScrollView horizontal>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate("RestaurantDetails")}>
                                        <Image
                                            style={styles.upcomingRestaurantsImage}
                                            source={require("../../../../../assets/images/01.png")} />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate("RestaurantDetails")}>
                                        <Image
                                            style={styles.upcomingRestaurantsImage}
                                            source={require("../../../../../assets/images/02.png")} />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate("RestaurantDetails")}>
                                        <Image
                                            style={styles.upcomingRestaurantsImage}
                                            source={require("../../../../../assets/images/03.png")} />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate("RestaurantDetails")}>
                                        <Image
                                            style={styles.upcomingRestaurantsImage}
                                            source={require("../../../../../assets/images/04.png")} />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate("RestaurantDetails")}>
                                        <Image
                                            style={styles.upcomingRestaurantsImage}
                                            source={require("../../../../../assets/images/01.png")} />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate("RestaurantDetails")}>
                                        <Image
                                            style={styles.upcomingRestaurantsImage}
                                            source={require("../../../../../assets/images/02.png")} />
                                    </TouchableOpacity>
                                </ScrollView>
                            </View>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: { email: state.auth.email },
    };
}

export default connect(mapStateToProps, null)(Home);