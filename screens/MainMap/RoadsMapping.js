import { StyleSheet,View} from 'react-native'
import React,{useRef} from 'react'
import BottomOption from './BottomOption'
import CarRoadScreen from './CarRoadScreen'
import {useSharedValue} from "react-native-reanimated"
import TopSheet from "../MainMap/TopSearchBar";
import Togglerbutton from './ButtonMenu';




/* const TopSheetMemo = React.memo(TopSheet); */
const RoadsMapping = ({navigation}) => {
  const bottomSheetModalRef = useRef();

  {/** working on the  */}
  const animatedIndex = useSharedValue(0)
  // const navigation = useNavigation();
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      // Hide the header text
    headerShown:false,
      drawerLockMode: 'locked-closed',
    });
  }, [navigation]);

  return (
    <View style={styles.container}> 
        <CarRoadScreen/>
        <Togglerbutton navigation={navigation} /> 
        <BottomOption bottomSheetModalRef={bottomSheetModalRef} animatedIndex={animatedIndex}/>  
        <TopSheet bottomSheetModalRef={bottomSheetModalRef} animatedIndex={animatedIndex}/>
      </View> 
  )
};
export default RoadsMapping;

const styles = StyleSheet.create({
  roadMenu:{
    top:25,
    left:20,
    backgroundColor:'#fff',
    height:50,
    width:50,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:100,
  },
  container: {
    flex: 1,
  },
  
})