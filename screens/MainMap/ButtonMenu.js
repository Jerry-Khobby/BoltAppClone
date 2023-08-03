import React from 'react';
import { TouchableOpacity, SafeAreaView,StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
 // Import Ionicons or relevant icon library


const Togglerbutton = ({navigation}) => {

  // const navigation = useNavigation();
  

  return (
    <SafeAreaView style={{
      position:'absolute',
      left:20,
      top:20,
    }}>
      <TouchableOpacity onPress={()=>navigation.openDrawer()} style={styles.roadMenu}>
        <Ionicons name="ios-menu-outline" size={35} color="black" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Togglerbutton; 




const styles = StyleSheet.create({
    roadMenu:{
      top:25,
      left:20,
      backgroundColor:'#fff',
      height:50,
      width:50,
      alignItems:'center',
      justifyContent:'center',
      borderRadius:100,
    }
  })// import
