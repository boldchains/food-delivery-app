import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import styles from './styles';

export default class BackButtton extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity
                onPress={() => this.props.navigation.goBack()}
                style={styles.button}>
                <Entypo name="chevron-thin-left" size={20} color={"#333333"} />
            </TouchableOpacity>
        );
    }
}