import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthNavigation from './AuthNavigation';

function App() {
    return (
        <NavigationContainer>
            <AuthNavigation />
        </NavigationContainer>
    );
}

export default App;