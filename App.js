import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import MainStackRouter from './routes/MainStackRouter';
import { OriginContextProvider, DestinationContextProvider } from './context/context';
//import {Provider} from "react-redux";


//we have to import my store  

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
        <OriginContextProvider>
      <DestinationContextProvider>
          <MainStackRouter />
      </DestinationContextProvider>
        </OriginContextProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;
