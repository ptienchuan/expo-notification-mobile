import React, { useState, useEffect, EffectCallback } from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import MainNavigator from './src/navigators/MainNavigator';

function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!isReady) {
      Font.loadAsync({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      })
        .then(() => {
          setIsReady(true);
        })
        .catch((err) => {
          console.log('Loading font occurs error: ', err);
        });
    }
  });

  return isReady ? <MainNavigator /> : <AppLoading />;
}

export default App;
