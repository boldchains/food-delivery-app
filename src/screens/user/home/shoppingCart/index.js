import React from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView, Image, TouchableOpacity } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Entypo from 'react-native-vector-icons/Entypo';

import styles from './styles';

import BackButton from '../../../../components/backButton';
import Header from '../../../../components/headerText';
import Button from '../../../../components/button';

import AsyncStorage from '@react-native-community/async-storage'
import { FlatList } from 'react-native-gesture-handler';

export default class RestaurantItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            itemList : [],
            showTimePicker: false,
            time: new Date("2020-08-14T09:47:10.842Z"),
            totalPrice : ''
        }
    }

    componentDidMount() {
        this.getItemsFromStorage()
    }

    getItemsFromStorage = async() => {
        let keys = await AsyncStorage.getAllKeys()
        let savedItemList = await AsyncStorage.multiGet(keys)
        let items = []
        let price = 0
        savedItemList.map(savedItem => {
            let temp = JSON.parse(savedItem[1])
            items.push(temp)
            price += parseFloat(temp[0].originPrice)
            temp.map(item => {
                price += parseFloat(item.price)
            })
        })
        this.setState({
            itemList : items,
            totalPrice : price.toFixed(2)
        })
    }

    paymentFunc = () => {
        this.props.navigation.navigate("Payment");
    }

    parseTime = () => {
        let zone;
        let hours = this.state.time.getHours();
        let minutes = this.state.time.getMinutes();

        if (this.state.time.getHours() > 11) {
            zone = "PM";
            hours = hours - 12
        }
        else
            zone = "AM";
        return hours + ":" + minutes + " " + zone;
    }

    rendorItem = ({item, index}) => {
        let price = parseFloat(item[0].originPrice)
        item.map(value => {
            price += parseFloat(value.price)
        })
        return(
            <View>
                <View style={styles.rowContainerModifier}>
                    <Text style={styles.blackText}>{item[0].itemName}</Text>
                    <View style={{ flex: 1, alignItems: "center" }}>
                        <Text style={styles.greyText}>................</Text>
                    </View>
                    <Text style={styles.blackText}>${price.toFixed(2)}</Text>
                </View>
                {
                    item.map(value => {
                        return <Text style={styles.greyText}>{value.modifierName}</Text>
                    })
                }
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
                            <Header title="Items" />
                            <FlatList
                                data = {this.state.itemList}
                                renderItem = {this.rendorItem}
                                keyExtractor = {item => item.id}
                            />
                            <Text style={[styles.blackText, { fontSize: 16, marginTop: 32 }]}>Delivery Time</Text>

                            <TouchableOpacity
                                onPress={() => this.setState({ showTimePicker: true })}
                                style={styles.deliveryTimeContainer}>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <Text style={styles.deliveryTimeBlack}>{this.parseTime()}</Text>
                                    <Text style={styles.greyTime}>(10:30 order cut off)</Text>
                                </View>

                                <Entypo name="chevron-thin-down" size={20} color={"#333333"} />
                            </TouchableOpacity>

                            <DateTimePickerModal
                                date={this.state.time}
                                isVisible={this.state.showTimePicker}
                                mode="time"
                                onConfirm={time => {
                                    this.setState({ time: time, showTimePicker: false })
                                }}
                                onCancel={() => this.setState({ showTimePicker: false })}
                            />

                            <Text style={[styles.blackText, { fontSize: 16, marginTop: 32 }]}>Total</Text>
                            <View style={{ marginBottom: 35 }}>
                                <View style={styles.rowContainerModifier}>
                                    <Text style={styles.greyText}>Promo Code:</Text>
                                    <View style={{ flex: 1, alignItems: "center" }}>
                                        <Text style={styles.greyText}>................</Text>
                                    </View>
                                    <Text style={styles.blackText}>Promo Code</Text>
                                </View>
                                <View style={styles.rowContainerModifier}>
                                    <Text style={styles.greyText}>Sub Total:</Text>
                                    <View style={{ flex: 1, alignItems: "center" }}>
                                        <Text style={styles.greyText}>................</Text>
                                    </View>
                                    <Text style={styles.blackText}>$0.00</Text>
                                </View>
                                <View style={styles.rowContainerModifier}>
                                    <Text style={styles.greyText}>Taxes:</Text>
                                    <View style={{ flex: 1, alignItems: "center" }}>
                                        <Text style={styles.greyText}>................</Text>
                                    </View>
                                    <Text style={styles.blackText}>$0.00</Text>
                                </View>
                                <View style={styles.rowContainerModifier}>
                                    <Text style={styles.greyText}>Delivery:</Text>
                                    <View style={{ flex: 1, alignItems: "center" }}>
                                        <Text style={styles.greyText}>................</Text>
                                    </View>
                                    <Text style={styles.blackText}>$0.00</Text>
                                </View>
                            </View>
                            <Button blue={true} title = {"CONTINUE $" + this.state.totalPrice} func={this.paymentFunc} />
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}