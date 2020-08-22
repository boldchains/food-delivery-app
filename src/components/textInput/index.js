import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { connect } from 'react-redux';
import { inputField } from '../../redux/actions';
import styles from './styles';

class TextInputField extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            input: this.props.input
        }
    }

    componentDidMount = () => {
        console.log("TextInput[DidMount]: ", this.state);
    }

    componentDidUpdate = () => {
        console.log("TextInput[DidUpdate]: ", this.state);
    }

    render() {
        return (
            <View style={styles.inputFieldContainer}>
                {this.props.errorMessage || this.props.errorMessage2 ?
                    <Text style={styles.errorMessage}>{this.props.errorMessage}{this.props.errorMessage2}</Text> : null}
                {/* {this.state.input.length > 0 ?
                    <Text style={styles.smallPlaceholder}>{this.props.placeholder}</Text> : null} */}
                <TextInput
                    maxLength={this.props.max}
                    keyboardType={this.props.type}
                    secureTextEntry={this.props.secure}
                    placeholder={this.props.placeholder}
                    placeholderTextColor="#9B9B9B"
                    onChangeText={input => this.props.inputField(this.props.state, input)}
                    style={styles.inputField} />
            </View>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
    };
}

export default connect(mapStateToProps, { inputField })(TextInputField);