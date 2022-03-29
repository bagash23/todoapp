import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider, useSelector} from 'react-redux';
import store from './Redux/store';
import {LogBox, StatusBar} from 'react-native';
import Router from './Router';
import {Loading} from './components/atom';


const MainApp = () => {
  const stateGlobal = useSelector(state => state);
  LogBox.ignoreAllLogs();
  return (
    <>
      <NavigationContainer>
        <StatusBar
          backgroundColor="white"
          barStyle="dark-content"
          hidden={false}
        />
        <Router />
      </NavigationContainer>
      {stateGlobal.loading && <Loading />}

    </>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
        hidden={false}
      />
      <MainApp />
    </Provider>
  );
};

export default App;
