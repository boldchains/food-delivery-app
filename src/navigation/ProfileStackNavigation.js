import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Home from '../screens/user/account/home';
import Profile from '../screens/user/account/profile';
import Payment from '../screens/user/account/payment';
import Addresses from '../screens/user/account/addresses';
import Support from '../screens/user/account/support';
import PromoCodes from '../screens/user/account/promoCodes';
import BecomeADriver from '../screens/user/account/becomeADriver';
import BecomeAVendor from '../screens/user/account/becomeAVendor';
import VendorHome from '../screens/user/account/vendor/home';
import VendorItems from '../screens/user/account/vendor/items';
import VendorAddItems from '../screens/user/account/vendor/items/addItem';
import VendorModifier from '../screens/user/account/vendor/modifier';
import VendorHours from '../screens/user/account/vendor/hours';
import VendorDescription from '../screens/user/account/vendor/description';
import VendorWebsite from '../screens/user/account/vendor/website';

function ProfileStackNavigation() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Payment" component={Payment} />
            <Stack.Screen name="Addresses" component={Addresses} />
            <Stack.Screen name="Support" component={Support} />
            <Stack.Screen name="VendorHome" component={VendorHome} />
            <Stack.Screen name="VendorItems" component={VendorItems} />
            <Stack.Screen name="VendorAddItems" component={VendorAddItems} />
            <Stack.Screen name="VendorModifier" component={VendorModifier} />
            <Stack.Screen name="VendorHours" component={VendorHours} />
            <Stack.Screen name="VendorDescription" component={VendorDescription} />
            <Stack.Screen name="VendorWebsite" component={VendorWebsite} />
            <Stack.Screen name="PromoCodes" component={PromoCodes} />
            <Stack.Screen name="BecomeADriver" component={BecomeADriver} />
            <Stack.Screen name="BecomeAVendor" component={BecomeAVendor} />
        </Stack.Navigator>
    );
}

export default ProfileStackNavigation;