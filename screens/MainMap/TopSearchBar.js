import React,{useState,useRef,useContext,useEffect}from 'react'
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableWithoutFeedback,
    Image 
} from 'react-native'
import Icon_font from 'react-native-vector-icons/AntDesign';

import Animated, {
    useAnimatedStyle,
    interpolate,
    withTiming,
} from "react-native-reanimated"

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {OriginContext,DestinationContext} from "../../context/context";
import { carsAround,carsFarAway } from '../../global/data';





const TopSearchBar = ({animatedIndex, bottomSheetModalRef}) => {

// creating a function that would be able to close topsheet when it is cliced upon 
  const {origin,dispatchOrigin} =useContext(OriginContext);
 const {destination,dispatchDestination} =useContext(DestinationContext);  


 



const textInput1 = useRef(4);
const textInput2 = useRef(5);


   

const animatedTopSearchBarStyles = useAnimatedStyle(() => {
        return {
        transform: [{
            translateY: interpolate(
            animatedIndex.value,
            [0, 1],
            [-styles.topSearchBar.height, 0])
        }],
        }
    })
 return (
        <Animated.View style={[styles.topSearchBar, animatedTopSearchBarStyles]}>
             <View style={styles.topSearchBarNav}>
                <TouchableWithoutFeedback onPress={()=>{bottomSheetModalRef.current.collapse(withTiming())}}>
                <Icon_font name='close' color='black' size={24} iconStyle={{fontWeight:600}}/>
                </TouchableWithoutFeedback>
                <Text style={styles.topSearchBarTitle}>Your route</Text>
                <TouchableWithoutFeedback onPress={()=>{}}>
                <Icon_font name='plus' color='black' size={24} iconStyle={{fontWeight:600}}/>
                </TouchableWithoutFeedback>
            </View>

{/** the view for the textInput  */}
<View style={{
    gap:10,
    marginTop:10,
    flex:1
}}>
<View style={styles.textboxContainer}>
    <Image source={require("../../assets/pick-up-location.png")}/>
          <GooglePlacesAutocomplete
            placeholder="Enter text here"
            nearbyPlacesAPI='GooglePlacesSearch'
            debounce={400}
          enablePoweredByContainer={false}
          minLength={2}
          currentLocation={false}
          listViewDisplayed="auto"
          autoFocus ={true}
          returnkeyType={"search"}
          ref={textInput1}

          onPress={(data,details=null)=>{
            if(details){
            dispatchOrigin({
                type:"ADD_ORIGIN",
                payload:{
                    latitude:details.geometry.location.lat,
                    longitude:details.geometry.location.lng,
                    address:details.formatted_address,
                    name:details.name
                }
            })
        }
        console.log(details.geometry.location.lng);
carsAround.push({
    latitude:details.geometry.location.lat,
    longitude:details.geometry.location.lng
})
          }}
          
        query={{
            key:'AIzaSyCC6Yjtn30bFUIae0v6qzqva4Bj2YxQMBE',
            language:'en'
        }}
        textInputProps={{ // Use View to override the default TextInput component
            style:styles.inputStyles, // Apply custom styles to the TextInput component
          }}
            // Add any other TextInput props you need
        />
</View>
<View style={styles.textboxContainer1}>
    <Icon_font name='search1' size={25} fontWeight='bold'/>
    
          <GooglePlacesAutocomplete
            placeholder="Where To"
            nearbyPlacesAPI='GooglePlacesSearch'
            debounce={400}
            returnkeyType={"search"}
            autoFocus ={true}
            listViewDisplayed="auto"
            enablePoweredByContainer = {false}
            currentLocation ={false}
            fetchDetails ={true}
            ref={textInput2}
            onPress={(data,details=null)=>{
                if(details){
                dispatchDestination({type:"ADD_DESTINATION",
                payload:{
                    latitude:details.geometry.location.lat,
                    longitude:details.geometry.location.lng,
                    address:details.formatted_address,
                    name:details.name
                }})
            }
                carsFarAway.push({
                    latitude:details.geometry.location.lat,
                    longitude:details.geometry.location.lng
                })
            }}
            query={{
                key:'AIzaSyCC6Yjtn30bFUIae0v6qzqva4Bj2YxQMBE',
                language: 'en'
            }}
            textInputProps={{
         // Use View to override the default TextInput component
                style:styles.inputStyles, // Apply custom styles to the TextInput component
              }}
          />
          <View style={styles.imageContainer}>
          <Image source={require("../../assets/x.png")} style={{width:12,height:12,backgroundColor: '#f1f1f1'}}/>
          <Image source={require("../../assets/map.png")} style={styles.image}/>
          </View>
</View>
</View>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    topSearchBar: {
        position: "absolute",
        left: 0,
        top: -1,
        width: Dimensions.get("screen").width,
        height: 450,
        padding: 20,
        paddingTop: 50,
        backgroundColor:'#FFF'
        //backgroundColor: "blue",
    },
    topSearchBarNav: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
    },
    topSearchBarTitle: {
        fontSize: 16,
        fontWeight: "700"
    },
    textboxContainer:{
backgroundColor: '#fff',
        borderRadius:3,
        alignItems:'center',
        paddingLeft:2,
        borderColor:'green',
        borderWidth:2,
flexDirection:'row',
alignitems:'center',
gap:20,

    },
    textboxContainer1:{
        backgroundColor: '#fff',
        borderRadius:3,
        alignItems:'center',
        paddingLeft:2,
        borderColor:'green',
        borderWidth:2,
flexDirection:'row',
paddingHorizontal:10,
padinTop:5,
gap:20
    },
    imageContainer:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft:1,
        gap:5
    },
    inputStyles:{
        height:37
    }
    });
    
   

export default TopSearchBar



;