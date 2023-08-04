import { StyleSheet, Text, View,SafeAreaView,ScrollView,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Icon_font from 'react-native-vector-icons/AntDesign';
//import { TouchableOpacity } from 'react-native-gesture-handler';
import Font_Material from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/AntDesign'
import Icon_Mat from 'react-native-vector-icons/MaterialIcons'
import Icon_Father from 'react-native-vector-icons/Feather';
import {
  Avatar,
} from 'react-native-paper';

const About = ({navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
      drawerLockMode: 'locked-closed',
    });
  }, [navigation]);
  //const navigation = useNavigation();
  return (
    <ScrollView>
    <SafeAreaView style={styles.container}>
    <View style={styles.supportHeading}>
  <TouchableOpacity onPress={() =>navigation.navigate('Home')}>
<Icon_font name='arrowleft' color='black' size={24} iconStyle={{fontWeight:600}}/>
</TouchableOpacity>
<Text style={{fontSize:23,fontWeight:600,color:'black',}}>About</Text>
</View>
<View style={{marginTop:15}}>
  <Text style={{fontSize:14,color:'#5C5C5C'}}>Version CI.70.0 (91896739)</Text>
</View>
<View style={styles.paymentMethodItem}>
    <View style={{flexDirection:'row',gap:1}}>
    <Icon name='staro' color='black' size={25} />
    <Text style={styles.paymentMethodName}>Rate the App</Text>
    </View>
    <View style={styles.iconContainer}>
      <Icon_Mat name='keyboard-arrow-right' size={27} color='black' />
    </View>
  </View>
  <View style={styles.line} />

  {/** second one */}
  <View style={styles.paymentMethodItem}>
    <View style={{
      flexDirection:'row',
      gap:1
    }}>
    <Icon name='like2' color='black' size={25} />
    <Text style={styles.paymentMethodName}>Like us on Facebook</Text>
    </View>
    <View style={styles.iconContainer}>
      <Icon_Mat name='keyboard-arrow-right' size={27} color='black' />
    </View>
  </View>
  <View style={styles.line} />
  {/**  third  */}
  <View style={styles.paymentMethodItem}>
    <View style={{
      flexDirection:'row',
      gap:1
    }}>
    <Icon_Father name='briefcase' color='black' size={25} />
    <Text style={styles.paymentMethodName}>Solutions for work rides</Text>
    </View>
    <View style={styles.iconContainer}>
      <Icon_Mat name='keyboard-arrow-right' size={27} color='black' />
    </View>
  </View>
  <View style={styles.line} />
  {/** fourth one  */}
  <View style={styles.paymentMethodItem}>
    <View style={{flexDirection:'row',gap:1}}>
    <Icon name='hearto' color='black' size={25} />
    <Text style={styles.paymentMethodName}>Careers at Bolt</Text>
    </View>
    <View style={styles.iconContainer}>
      <Icon_Mat name='keyboard-arrow-right' size={27} color='black' />
    </View>
  </View>
  <View style={styles.line} />

  {/** fifth one  */}
  <View style={styles.paymentMethodItem}>
    <View style={{
      flexDirection:'row',
      gap:1
    }}>
    <Icon_Father name='home' color='black' size={25} />
    <Text style={styles.paymentMethodName}>legal</Text>
    </View>
    <View style={styles.iconContainer}>
      <Icon_Mat name='keyboard-arrow-right' size={27} color='black' />
    </View>
  </View>
  <View style={styles.line} />
</SafeAreaView>
   </ScrollView>
  )
}

export default About

const styles = StyleSheet.create({
   container:{
  marginTop:60,
  flex:1,
  paddingLeft:13,
  paddingRight:13,
},
supportHeading:{
  justifyContent:'space-between',
  gap:10
},

paymentMethodsContainer: {
  paddingHorizontal: 20,
  paddingTop: 20,
  backgroundColor: 'white',
  marginTop:20
},
heading: {
  fontSize: 20,
  fontWeight: '500',
  marginBottom: 10,
},
paymentMethodItem: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop:15,
  height:35
},
paymentMethodName: {
  marginLeft: 10,
  fontSize: 16,
  justifyContent: 'center',
},
line: {
  backgroundColor: 'gray',
  height: 1,
  width: '100%',
  marginVertical: 5,
},



})