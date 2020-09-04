import React from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView, Image, Dimensions, TouchableOpacity, RefreshControl, FlatList } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { connect } from 'react-redux';

import styles from './styles';

import WelcomeModal from '../../../../components/welcomeHomeModal';

import AuthService from '../../../../services/AuthServices';

const width = Dimensions.get("screen").width;

class Home extends React.Component {

    authService = new AuthService();

    constructor(props) {
        super(props);

        this.state = {
            reload : false,
            modalVisible: false,
            todaysFeaturedRestaurant : {},
            vendorList : []
        }
    }


    componentDidMount = () => {
        this.getVendorList()
    }

    getVendorList = () => {
        let formData = new FormData();
        formData.append('userID', this.props.auth.userID);

        this.authService.getVendorList(formData, async (res) => {
            if(res.response.vendorlist){
                if(res.response.vendorlist.length > 0){
                    this.setState({todaysFeaturedRestaurant : res.response.vendorlist[0]})
                }
                this.setState({vendorList : res.response.vendorlist})
            }
        });
    }

    changePassFunc = () => {
        this.props.navigation.navigate("ChangePassword");
    }

    renderItem = ({item, index}) => {
        if(item.restaurant_logourl != ''){
            return(
                <TouchableOpacity onPress={() => 
                    this.props.navigation.navigate("RestaurantDetails", 
                    {
                        userID : item.userID, 
                        title : item.restaurant_name,
                        logo : item.restaurant_logourl, 
                        description : item.restaurant_description
                    })
                }>
                    <Image
                        style={styles.upcomingRestaurantsImage}
                        source={{uri : item.restaurant_logourl}} />
                </TouchableOpacity>
            )
        }
    }

    render() {
        return (
            <SafeAreaView style={styles.safeAreaContainer}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : null}
                    style={styles.container}>
                    <ScrollView 
                        contentContainerStyle={styles.scrollViewContainer}
                        refreshControl = {
                            <RefreshControl
                                colors={["red", "green", "blue"]}
                                tintColor = 'blue'
                                refreshing = {this.state.reload}
                                onRefresh = {() => {
                                    this.getVendorList()
                                }}
                            />   
                        }
                    >
                        <View style={styles.container}>
                            <WelcomeModal text1={this.props.route.params.login == true ? "Welcome Back to" : 'Welcome to'} text2 = "DeliverEaze" />
                            <View style={styles.headerContainer}>
                                <Text style={styles.headerNameText}>{this.props.auth.name}</Text>
                                <View style={styles.headerRightContainer}>
                                    <Text style={styles.headerBlueText}>DELIVERING TO</Text>
                                    <View style={styles.rowContainer}>
                                        <Text style={styles.headerNameText}>New York</Text>
                                        <Entypo name="chevron-thin-down" size={18} color={"#1A2D5A"} style={styles.headerIcon} />
                                    </View>
                                </View>
                            </View>
                            <View style={styles.mainContainer}>
                                <TouchableOpacity onPress={() => 
                                    this.props.navigation.navigate("RestaurantDetails",
                                    {
                                        userID : this.state.todaysFeaturedRestaurant.userID, 
                                        title : this.state.todaysFeaturedRestaurant.restaurant_name,
                                        logo : this.state.todaysFeaturedRestaurant.restaurant_logourl, 
                                        description : this.state.todaysFeaturedRestaurant.restaurant_description
                                    })
                                }>
                                    <Text style={styles.mainHeaderText}>Todays Featured Restaurant</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => 
                                    this.props.navigation.navigate("RestaurantDetails", 
                                    {
                                        userID : this.state.todaysFeaturedRestaurant.userID, 
                                        title : this.state.todaysFeaturedRestaurant.restaurant_name,
                                        logo : this.state.todaysFeaturedRestaurant.restaurant_logourl, 
                                        description : this.state.todaysFeaturedRestaurant.restaurant_description
                                    })
                                }>
                                    <Image
                                        style={styles.mainImage}
                                        source={{uri : this.state.todaysFeaturedRestaurant.restaurant_logourl}} />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => 
                                    this.props.navigation.navigate("RestaurantDetails", 
                                    {
                                        userID : this.state.todaysFeaturedRestaurant.userID, 
                                        title : this.state.todaysFeaturedRestaurant.restaurant_name,
                                        logo : this.state.todaysFeaturedRestaurant.restaurant_logourl, 
                                        description : this.state.todaysFeaturedRestaurant.restaurant_description
                                    })
                                }>
                                    <Text style={[styles.mainHeaderText, { fontSize: 20, marginTop: 22 }]}>{this.state.todaysFeaturedRestaurant.restaurant_name}</Text>
                                </TouchableOpacity>
                                <Text style={styles.mainGreyText}>{this.state.todaysFeaturedRestaurant.restaurant_description}</Text>
                                <Text style={[styles.mainHeaderText, { fontSize: 16, marginVertical: 13, }]}>Up comming restaurants</Text>
                                <FlatList
                                    horizontal = {true}
                                    data={this.state.vendorList}
                                    renderItem={this.renderItem}
                                    keyExtractor={(item) => { item.index }}
                                />
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
        auth: state.auth,
    };
}

export default connect(mapStateToProps, null)(Home);