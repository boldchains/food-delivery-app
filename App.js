import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';

import CoreNavigation from './src/navigation/CoreNavigation';

const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <CoreNavigation />
  );
};

export default App;