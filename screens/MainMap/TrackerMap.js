import { StyleSheet, View,Text } from 'react-native'
import React,{ useState,useEffect,useRef,useContext}from 'react'
import MapView, { PROVIDER_GOOGLE,Marker,Polyline} from 'react-native-maps';
import * as Location from 'expo-location';
import uuid from "react-native-uuid";
import { useSelector } from 'react-redux';

const TrackerMap = ({navigation}) => {
    const _map=useRef(1);
    const [currentPosition, setCurrentPosition] = useState({
  longitude: 0,
  latitude: 0,
})

// trying to grab the current location, longitude values 
// and aslo the  current position latitude values 


useEffect(() =>{
getLocation();
},[])


const getLocation = async () => {
    try {
      const location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.BestForNavigation,
      });
      setCurrentPosition({
        longitude: location.coords.longitude,
        latitude: location.coords.latitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    } catch (error) {
      console.log(error);
    }
  };

/// catching the latitude and the  longitudes gotten from the redux 

const originLat = useSelector(state => state.origin.latitude);
const originLng = useSelector(state => state.origin.longitude);
const destLat = useSelector(state => state.destination.latitude);
const destLng = useSelector(state => state.destination.longitude);

//grouping this into a single varible 
const   originMarkerCoordinates ={latitude:originLat,longitude:originLng};
const destinationMarkerCoordinates ={latitude:destLat,longitude:destLng};

//

let polylineCoordinates;
let region;

if(originMarkerCoordinates==null){
    polylineCoordinates=[
    currentPosition,
    destinationMarkerCoordinates,
    ]
}else{
    polylineCoordinates = [
    originMarkerCoordinates,
        destinationMarkerCoordinates,
      ];  
}




  return (
      <View style={styles.container}>
      <MapView
      ref={_map}
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={{flex:1,}}
      region={currentPosition}
       //showsUserLocation={true}
       showsCompass={true}
       followsUserLocation={true}
       showsBuildings={true} 
       showsTraffic={true}
       showsIndoors={true}
       showsPointsOfInterest={true}>
    <Marker
    coordinate={originMarkerCoordinates}
    title="Origin"
    description="Starting Point"
    />

     <Marker
    coordinate={destinationMarkerCoordinates}
          title="Destination"
          description="Final Destination"
        />
<Polyline
coordinates={polylineCoordinates}
strokeColor='blue'
strokeWidth={2}
geodesic={true}

/>

      </MapView>
    </View>
  )
}

export default TrackerMap

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})