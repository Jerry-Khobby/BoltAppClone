import { StyleSheet, Text, View,SafeAreaView,ScrollView,StatusBar,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Icon_font from 'react-native-vector-icons/AntDesign';
//import { TouchableOpacity } from 'react-native-gesture-handler';
import Font_Material from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Avatar,
} from 'react-native-paper';

const Rides = () => {
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
<Icon_font name='arrowleft' color='black' size={24} iconStyle={{
  fontWeight:600
}}/>
</TouchableOpacity>
<Text style={{
  fontSize:23,
  fontWeight:'600',
  color:'black'
}}>My rides</Text>
</View>
<View style={{
  marginTop:10
}}>
<Text style={{
  fontSize:13,
  fontWeight:'500',
}}>Oct 2022</Text>
</View>
{/** the remaining  */}

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
      fontWeight:'500',
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
      fontWeight:'500',
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

{/** september will use this one  */}
<View style={{
  marginTop:10
}}>
<Text style={{
  fontSize:13,
  fontWeight:'500',
}}>Sept 2022</Text>
</View>
{/** the remaining  */}

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
      fontWeight:'500',
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
      fontWeight:'500',
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

{/** december own */}
<View style={{
  marginTop:10
}}>
<Text style={{
  fontSize:13,
  fontWeight:'500',
}}>Dec 2022</Text>
</View>
{/** the remaining  */}

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
      fontWeight:'500',
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
      fontWeight:'500',
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

{/** January*/}
<View style={{
  marginTop:10
}}>
<Text style={{
  fontSize:13,
  fontWeight:'500',
}}>Jan 2023</Text>
</View>
{/** the remaining  */}

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
      fontWeight:'500',
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
      fontWeight:'500',
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

{/** February */}

<View style={{
  marginTop:10
}}>
<Text style={{
  fontSize:13,
  fontWeight:'500',
}}>Feb 2023</Text>
</View>
{/** the remaining  */}

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
      fontWeight:'500',
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
      fontWeight:'500',
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

      </SafeAreaView>
   </ScrollView>
  )
}

export default Rides

const styles = StyleSheet.create({
  container:{
    marginTop:60,
    flex:1,
    paddingLeft:13,
    paddingRight:13,
  },
  supportHeading:{
    justifyContent:'space-between',
    gap:30
  },
  chatTextArea:{
    flexDirection:'row',
    alignItems:'center',
    gap:10,
    justifyContent:'space-between',
    marginTop:13
  },
  chatIconText:{
    flexDirection:'row',
    alignItems:'center',
    gap:10,
    justifyContent:'space-between',
  },
  line: {
    backgroundColor:'gray',
    height: 1,
    width: '100%',
    marginTop: 10,
    gap:5,
  },
})