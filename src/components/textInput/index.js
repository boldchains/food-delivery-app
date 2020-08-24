import React from 'react';
import { Text, TextInput, Pressable } from 'react-native';
import { connect } from 'react-redux';
import { inputField } from '../../redux/actions';
import styles from './styles';

class TextInputField extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Pressable
                onPress={() => this.input.focus()}
                style={styles.inputFieldContainer}>
                {this.props.errorMessage || this.props.errorMessage2 ?
                    <Text style={styles.errorMessage}>{this.props.errorMessage}{this.props.errorMessage2}</Text> : null}
                {this.props.input !== "" ?
                    <Text style={styles.smallPlaceholder}>{this.props.placeholder}</Text> : null}
                <TextInput
                    ref={(input) => { this.input = input; }}
                    maxLength={this.props.max}
                    keyboardType={this.props.type}
                    secureTextEntry={this.props.secure}
                    placeholder={this.props.placeholder}
                    placeholderTextColor="#9B9B9B"
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={this.props.input}
                    onChangeText={input => this.props.inputField(this.props.state, input)}
                    style={[styles.inputField, { paddingRight: this.props.paddingRight ? 20 : 0 }]} />
            </Pressable>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
    };
}

export default connect(mapStateToProps, { inputField })(TextInputField);