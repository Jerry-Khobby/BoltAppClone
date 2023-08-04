import { StyleSheet, Text, View,TouchableOpacity,Image,SafeAreaView } from 'react-native'
import React,{useState,useEffect} from 'react';
import PhoneInput from 'react-native-phone-number-input';



const Login = ({navigation}) => {


const [phoneNumber,setPhoneNumber] =useState(''); 

const [valid,setValid] =useState(true);


const handleChange =(input)=>{
  setPhoneNumber(input);
  setValid(validatePhoneNumber(input));
}



const validatePhoneNumber =(phoneNumber)=>{
  const phoneNumberPattern = /^\d{10}$/;
  return phoneNumberPattern.test(phoneNumber);
};



  return (
<SafeAreaView style={{flex:1,marginTop:80}}>
    <View style={styles.master_view}>
      <View>
        <Text style={styles.heading}>Enter your number </Text>
      </View >
      <View style={styles.phone_heading}>
        <PhoneInput
        layout='first'
        defaultCode='IN'
        textContainerStyle={{paddingVertical:0}}
        defaultValue={phoneNumber}
        onChangePhoneNumber={handleChange} 
        isValidNumber={valid}
        focus={true}
        offset={1}
        textInputStyle={styles.input}
        containerStyle={styles.inputButton}
         />
      </View>
      <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Home')}>
      <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>





      <View style={styles.container}>
  <View style={styles.line} />
  <Text style={styles.orText}>OR</Text>
  <View style={styles.line} />
</View>

<TouchableOpacity style={styles.button_Icon} onPress={()=>navigation.navigate('Home')}>
  <Image source={require('../assets/googleIcon.png')} style={styles.googleIcon}/>
      <Text style={styles.buttonTextIcon}>Sign in with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button_Icon} onPress={()=>navigation.navigate('Home')}>
        <Image source={require('../assets/facebookIcon.png')} style={styles.googleIcon}/>
      <Text style={styles.buttonTextIcon}>Sign in Facebook</Text>
      </TouchableOpacity>

      <View>
        <Text style={styles.textBelow}>
        If you are creating a new account, Terms&
 Conditions and PrivacyPolicy will apply
        </Text>
      </View>
    </View>
    </SafeAreaView>

    
  )
}

export default Login

const styles = StyleSheet.create({
  heading:{
    fontSize:27,
    fontWeight:'700',
    lineHeight:100,
    letterSpacing:1
    
  },
  master_view:{
    alignItems:'center',
    justifyContent:'center',
  },
  phone_heading:{
alignItems:'center',
justifyContent:'center',
borderColor:'green',
borderWidth:2,
borderRadius:12

  },
  inputButton:{
    width:'90%',
    borderRadius:8,
    borderWidth:1,
    borderColor:'#CCCC',
    height:80,
    backgroundColor: 'rgba(245, 245, 245, 1)'  
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 18,
    width:350
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.2)', // Adjust the alpha value as desired
    marginHorizontal: 5,
  },
  orText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0, 0.5)', // Adjust the alpha value as desired
    marginHorizontal: 10,
  },
  button:{
    backgroundColor:'#27AE60',
    borderRadius:35,
    height:78,
    justifyContent:'center',
    width:350,
    alignItems:'center',
    marginTop:23
  },
  buttonText:{
fontSize:23,
color:'#fff',
  },
  button_Icon: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 35,
    height: 78,
    width: 350,
    borderWidth: 2,
    borderColor: '#D3D3D3',
    paddingHorizontal: 20,
    marginTop:23,
    alignItems:'center',
    justifyContent:'center'
  },
  buttonTextIcon: {
    color: '#000000',
    fontSize: 23,
    marginLeft: 10,
  },
  googleIcon: {
    width: 30,
    height: 30,
    marginRight: 19,
   /* tintColor: '#D3D3D3',*/
  },
  textBelow:{
    position: 'absolute',
    top: 20,
    alignSelf: 'center',
    fontSize: 17,
    color: 'rgba(0, 0, 0, 0.7)', // Faded font color
    textAlign: 'center',
    paddingHorizontal: 20,
  }
});











  

 
  


