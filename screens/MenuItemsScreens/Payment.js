import { StyleSheet, Text, View,TouchableOpacity,SafeAreaView } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import Icon_font from 'react-native-vector-icons/FontAwesome';
import Icon_Mat from 'react-native-vector-icons/MaterialIcons'
import Icon_Father from 'react-native-vector-icons/Feather';
import RoadsMapping from '../MainMap/RoadsMapping'; 
import { useNavigation } from '@react-navigation/native';
import DrawerContents from '../MainMap/DrawerContents';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  TouchableRipple,
  Switch
} from 'react-native-paper';


const Payment = () => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
      drawerLockMode: 'locked-closed',
    });
  }, [navigation]);
  
const navigation = useNavigation();
  return (
   <SafeAreaView style={styles.container}>
<View styles={styles.mainItems}>
<TouchableOpacity onPress={() =>navigation.navigate('Home')}>
  <Icon name="arrowleft"  color='black'size={27}/>
</TouchableOpacity>
<Text style={{
  fontSize:24,
  fontWeight:'500',
color:'black',
marginTop:10
}}>Payments</Text>
<View style={styles.textRegion}>
  <Text style={{
    fontSize:19,
    paddingTop:20,
    paddingLeft:20
  }}>Bolt Balance</Text>
  <Text
  style={{
    paddingLeft:20,
    gap:2
  }}
  >Gh $ 0.00</Text>
  <View style={styles.line} />

  <Text style={{paddingLeft:10,}}>Bolt balance is not available with this payment method</Text>
</View>




<View style={styles.separator}>
  <Text style={styles.heading_Bolt}>What is Bolt Balance?</Text>
  <View style={styles.line} />
  <Text style={styles.subheading}>See Transactions</Text>
</View>





<View style={styles.paymentMethodsContainer}>
  <Text style={styles.heading}>Payment Methods</Text>
  
  <View style={styles.paymentMethodItem}>
    <View style={{
      flexDirection:'row',
      gap:1
    }}>
    <Icon_Mat name='attach-money' color='green' size={25} />
    <Text style={styles.paymentMethodName}>Cash</Text>
    </View>
    <View style={styles.iconContainer}>
      <Icon name='checkcircle' size={27} color='green' />
    </View>
  </View>
  <View style={styles.line} />

  <View style={styles.paymentMethodItem}>
  <View style={{
      flexDirection:'row',
      gap:1
    }}>
    <Icon_font name='credit-card' color='brown' size={25} />
    <Text style={styles.paymentMethodName}>Add debit/credit card</Text>
    </View>
    <View style={styles.iconContainer}>
      <Icon_Mat name='keyboard-arrow-right' color='black' size={25} />
    </View>
  </View>
</View>


<View style={styles.setUpworkContainer}>
<View style={styles.setUpwork}>
  <View style={{flexDirection:'row',gap:1}}>
    <Icon_Father name='briefcase' color='black' size={25} />
    <Text style={styles.setUpworkMethodName}>setup work Profile</Text>
    </View>
    <View style={styles.iconContainersetup}>
      <Icon_Mat name='keyboard-arrow-right' color='black' size={25} />
    </View>
  </View>
  </View>








</View>
   </SafeAreaView>
  )
}

export default Payment

const styles = StyleSheet.create({
  container:{
    marginTop:60,
    flex:1,
    paddingLeft:13,
    paddingRight:13
  },
  textRegion:{
  gap:5,
  marginTop:18,
  backgroundColor:'#F8F8F8',
  borderRadius:5,
  alignItems:'flex-start',
  height:150
  },
    separator: {
      marginTop: 18,
    },
    heading_Bolt: {
      fontSize: 16,
      color:'green'
    },
    line: {
      backgroundColor: 'gray',
      height: 1,
      width: '100%',
      marginVertical: 5,
    },
    subheading: {
      fontSize: 16,
      color:'green'
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
        marginBottom: 10
      },
      paymentMethodName: {
        marginLeft: 10,
        fontSize: 16,
      },
      iconContainer: {
        width: 40,
        alignItems: 'flex-end',
      },
      setUpworkContainer:{
        paddingHorizontal: 20,
        height:50,
        backgroundColor: 'white',
        marginTop:20,
        justifyContent: 'center',
      },
      setUpwork:{
        flexDirection:'row',
        justifyContent: 'space-between',
      gap:1
      },
      setUpworkMethodName:{
       flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10
      }
    

    
  });
