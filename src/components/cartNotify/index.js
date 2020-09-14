import React from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Badge from '../badge';

import styles from './styles';

class CartNotify extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            auth: this.props.auth,
            cartItems: this.props.cart ? this.props.cart.cartItems : []
        }

    }

    render() {
        return (
            <TouchableOpacity
                onPress = {() => {
                    if (this.props.onClick) {
                        this.props.onClick();
                    }
                }}
                style={styles.bottomShoppingButton}>

                {this.state.cartItems.length != 0 ? 
                    (<View style={styles.cartCountContainer}>
                        <MaterialIcons name="shopping-cart" size={20} color={"white"} />
                        <View style={styles.cartTextGroup}>
                            <Text style={styles.viewCartText}>VIEW CART</Text>
                            <Text style={styles.viewCartText}>{`${this.props.auth.name}'s`}</Text>
                        </View>
                        <Badge count={this.state.cartItems.length} />
                    </View>) : null}

            </TouchableOpacity>
        );
    }
}

const mapStateToProps = (state) => {
    console.log('redux store', state);
    return {
        auth: state.auth,
        cart: state.cart
    };
}

export default connect(mapStateToProps, null)(CartNotify);