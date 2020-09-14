import React from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView, ScrollView, Platform, Image } from 'react-native';

import styles from './styles';

import Header from '../../../../components/headerText';
import OrderItem from '../../../../components/orderItem';
import CartNotify from '../../../../components/cartNotify';

export default class Home extends React.Component {

    render() {
        return (
            <SafeAreaView style={styles.safeAreaContainer}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : null}
                    style={[styles.container, { paddingVertical: 0 }]}>
                    <ScrollView contentContainerStyle={{ paddingHorizontal: 15 }}>
                        <View style={styles.container}>
                            <Header title="Orders" />
                            <Image
                                style={styles.mainImage}
                                source={require("../../../../../assets/images/slika1.png")} />
                            <Text style={styles.boldText}>Current Orders</Text>

                            <OrderItem number={1} price={10} navigation={this.props.navigation} />
                            <Text style={styles.boldText}>Past Orders</Text>
                            <OrderItem number={2} price={12} navigation={this.props.navigation} />
                        </View>
                    </ScrollView>
                    <CartNotify />
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}