import React from 'react';
import { View, Modal, Image, Text } from 'react-native';

import styles from './styles';

export default class WelcomeHomeModal extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            visible: true
        }
    }

    componentDidMount = () => {
        console.log("WelcomeModal[DidMount]");
        setTimeout(() => {
            this.setState({ visible: false });
        }, 5000);
    }

    closeModal = () => {
        console.log("Pozivamo funkciju za gasenje modala");
        setTimeout(() => { this.setState({ visible: false }) }, 1000)
    }

    render() {
        return (
            <Modal
                animationType="fade"
                transparent={true}
                visible={this.state.visible}>
                <View style={styles.modalMainContainer}>
                    <View style={styles.container}>
                        <Image
                            style={styles.logo}
                            source={require("../../../assets/icons/welcomeLogo.png")} />
                        <Text style={styles.text}>{this.props.login ? "Welcome Back to" : "Welcome to"}</Text>
                        <Text style={styles.text}>DeliverEaze</Text>
                    </View>
                </View>
            </Modal>
        );
    }
}