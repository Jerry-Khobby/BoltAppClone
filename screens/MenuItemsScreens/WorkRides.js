import { StyleSheet, Text, View,SafeAreaView,ScrollView,TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Icon_font from 'react-native-vector-icons/AntDesign';
//import { TouchableOpacity } from 'react-native-gesture-handler';
import Font_Material from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/AntDesign'
import Icon_Mat from 'react-native-vector-icons/MaterialIcons'
import Icon_Father from 'react-native-vector-icons/Feather';
import Icon_Ento from 'react-native-vector-icons/Entypo';
import Icon_Ion from 'react-native-vector-icons/Ionicons';
import {
  Avatar,
} from 'react-native-paper';

const WorkRides = () => {
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
  }}>Work Profile</Text>
  </View>
<View>
  <View style={styles.paymentMethodItem}>
    <View style={{
      flexDirection:'row',
      gap:1
    }}>
    <Icon_Ento name='briefcase' color='#5C5C5C' size={25} />
    <Text style={styles.paymentMethodName}>Add company Details</Text>
    </View>
    <View style={styles.iconContainer}>
      <Icon_Mat name='keyboard-arrow-right' size={27} color='black' />
    </View>
  </View>
 


  <View style={styles.paymentMethodItem}>
    <View style={{
      flexDirection:'row',
      gap:1
    }}>
    <Icon_Ento name='mail' color='#5C5C5C' size={25} />
    <Text style={styles.paymentMethodName}>Rate the App</Text>
    </View>
    <View style={styles.iconContainer}>
      <Icon_Mat name='keyboard-arrow-right' size={27} color='black' />
    </View>
  </View>
  


  <View style={styles.paymentMethodItem}>
    <View style={{
      flexDirection:'row',
      gap:1
    }}>
    <Icon_Ion name='card' color='#5C5C5C' size={25} />
    <Text style={styles.paymentMethodName}>Add payment Method</Text>
    </View>
    <View style={styles.iconContainer}>
      <Icon_Mat name='keyboard-arrow-right' size={27} color='black' />
    </View>
  </View>
  


  <View style={styles.paymentMethodItem}>
    <View style={{
      flexDirection:'row',
      gap:1
    }}>
    <Icon_Father name='bar-chart-2' color='#5C5C5C' size={25} />
    <Text style={styles.paymentMethodName}>Reports</Text>
    </View>
    <View style={styles.iconContainer}>
      <Icon_Mat name='keyboard-arrow-right' size={27} color='black' />
    </View>
  </View>

  <View style={styles.paymentMethodItem}>
    <View style={{
      flexDirection:'row',
      gap:1
    }}>
    <Icon_Father name='bar-chart-2' color='#5C5C5C' size={25} />
    <Text style={styles.paymentMethodName}>Add expense Provider</Text>
    </View>
    <View style={styles.iconContainer}>
      <Icon_Mat name='keyboard-arrow-right' size={27} color='black' />
    </View>
  </View>
 
  </View>




  </SafeAreaView>
  )
}

export default WorkRides

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