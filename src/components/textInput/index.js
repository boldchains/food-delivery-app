import React from 'react';
import { Text, TextInput, View } from 'react-native';

import styles from './styles';

export default class TextInputField extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            input: ""
        }
    }

    render() {
        return (
            <View style={styles.inputFieldContainer}>
                {this.state.input.length > 0 ?
                    <Text style={styles.smallPlaceholder}>{this.props.placeholder}</Text> : null}
                <TextInput
                    secureTextEntry={this.props.secure}
                    placeholder={this.props.placeholder}
                    placeholderTextColor="#9B9B9B"
                    value={this.state.input}
                    onChangeText={input => this.setState({ input })}
                    style={styles.inputField} />
            </View>

        );
    }
}