import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

export default class HeaderText extends React.Component {

    render() {
        return (
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Restaurant")}
                style={styles.container}>
                <Text style={styles.dayText}>{this.props.day}</Text>
                <Text style={styles.dateText}>{this.props.date}</Text>
                <Image
                    style={styles.restaurantImage}
                    source={require("../../../assets/icons/mcIcon.png")} />
                <Text style={styles.restaurantName}>Restauran Name</Text>
            </TouchableOpacity>
        );
    }
}