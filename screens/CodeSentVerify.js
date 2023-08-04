import { StyleSheet, Text, View,TouchableOpacity,TextInput } from 'react-native'
import React from 'react';
import {AntDesign} from '@expo/vector-icons';

{/** I will be visiting this page again to link the screens  */}
const CodeSentVerify = ({navigation}) => {
  return (

    <View style={styles.container}>
        <View style={styles.header}>
            <AntDesign name="arrowleft" size={27}  style={styles.arrowIcon} color="black"/>
            <Text style={styles.enterCodeText}>Enter code</Text>
        </View>
        <View style={styles.textAlerting}>
        <Text style={styles.firstText}>A code was sent to </Text>
        <Text style={styles.numberText}>+233 243997081</Text>
        </View>
        <View>
        <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
<Text  style={styles.linkToLogin}>Edit phone number</Text>
        </TouchableOpacity>
        </View>
{/** the text boxes forming in a row and it styling  */}
<View style={styles.containerText}>
      <TextInput style={styles.textbox} />
      <TextInput style={styles.textbox} />
      <TextInput style={styles.textbox} />
      <TextInput style={styles.textbox} />
    </View>
<View style={styles.bottomResend}>
    <TouchableOpacity onPress={()=>{}}>
<Text style={styles.reSendText}>Resend Code</Text>
    </TouchableOpacity>
    </View>
    </View>
  )
}

export default CodeSentVerify;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        top:60,
      },
      header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight:190,
        paddingTop: 16,

      },
      arrowIcon: {
        marginRight: 30,
      },
      enterCodeText: {
        fontSize: 24,
      },
      textAlerting:{
        alignItems:'center',
        paddingRight:160,
        marginTop:15,
        gap:5
      },
      firstText:{
        fontSize:22,
        color:'rgba(0, 0, 0, 0.7)',
      },
      numberText:{
        fontSize:20,
        paddingRight:39,
      },
linkToLogin:{
    color:'#20915A',
    fontSize:20,
    marginTop:4
},
containerText:{
    flexDirection:'row',
},
textbox: {
    flex: 1,
    height: 65,
    marginHorizontal: 5,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'gray',
    paddingHorizontal: 10,
    marginTop:20,
    fontSize:25,
    paddingHorizontal:25,
},
bottomResend: {
   top:400
  },
reSendText: {
    fontSize: 19,
    color: 'green',
  },
});