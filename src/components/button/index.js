import React from 'react';
import { Text, TouchableOpacity, ActivityIndicator } from 'react-native';

import styles from './styles';

export default class Button extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity
                onPress={() => this.props.func()}
                style={[styles.container, { backgroundColor: this.props.blue ? "#74CCDC" : "#DEDEDF" }]}>
                {this.props.loading ?
                    <ActivityIndicator size="small" color="white" /> :
                    <Text style={[styles.title, { color: this.props.blue ? "white" : "#1A2D5A" }]}>{this.props.title}</Text>}
            </TouchableOpacity>
        );
    }
}