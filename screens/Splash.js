import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';




const SplashScreen = ({navigation}) => {
  useEffect(() => {
    // Simulating a 10-second delay for the splash screen
    const timer = setTimeout(() => {
      // Navigate to the main screen or desired screen
      navigation.navigate("login");
    }, 3000); // 10 seconds in milliseconds

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []);

  return (
    <View style={styles.container}>
      {/* Add your splash screen image or content */}
      <Image source={require('../assets/image.png')} style={styles.image} />
    </View>
  );
};


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: windowWidth,
    height: '100%',
    //resizeMode: 'contain',
  },
});

export default SplashScreen;





/*
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, World!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default App;
*/
