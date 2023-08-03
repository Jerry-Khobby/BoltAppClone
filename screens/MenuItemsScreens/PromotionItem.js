import { StyleSheet, Text, View,SafeAreaView,ScrollView,StatusBar,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Icon_font from 'react-native-vector-icons/AntDesign';
//import { TouchableOpacity } from 'react-native-gesture-handler';
import Font_Material from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Avatar,
} from 'react-native-paper';

const PromotionItem = () => {
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
    <TouchableOpacity onPress={() =>navigation.navigate('Home')}>
  <Icon_font name='arrowleft' color='black' size={24} iconStyle={{
    fontWeight:600
  }}/>
  </TouchableOpacity>
  <Text style={{
    fontSize:27,
    fontWeight:600,
    color:'black'
  }}>Promotions</Text>
  </View>
  <View style={styles.EnterCodeHeading}>
    <TouchableOpacity style={styles.EnterCodeText} onPress={{}}>
      <Icon_font name="tago"  color="black" size={24}/> 
      <Text style={{
        fontSize:16,
        fontWeight:400,
        color:'black',
      }}>Enter Promo code</Text>
    </TouchableOpacity>
    <View>
      <TouchableOpacity>
    <Icon_font name='right' size={18} color='black'/>
    </TouchableOpacity>
    </View>
  </View>

<View style={{
  backgroundColor: '#F4F4F4',
  height:8,
  width:390,
  marginTop:14,
}}/>

<View style={styles.bottomTextIcon}>
<View style={{
      backgroundColor: '#989898',
      justifyContent: 'center',
      alignItems: 'center',
      width: 24,
      height: 24,
      borderRadius: 12,
    }}>
      <Icon_font name="tago" color="black" size={24} />
    </View>
<View style={{alignItems:'center'}}>
  <Text style={{
    fontWeight:500,
    lineHeight:20,
    fontSize:14
  }}>Your promotions </Text>
  <Text style={{
    fontWeight:500,
    lineHeight:20,
    fontSize:14
  }}>will appear here </Text>
</View>
</View>
  </SafeAreaView>
  )
}

export default PromotionItem

const styles = StyleSheet.create({
  container:{
    marginTop:60,
    flex:1,
    paddingLeft:13,
    paddingRight:13,
  },
  supportHeading:{
    justifyContent:'space-between',
    gap:12
  },
  EnterCodeHeading:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:26
  },
  EnterCodeText:{
    alignContent:'center',
    justifyContent:'space-between',
    flexDirection:'row',
    gap:8
  },
  bottomTextIcon:{
    alignItems:'center',
    justifyContent:'center',
    marginVertical:250,
    gap:10
  }
})