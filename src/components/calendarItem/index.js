import React from 'react';
import { Text, View, Image } from 'react-native';

import styles from './styles';

export default class HeaderText extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.dayText}>{this.props.day}</Text>
                <Text style={styles.dateText}>{this.props.date}</Text>
                <Image
                    style={styles.restaurantImage}
                    surce={require("../../../assets/images/slika1.png")} />
                <Text style={styles.restaurantName}>Restauran Name</Text>
            </View>
        );
    }
}