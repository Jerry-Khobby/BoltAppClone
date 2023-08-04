
import React from 'react';
import {createDrawerNavigator } from '@react-navigation/drawer';
import RoadsMapping from '../MainMap/RoadsMapping';
import DrawerContents from '../MainMap/DrawerContents';
import Payment from '../MenuItemsScreens/Payment';
import About from '../MenuItemsScreens/About';
import Rides from '../MenuItemsScreens/Rides';
import Support from '../MenuItemsScreens/Support';
import PromotionItem from '../MenuItemsScreens/PromotionItem';
import WorkRides from '../MenuItemsScreens/WorkRides';
import PersonalDetails from '../MenuItemsScreens/PersonalDetails';


const Drawer = createDrawerNavigator();
const DrawerMainApp =()=>{
    return(
<Drawer.Navigator initialRouteName='Home' drawerContent={props=><DrawerContents {...props}/>}>
  <Drawer.Screen name="RoadsMapping" component={RoadsMapping}/>
  <Drawer.Screen name="Payment" component={Payment}/>
  <Drawer.Screen name="About" component={About}/>
  <Drawer.Screen name="Personal" component={PersonalDetails}/>
  <Drawer.Screen name="Rides" component={Rides}/>
  <Drawer.Screen name="Promotion" component={PromotionItem}/>
  <Drawer.Screen name="Support" component={Support}/>
  <Drawer.Screen name="Workrides" component={WorkRides}/>
</Drawer.Navigator>

)
}


export default DrawerMainApp;