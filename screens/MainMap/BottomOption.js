import React, { useRef, useMemo,useState } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';

import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { TapGestureHandler } from 'react-native-gesture-handler';
import Animated, {
  withTiming,
  useAnimatedStyle,
  useSharedValue,
  interpolateColor,
} from 'react-native-reanimated';


import { Fontisto } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
// import About from '../MenuItemsScreenshots/About';

const BottomOption = ({animatedIndex, bottomSheetModalRef}) => {
  const snapPoints = useMemo(() => ['45%', '100%'], []);
  const [isExpanded, setExpanded] = useState(false);
  const [showScreen, setShowScreen] = useState(false);
  function handlePresentModal() {
    bottomSheetModalRef.current?.present();
    setExpanded(true);
    setShowScreen(true);
  }
  // shared values for search button splash effect
  const radius = useSharedValue(0);
  const splashEffectLeft = useSharedValue(0);
  const splashEffectTop = useSharedValue(0);

  const searchButtonSplashEffect = (event) => {
    splashEffectLeft.value = event.nativeEvent.x;
    splashEffectTop.value = event.nativeEvent.y;
    bottomSheetModalRef.current.expand(withTiming(1));
    radius.value = withTiming(500, { duration: 100 }, () => {
      radius.value = 0;
    });
  };

  const animatedButtonSplashEffectStyles = useAnimatedStyle(() => {
    return {
      left: splashEffectLeft.value - radius.value,
      top: splashEffectTop.value - radius.value,
      borderRadius: radius.value,
      backgroundColor: interpolateColor(radius.value, [0, 500], ['grey', 'transparent']),
      width: radius.value * 2,
      height: radius.value * 2,
    };
  });
  const [selectedLocation, setSelectedLocation] = useState('');
  const handleLocationSelect = (data, details) => {
    setSelectedLocation(data.description);
  };
  return (
    <BottomSheet ref={bottomSheetModalRef} index={0} animatedIndex={animatedIndex} snapPoints={snapPoints} keyboardBehavior="interactive">
      <BottomSheetView style={styles.bottomSheet}>
      
        <TapGestureHandler  onActivated={searchButtonSplashEffect}>
          <View style={styles.destinationSerchBox}>
            <Animated.View style={[styles.buttonSplashEffect, animatedButtonSplashEffectStyles]} />
            <Fontisto name="search" size={24} color="black" style={{ borderRadius: 30}}/>
            <Text style={styles.destinationSearchBoxText}>Where to?</Text>
          </View>
        </TapGestureHandler>
        <View style={styles.beforeLocations}>
    <View style={styles.previousLocation}>
<SimpleLineIcons name="location-pin" size={28} color="black" style={styles.locationIcon}/>
    <View style={styles.prevLocationText}>
        <Text style={styles.hotelName}>Transcop Hilton Hotel.</Text>
        <Text style={styles.address}>Tafawa balawa way 270, Abuja</Text>
        <View style={styles.line} />
    </View>
    </View>
</View>
    </BottomSheetView>
    </BottomSheet>
  );
};

export default BottomOption;
const styles = StyleSheet.create({
  destinationSerchBox: {
    width: '100%',
    height: 49,
    backgroundColor: '#F1F1F1',
    borderRadius: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap:17,
    position: 'relative',
    overflow: 'hidden',
  },
  destinationSearchBoxText: {
    fontSize: 16,
    fontWeight:'700',
    gap:10
  },
  bottomSheet: {
    paddingHorizontal: 20,
  },
  buttonSplashEffect: {
    position: 'absolute',
  },
  
  locationText:{
  flex: 1,
  height: '100%',
  paddingHorizontal: 5, 
  backgroundColor:'#F1F1F1',
  fontSize:19,
  borderRadius: 24,
  },
  searchIcon: {
    marginLeft: 10,
    marginRight: 10,
  },
  previousLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 324,
    height: 52,
    paddingHorizontal: 16,
    marginTop:10
  },
  beforeLocations:{
    alignItems:'center',
    right:36
  },
  prevLocationText: {
    marginLeft: 10,
    flex: 1,
  },
  hotelName: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  address: {
    fontSize: 14,
    color: 'gray',
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginTop: 5,
    width:352,
    right:30
  },
  locationIcon:{
    marginBottom:10
  }
});