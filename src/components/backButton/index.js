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
                onPress={() => {
                    if (this.props.search)
                        this.props.navigation.reset({
                            index: 0,
                            routes: [{ name: 'Search' }],
                        });
                    else
                        this.props.navigation.goBack();
                }}
                style={styles.button}>
                <Entypo name="chevron-thin-left" size={20} color={"#1A2D5A"} />
            </TouchableOpacity>
        );
    }
}