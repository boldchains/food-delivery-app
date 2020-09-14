import React from 'react';
import { connect } from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo';
import { View, Text, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView, Image, TouchableOpacity, FlatList, RefreshControl } from 'react-native';

import BackButton from '../../../../components/backButton';
import Header from '../../../../components/headerText';
import Button from '../../../../components/button';
import CartNotify from '../../../../components/cartNotify';
import AuthService from '../../../../services/AuthServices';

import styles from './styles';

class ConfirmCode extends React.Component {

    authService = new AuthService();

    constructor(props) {
        super(props);

        this.state = {
            reload : false,
            userID : this.props.route.params.userID,
            itemList : [],
            logo : this.props.route.params.logo,
            description : this.props.route.params.description,
            title : this.props.route.params.title,
            modifierList : [],
            totalPrice : 0,
            priceList : []
        }
    }

    componentDidMount() {
        this.getVendorDetails()
    }

    getVendorDetails = () => {
        let formData = new FormData();
        formData.append('userID', this.state.userID);

        this.authService.getVendorDetails(formData, async (res) => {
            this.setState({
                itemList : res.response.itemlist,
                modifierList : res.response.modifierlist
            })
        });
    }

    notifyMeFunc = () => {
        this.props.navigation.navigate("NotifyMe");
    }

    handleClickNotify = () => {
        this.props.navigation.navigate("ShoppingCart", {
            items : this.state.itemList,
            modifier : this.state.modifierList
        })
    }

    caculateTotalPrice = (id, value) => {
        let tempArray = this.state.priceList
        let priceItem = {id : id, price : value}
        let data = tempArray.filter(filter => filter.id == id)
        let index = tempArray.indexOf(data[0])
        let price = 0
        if(data.length == 0){
            tempArray.push({id : id, price : value})
        }
        else{
            tempArray[index] = priceItem
        }
        tempArray.map(item => {
            price += item.price
        })
        this.setState({
            totalPrice : price,
            priceList : tempArray
        })
    }

    renderItem = ({item, index}) => {
        return(
            <TouchableOpacity
                onPress={() => {
                    this.props.navigation.navigate("RestaurantItem", 
                    {
                        id : item.itemID,
                        userID : item.userID,
                        name : item.item_name,
                        description : item.item_description,
                        price : item.item_price,
                        photo : item.item_photourl,
                        selectedModifierList : item.modifierlist,
                        modifierList : this.state.modifierList,
                        restaurantName: this.state.title,
                        caculate : this.caculateTotalPrice
                    }
                )}}
                style={[styles.itemContainer]}>
                <Text style={styles.item}>{item.item_name}</Text>
                <Text style={styles.item}>${item.item_price}</Text>
            </TouchableOpacity>
        )
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
                                    this.getVendorDetails()
                                }}
                            />   
                        }
                    >
                        <View style={styles.container}>
                            <View style={styles.headerContainer}>
                                <BackButton navigation={this.props.navigation} search={this.props.route.params && this.props.route.params.search} />
                                <View style={styles.headerRightContainer}>
                                    <Text style={styles.headerBlueText}>DELIVERING TO</Text>
                                    <View style={styles.rowContainer}>
                                        <Text style={styles.headerNameText}>New York</Text>
                                        <Entypo name="chevron-thin-down" size={18} color={"#1A2D5A"} style={styles.headerIcon} />
                                    </View>
                                </View>
                            </View>
                            <Header title={this.state.title} />
                            <Image
                                style={styles.mainImage}
                                source={{uri : this.state.logo}} />
                            <Text style={styles.mainGreyText}>{this.state.description}</Text>
                            
                            <FlatList
                                data={this.state.itemList}
                                style = {{marginBottom : 80}}
                                renderItem={this.renderItem}
                                keyExtractor={(item) => { item.index }}
                            />
                           
                            <Button blue={true} title="NOTIFY ME" func={this.notifyMeFunc} />
                        </View>
                    </ScrollView>
                    <CartNotify onClick={this.handleClickNotify}/>
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

export default connect(mapStateToProps, null)(ConfirmCode);