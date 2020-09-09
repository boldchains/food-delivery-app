import React from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

import BackButton from '../../../../components/backButton';
import Header from '../../../../components/headerText';
import Button from '../../../../components/button';
import AsyncStorage  from '@react-native-community/async-storage'

export default class RestaurantItem extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            name : this.props.route.params.name,
            price  : this.props.route.params.price,
            photo : this.props.route.params.photo,
            selectedModifierList : this.props.route.params.selectedModifierList.length > 0 ? this.props.route.params.selectedModifierList.split(',') : [],
            modiferList : this.props.route.params.modifierList,
            itemID : this.props.route.params.id,
            userID : this.props.route.params.userID,
            selectedItem : [],
            totalPrice : parseFloat(this.props.route.params.price)
        }
    }

    componentDidMount() {
    }

    addToBagFunc = () => {
        AsyncStorage.setItem(this.state.itemID, JSON.stringify(this.state.selectedItem))
        this.props.route.params.caculate(this.state.itemID, this.state.totalPrice)
        this.props.navigation.goBack()
    }

    renderItem = ({item, index}) => {
        let checked = this.state.selectedItem.filter(filter => filter.modifierID === item.modifierID && filter.name === item.name && filter.price === item.price).length > 0 ? true : false
        return(
            <View style={styles.rowContainerModifier}>
                <Text style={[styles.greyText, {width: 78}]}>{item.name}</Text>
                <View style={{ flex: 1, alignItems: "center" }}>
                    <Text style={styles.greyText}>...................................</Text>
                </View>
                <Text style={[styles.blackText, { fontSize: 16, marginRight: 12 }]}>{item.price == ''?'' : '+$' + item.price}</Text>
                <TouchableOpacity
                    onPress={() => {
                        if(checked){
                            let price = this.state.totalPrice
                            price -= parseFloat(item.price)
                            let tempArray = this.state.selectedItem.filter(filter => filter.modifierID !== item.modifierID || filter.name !== item.name || filter.price !== item.price)
                            this.setState({
                                selectedItem : tempArray,
                                totalPrice : price
                            })
                        }
                        else{
                            let price = this.state.totalPrice
                            price += parseFloat(item.price)
                            let tempArray = this.state.selectedItem
                            tempArray.push(item)
                            this.setState({
                                selectedItem : tempArray,
                                totalPrice : price
                            })
                        }
                    }}
                    style={[styles.checkBox, { borderWidth: checked ? 0 : 1, backgroundColor: checked ? "#1A2D5A" : "#F9F9F9" }]}>
                    {checked?
                        <MaterialIcons name="done" size={17} color={"white"} /> : null}
                </TouchableOpacity> 
            </View>
        )
    }

    renderModifiers = ({item, index}) => {
        if(this.state.selectedModifierList.length > 0){
            if(this.state.selectedModifierList.includes(item.modifierID)){
                let itemList = item.itemlist.split(' & ')
                let tempArray = []
                itemList.map(eachItem => {
                    tempArray.push({ 
                        name: eachItem.split('/')[0], 
                        price: eachItem.split('/')[1],
                        originPrice :  this.state.price,
                        modifierID : item.modifierID, 
                        modifierName : item.modifier_name,
                        itemName : this.state.name,
                        itemID : this.props.route.params.id, 
                        userID : this.props.route.params.userID 
                    })
                })
                return(
                    <View>
                        <Text style={[styles.blackText, { fontSize: 16, marginTop: 32 }]}>{item.modifier_name}</Text>
                        <View>
                            <FlatList
                                data={tempArray}
                                renderItem={this.renderItem}
                                listKey = {(item, index) => {'C' + index.toString()}}
                            />
                        </View>
                    </View>
                )   
            }
        }
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
                            <Header title="Orders" />
                            <Image
                                style={styles.mainImage}
                                source={{uri : this.state.photo}} />
                            <View style={styles.rowContainer}>
                                <Text style={styles.blackText}>{this.state.name}</Text>
                                <Text style={styles.blackText}>${this.state.price}</Text>
                            </View>
                            <FlatList
                                data={this.state.modiferList}
                                renderItem={this.renderModifiers}
                                style = {{marginBottom : 50}}
                                listKey = {(item, index) => {'P' + index.toString()}}
                            />
                            <Button blue={true} title="ADD TO BAG" func={this.addToBagFunc} />
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}