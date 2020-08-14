import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Home from '../screens/user/account/home';
import Profile from '../screens/user/account/profile';
import Payment from '../screens/user/account/payment';
import Addresses from '../screens/user/account/addresses';
import Support from '../screens/user/account/support';

function ProfileStackNavigation() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Payment" component={Payment} />
            <Stack.Screen name="Addresses" component={Addresses} />
            <Stack.Screen name="Support" component={Support} />
        </Stack.Navigator>
    );
}

export default ProfileStackNavigation;