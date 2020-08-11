import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default class Button extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={[styles.container, { backgroundColor: this.props.blue ? "#2F80ED" : "#DEDEDF" }]}>
                <Text style={[styles.title, { color: this.props.blue ? "white" : "#333333" }]}>{this.props.title}</Text>
            </View>
        );
    }
}