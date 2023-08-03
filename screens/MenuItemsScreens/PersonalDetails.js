import { StyleSheet, Text, View,SafeAreaView,ScrollView,StatusBar,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Icon_font from 'react-native-vector-icons/AntDesign';
//import { TouchableOpacity } from 'react-native-gesture-handler';
import Font_Material from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Avatar,
} from 'react-native-paper';

const PersonalDetails = () => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
      drawerLockMode: 'locked-closed',
    });
  }, [navigation]);
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.supportHeading}>
        <View>
    <TouchableOpacity onPress={() =>navigation.navigate('Home')}>
  <Icon_font name='arrowleft' color='black' size={24} iconStyle={{
    fontWeight:600
  }}/>
  </TouchableOpacity>
  </View>
  <View>
    <Text style={{
      color:'green',
      fontSize:15,
      fontWeight:'600'
    }}>Edit</Text>
  </View>
  </View>
   
   {/** the second part of the edit  */}
   <View style={styles.ImageAndText} >
    <View>
      {/** the imae part of the screen  */}
      <Avatar.Image source={require('../../assets/photo_2023-03-24_06-46-42.jpg')} size={80} />
      </View>
    <View style={{gap:8}}>
      <Text style={{
        fontSize:25,
        color:'black',
        fontWeight:'500',
      }}>Jerry Khobby</Text>
      <Text style={{
        fontSize:14,
        color:'#5C5C5C',
        fontWeight:400
        }}>+233-24-399-7081</Text>
    </View>
   </View>
   <View style={styles.line} />

   <View>

   </View>
      
</SafeAreaView>

  )
}

export default PersonalDetails

const styles = StyleSheet.create({
container:{
      marginTop:60,
      flex:1,
      paddingLeft:13,
      paddingRight:13,
},
text:{
    fontSize:23,
    alignItems:'center',
    justifyContent:'center'
},
supportHeading:{
  justifyContent:'space-between',
  alignItems:'center',
  flexDirection:'row'
},
ImageAndText:{
  marginTop:18,
  paddingLeft:6,
  flexDirection:'row',
  gap:20
},
line: {
  backgroundColor:'#5C5C5C',
  height: 1,
  width: '100%',
  marginTop: 15,
  gap:5,
},
})