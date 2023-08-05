import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import MainStackRouter from './routes/MainStackRouter';
import {Provider} from 'react-redux';
import store from './reducers/store';
import {OriginContextProvider,DestinationContext} from './context/context'



//we have to import my store  

const App = () => {
  return (
    <Provider store={store}>
    <SafeAreaView style={{ flex: 1 }}>
        <MainStackRouter />
    </SafeAreaView>
  </Provider>
  );
}

const styles = StyleSheet.create({});

export default App;
