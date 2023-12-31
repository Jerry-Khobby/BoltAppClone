import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native"
import DrawerMainApp from "../screens/MainMap/DrawerMainApp";
import Login from '../screens/Login';
import SplashScreen from "../screens/Splash";
import CodeSentVerify from '../screens/CodeSentVerify'
import TrackerMap from "../screens/MainMap/TrackerMap";
const MainStackRouter =()=>{
    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash"  
            screenOptions={{
                headerShown: false,
                headerShadowVisible: false
            }}>
                <Stack.Screen name="Splash" component={SplashScreen}/>
                <Stack.Screen name='login' component={Login} />
                <Stack.Screen name='DrawerMainApp' component={DrawerMainApp} />
                <Stack.Screen name='TrackerCarsMap' component={TrackerMap} />
                <Stack.Screen name='OTPVerification' component={CodeSentVerify}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStackRouter;