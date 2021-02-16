import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Navigation from './navigation';
import 'react-native-gesture-handler';
import SplashScreen from '../screens/SplashScreen'
import Settings from '../screens/Settings'

const Stack = createStackNavigator();

function StartNavigation() {

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="SplashScreen" component={SplashScreen} />
                <Stack.Screen name="Settings" component={Settings} />
                <Stack.Screen name="Navigation" component={Navigation} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


export default StartNavigation;

