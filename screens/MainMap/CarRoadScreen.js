import { StyleSheet, View } from 'react-native'
import React,{ useState,useEffect,useRef,useContext}from 'react'
import MapView, { PROVIDER_GOOGLE} from 'react-native-maps';
import * as Location from 'expo-location';
import uuid from "react-native-uuid";

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
     />
    </View>
    
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})

export default CarRoadScreen;