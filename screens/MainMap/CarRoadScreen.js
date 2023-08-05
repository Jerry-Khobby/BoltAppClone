import { StyleSheet, View } from 'react-native'
import React,{ useState,useEffect,useRef,useContext}from 'react'
import MapView, { PROVIDER_GOOGLE,Marker} from 'react-native-maps';
import * as Location from 'expo-location';
import uuid from "react-native-uuid";
import { useSelector } from 'react-redux';

const CarRoadScreen = ({navigation}) => {

const _map = useRef(1);

const [currentPosition, setCurrentPosition] = useState({
  longitude: 0,
  latitude: 0,
})

 // open and sets Map when valid inputs are provided
  // grabs and sets user location
  useEffect(()=>{
    Location.requestForegroundPermissionsAsync().then(()=>{
      Location.watchPositionAsync({accuracy: Location.Accuracy.Highest },(position)=>{
        setCurrentPosition({
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        })
      }).catch((e) => {
          console.log(e)
      })
    });
},[])

//grabbing the location and from the context values 
const googlePlacesSessionToken = useRef(uuid.v4())


// working on the locations grabbing 
// Use the useSelector hook to access the origin and destination latitude and longitude
const originLat = useSelector(state => state.origin.latitude);
const originLng = useSelector(state => state.origin.longitude);
const destLat = useSelector(state => state.destination.latitude);
const destLng = useSelector(state => state.destination.longitude);

//grouping this into a single varible 
const originMarkerCoordinates ={latitude:originLat,longitude:originLng};
const destinationMarkerCoordinates ={latitude:destLat,longitude:destLng};


  return (
    <View style={styles.container}>
      <MapView
      ref={_map}
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={{flex:1,}}
      region={currentPosition}
       showsUserLocation={true}
       showsCompass={true}
       followsUserLocation={true}
       showsBuildings={true} 
       showsTraffic={true}
       showsIndoors={true}
       showsPointsOfInterest={true}
     >
     {/*  <Marker 
      coordinate={originMarkerCoordinates}
      title="My current location"
      description="Where I am right now"
      /> */}
      </MapView>
    </View>
    
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})

export default CarRoadScreen;