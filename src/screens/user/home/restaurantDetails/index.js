import React from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView, Image, TouchableOpacity } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

import styles from './styles';

import BackButton from '../../../../components/backButton';
import Header from '../../../../components/headerText';
import InputField from '../../../../components/textInput';
import Button from '../../../../components/button';

export default class ConfirmCode extends React.Component {

    notifyMeFunc = () => {
        this.props.navigation.navigate("NotifyMe");
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
                                    onPress={() => this.props.navigation.navigate("ShoppingCart")}
                                    style={styles.headerShoppingButton}>
                                    <Text style={styles.choppingBagPrice}>$10.99</Text>
                                    <SimpleLineIcons name="handbag" size={18} color={"#1A2D5A"} />
                                </TouchableOpacity>
                            </View>
                            <Header title="The NoMad Restaurant" />
                            <Image
                                style={styles.mainImage}
                                source={require("../../../../../assets/images/slika1.png")} />
                            <Text style={styles.mainGreyText}>Lorem Ipsus is simply dummy text  of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown</Text>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate("RestaurantItem")}
                                style={styles.itemContainer}>
                                <Text style={styles.item}>Chesse Burger</Text>
                                <Text style={styles.item}>$10</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate("RestaurantItem")}
                                style={[styles.itemContainer, { marginBottom: 112 }]}>
                                <Text style={styles.item}>Hamburger</Text>
                                <Text style={styles.item}>$99</Text>
                            </TouchableOpacity>
                            <Button blue={true} title="NOTIFY ME" func={this.notifyMeFunc} />
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}