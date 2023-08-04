import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import MainStackRouter from './routes/MainStackRouter';



//we have to import my store  

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
          <MainStackRouter />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;
