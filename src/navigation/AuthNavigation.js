import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Welcome from '../screens/auth/welcome';
import SignUp from '../screens/auth/signUp';

function AuthNavigation() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {/* <Stack.Screen name="Welcome" component={Welcome} /> */}
            <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
    );
}

export default AuthNavigation;