import { StyleSheet, Text, View,SafeAreaView,ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Icon_font from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Font_Material from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Avatar,
} from 'react-native-paper';

const Support = () => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
      drawerLockMode: 'locked-closed',
    });
  }, [navigation]);
  const navigation = useNavigation();
  
  return (
    <ScrollView>
<SafeAreaView style={styles.container}>
<View style={styles.supportHeading}>
  <TouchableOpacity onPress={() =>navigation.navigate('Home')}>
<Icon_font name='close' color='black' size={24} iconStyle={{
  fontWeight:600
}}/>
</TouchableOpacity>
<Text style={{
  fontSize:16,
}}> Get help</Text>
<Text></Text>
</View>



{/**The heading tag for the page */}
<View>
  <Text style={styles.helpHeading}>How can we help?</Text>
</View>

<View>
  <Text style={styles.supportCase}>Support Case</Text>
</View>

{/** the inbox textbox  */}
<View style={styles.chatTextArea}>
  <View style={styles.chatIconText}>
    <TouchableOpacity style={{
      width:30,
      height:30,
      backgroundColor:'#fff',
      borderRadius:50,
      alignItems: 'center',
      justifyContent: 'center',

    }}>
<Font_Material name='comment-text-outline' size={22}/>
    </TouchableOpacity>
    <View>
    <Text style={{
      fontSize:14,
      fontWeight:500,
      color:'black',
    }}>Inbox</Text>
    <Text style={{
      color:'gray',
    }}>View open charts</Text>
  </View>
  </View>
 

  <View>
    <TouchableOpacity>
<Icon_font name='right' size={18}/>
    </TouchableOpacity>
  </View>
</View>
{/** Another section to create about the inbox place */}

<View>
  <Text style={{
    marginTop:25,
    fontSize:14,
    fontWeight:500,
    color:'black',
    marginTop:40,
  }}>Get help with a recent ride</Text>
</View>

{/** another section to display the car and it amounts */}
<View style={styles.chatTextArea}>
  <View style={styles.chatIconText}>
    <TouchableOpacity style={{
      width:30,
      height:30,
      backgroundColor:'#fff',
      borderRadius:50,
      alignItems: 'center',
      justifyContent: 'center',

    }}>
<Avatar.Image source={require('../../assets/istockphoto-485428055-1024x1024.jpg')} size={34}/>
    </TouchableOpacity>
    <View>
    <Text style={{
      fontSize:14,
      fontWeight:500,
      color:'black',
    }}>Inbox</Text>
    <Text style={{
      color:'gray',
    }}>View open charts</Text>
  </View>
  </View>
  <View>
    <TouchableOpacity>
    <Text>GH $ 1000</Text>
    </TouchableOpacity>
  </View>
</View>

<View style={styles.line} />

<View style={styles.chatTextArea}>
  <View style={styles.chatIconText}>
    <TouchableOpacity style={{
      width:45,
      height:45,
      borderRadius:50,
      alignItems: 'center',
      justifyContent: 'center',

    }}>
{/* <Font_Material name='comment-text-outline' size={22}/> */}
<Avatar.Image source={require('../../assets/istockphoto-485428055-1024x1024.jpg')} size={34}/>
    </TouchableOpacity>
    <View>
    <Text style={{
      fontSize:14,
      fontWeight:500,
      color:'black',
    }}>Inbox</Text>
    <Text style={{
      color:'gray',
    }}>View open charts</Text>
  </View>
  </View>
  <View>
    <TouchableOpacity>
<Text>GH $ 1000</Text>
    </TouchableOpacity>
  </View>
</View>



<Text
style={{
  marginTop:30,
  color:'#009040',
  fontSize:14
}}
>Select an older ride</Text>


<View>
  <Text style={{
    fontSize:14,
    fontWeight:500,
    color:'black',
    marginTop:30,
  }}>Get help with a recent ride</Text>
</View>

{/** The last section  */}
<View style={styles.belowItems}>
  <View style={styles.belowItemsList}>
    <Text>About Bolt</Text>
    <Icon_font name='right' size={22}/>
  </View>
  <View style={styles.line} />
  <View style={styles.belowItemsList}>
    <Text>App and Features</Text>
    <Icon_font name='right' size={22}/>
  </View>
  <View style={styles.belowItemsList}>
    <Text>Account and Data</Text>
    <Icon_font name='right' size={22}/>
  </View>
  <View style={styles.line} />
  <View style={styles.belowItemsList}>
    <Text>Payment and Pricing</Text>
    <Icon_font name='right' size={22}/>
  </View>
  <View style={styles.line} />
  <View style={styles.belowItemsList}>
    <Text>Using Bolt</Text>
    <Icon_font name='right' size={22}/>
  </View>
</View>


</SafeAreaView>
</ScrollView>

    )
}

export default Support

const styles = StyleSheet.create({
  container:{
    marginTop:60,
    flex:1,
    paddingLeft:13,
    paddingRight:13,
  },
  supportHeading:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
    },
    helpHeading:{
      fontSize:24,
      marginTop:40,
      fontWeight:500,
    },
    supportCase:{
      marginTop:20,
      fontSize:16,
      fontWeight:500,
      color:'black',
    },
    chatTextArea:{
      flexDirection:'row',
      alignItems:'center',
      gap:10,
      justifyContent:'space-between',
      marginTop:15
    },
    chatIconText:{
      flexDirection:'row',
      alignItems:'center',
      gap:10,
      justifyContent:'space-between',
    },
    line: {
      backgroundColor: 'gray',
      height: 1,
      width: '100%',
      marginTop: 10,
      gap:5,
    },
    belowItems:{
      
    },
    belowItemsList:{
      flexDirection:'row',
      justifyContent:'space-between',
      marginTop:20,
      gap:15,
    }
})