import React from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

import styles from './styles';

import BackButton from '../../../../components/backButton';
import Header from '../../../../components/headerText';
import InputField from '../../../../components/textInput';
import Button from '../../../../components/button';

import AuthService from '../../../../services/AuthServices';
import { connect } from 'react-redux';

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
            modifierList : []
        }
    }

    componentDidMount() {
        this.getVendorDetails()
    }

    getVendorDetails = () => {
        let formData = new FormData();
        // formData.append('userID', this.state.userID);
        formData.append('userID', '1');

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
                        modifierList : this.state.modifierList
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
                    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                        <View style={styles.container}>
                            <View style={styles.headerContainer}>
                                <BackButton navigation={this.props.navigation} search={this.props.route.params && this.props.route.params.search} />
                                <TouchableOpacity
                                    onPress={() => 
                                        this.props.navigation.navigate("ShoppingCart", {

                                        })
                                    }
                                    style={styles.headerShoppingButton}>
                                    <Text style={styles.choppingBagPrice}>$10.99</Text>
                                    <SimpleLineIcons name="handbag" size={18} color={"#1A2D5A"} />
                                </TouchableOpacity>
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