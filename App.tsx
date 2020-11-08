import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Platform } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import appReducer from './src/store';
import MainNavigator from './src/navigators/MainNavigator';
import { storeToken } from './src/helpers/notification';

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
          storeToken();
        })
        .catch((err) => {
          console.log('Loading font occurs error: ', err);
        });
    }
  });

  const store = createStore(appReducer, applyMiddleware(ReduxThunk));

  return isReady ? (
    <Provider store={store}>
      <SafeAreaView
        style={[
          styles.container,
          Platform.select({
            ios: styles.containerIOS,
            android: styles.containerAndroid,
          }),
        ]}
      >
        <MainNavigator />
      </SafeAreaView>
    </Provider>
  ) : (
    <AppLoading />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerIOS: {
    backgroundColor: 'gray',
    paddingTop: 0,
  },
  containerAndroid: {
    backgroundColor: 'white',
    paddingTop: 25,
  },
});

export default App;
