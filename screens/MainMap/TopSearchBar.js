import React,{useRef}from 'react'
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableWithoutFeedback,
    Image,
    Alert 
} from 'react-native'
import Icon_font from 'react-native-vector-icons/AntDesign';

import Animated, {
    useAnimatedStyle,
    interpolate,
    withTiming,
} from "react-native-reanimated"

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {key} from '../../reducers/keys';
import { useDispatch,useSelector } from 'react-redux';
import {setOriginLocation,setDestinationLocation} from '../../reducers/reducers';
import { useNavigation } from '@react-navigation/native';




function TopSearchBar({ animatedIndex, bottomSheetModalRef}) {
// right  after getting the location, we move to the drawermain screen 
  const navigation = useNavigation();
  // I will be using redux to manage the state of the app as in grabbing the details of the latitud and longitude from here 
  // and passing into other components 
  const dispatch = useDispatch();
//the details of the latitud and longitude
  const {latitude:originLat,longitude:originLng}=useSelector(state=>state.origin);
  const { latitude: destLat, longitude: destLng } = useSelector(state => state.destination);
  //a function to handle the pressing event in the google forms 
  const handlePlacedSelected = (data, details, type) => {
    const { lat, lng } = details.geometry.location;
console.log(details.geometry.location.lat);
console.log(details.geometry.location.lng);
// trying to verify if the user left the place blank on the textfield 
//the main  thing we will do is that, no user will input the location they are going to 
    // ...
    if (type == 'origin') {
      dispatch(setOriginLocation({latitude:lat, longitude:lng}));
      console.log('It is successfully done , Location gotten');
    } else {
      dispatch(setDestinationLocation({latitude:lat, longitude:lng}));
      navigation.navigate('TrackerCarsMap');
    }

  };
    //showing out or printing out the location details 
  
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
    };
  });
  return (
    <Animated.View style={[styles.topSearchBar, animatedTopSearchBarStyles]}>
      <View style={styles.topSearchBarNav}>
        <TouchableWithoutFeedback onPress={() => { bottomSheetModalRef.current.collapse(withTiming()); } }>
          <Icon_font name='close' color='black' size={24} iconStyle={{ fontWeight: '600' }} />
        </TouchableWithoutFeedback>
        <Text style={styles.topSearchBarTitle}>Your route</Text>
        <TouchableWithoutFeedback>
          <Icon_font name='plus' color='black' size={24} iconStyle={{ fontWeight: '600' }} />
        </TouchableWithoutFeedback>
      </View>

      {/** the view for the textInput  */}
      <View style={{
        gap: 10,
        marginTop: 10,
        flex: 1
      }}>
        <View style={styles.textboxContainer}>
          <Image source={require("../../assets/pick-up-location.png")} />
          <GooglePlacesAutocomplete
            placeholder="Enter text here"
            nearbyPlacesAPI='GooglePlacesSearch'
            debounce={400}
            enablePoweredByContainer={false}
            minLength={2}
            enableHighAccuracyLocation={true}
            onPress={(data, details) =>
              // 'details' is provided when fetchDetails = true
              handlePlacedSelected(data, details, 'origin')}
            currentLocation={false}
            listViewDisplayed="auto"
            autoFocus={true}
            fetchDetails={true}

            query={{
              key: key,
              language: 'en'
            }}
            textInputProps={{
              style: styles.inputStyles, // Apply custom styles to the TextInput component
            }} />
        </View>
        <View style={styles.textboxContainer1}>
          <Icon_font name='search1' size={25} fontWeight='bold' />

          <GooglePlacesAutocomplete
            placeholder="Where To"
            nearbyPlacesAPI='GooglePlacesSearch'
            debounce={400}
            autoFocus={true}
            listViewDisplayed="auto"
            enablePoweredByContainer={false}
            currentLocation={false}
            fetchDetails={true}
            enableHighAccuracyLocation={true}
            onPress={(data, details) =>
              // 'details' is provided when fetchDetails = true
              handlePlacedSelected(data, details, 'destination')}
            query={{
              key: key,
              language: 'en'
            }}
            textInputProps={{ style: styles.inputStyles, }} />
          <View style={styles.imageContainer}>
            <Image source={require("../../assets/x.png")} style={{ width: 12, height: 12, backgroundColor: '#f1f1f1' }} />
            <Image source={require("../../assets/map.png")} style={styles.image} />
          </View>
        </View>
      </View>
    </Animated.View>
  );
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
      backgroundColor: "#FFF"
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
    textboxContainer: {
      backgroundColor: "#fff",
      borderRadius: 3,
      alignItems: "center",
      paddingLeft: 2,
      borderColor: "green",
      borderWidth: 2,
      flexDirection: "row",
      alignItems: "center",
      gap: 20,
    },
    textboxContainer1: {
      backgroundColor: "#fff",
      borderRadius: 3,
      alignItems: "center",
      paddingLeft: 2,
      borderColor: "green",
      borderWidth: 2,
      flexDirection: "row",
      paddingHorizontal: 10,
      paddingTop: 5,
      gap: 20,
    },
    imageContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginLeft: 1,
      gap: 5,
    },
    inputStyles: {
      height: 37
    }
  });
  
    
   

export default TopSearchBar



;