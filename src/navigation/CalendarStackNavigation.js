import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Home from '../screens/user/calendar/home';
import NotifyMe from '../screens/user/home/notifyMe';

function CalendarStackNavigation() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="NotifyMe" component={NotifyMe} />
        </Stack.Navigator>
    );
}

export default CalendarStackNavigation;