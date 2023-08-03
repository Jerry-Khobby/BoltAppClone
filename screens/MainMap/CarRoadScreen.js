import { StyleSheet, View } from 'react-native'
import React,{ useState,useEffect,useRef,useContext}from 'react'
import MapView, { PROVIDER_GOOGLE} from 'react-native-maps';
import * as Location from 'expo-location';




const CarRoadScreen = ({navigation}) => {
  const [latlng,setLatLng] = useState({})


  const checkPermission =async()=>{
    const hasPermission = await Location.requestForegroundPermissionsAsync();
    if(hasPermission.status === 'granted') {
        const permission = await askPermission();
        return permission
    }
    return true
};


const askPermission = async()=>{
  const permission = await Location.requestForegroundPermissionsAsync()
  return permission.status === 'granted';
};




const getLocation = async()=>{
  try{
      const {granted} =await Location.requestForegroundPermissionsAsync();
      if(!granted)return;
      const {
          coords:{latitude,longitude},
      } = await Location.getCurrentPositionAsync();
      setLatLng({latitude:latitude,longitude:longitude})
  }catch(err){

  }
}


const _map = useRef(1);

useEffect(()=>{
  checkPermission();
  getLocation();
 // console.log(latlng)
[]})




//grabbing the location and from the context values 

  return (
    <View style={styles.container}>
      {/** I will implement the map on this screen */}
      <MapView
      ref={_map}
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={{
        flex:1,
       }}
       initialRegion={{
         latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: 0.005,
         longitudeDelta: 0.005,
       }}
       showUserLocation={true}
     />
      {/*   we will make the mapview, a normal closing tage and implemenet a marker component in it 
      
       and that marker will take in cordinate that we have gotten from the auto place screen 
       2. the marker will also tak a title as a prop and will pass in a strin of origin in it

      
      */}
    </View>
    
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})

export default CarRoadScreen;