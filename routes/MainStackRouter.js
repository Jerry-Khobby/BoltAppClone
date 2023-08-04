import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native"
import DrawerMainApp from "../screens/MainMap/DrawerMainApp";
import Login from '../screens/Login';
import SplashScreen from "../screens/Splash";
import CodeSentVerify from '../screens/CodeSentVerify'

const MainStackRouter =()=>{
    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home"  
            screenOptions={{
                headerShown: false,
                headerShadowVisible: false
            }}>
                <Stack.Screen name="Splash" component={SplashScreen}/>
                <Stack.Screen name='Home' component={DrawerMainApp} />
                <Stack.Screen name='login' component={Login} />
                <Stack.Screen name='OTPVerification' component={CodeSentVerify}/>
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStackRouter;