import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

class Badge extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: this.props.count
        }
    }

    render() {
        return (
            <View style={styles.circleBadge}>
                <Text style={styles.badgeCount}>{this.state.count && this.state.count}</Text>
            </View>
        );
    }
}

export default Badge;