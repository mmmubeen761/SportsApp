import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Navigation from './navigation';
import 'react-native-gesture-handler';
import SplashScreen from '../screens/SplashScreen'
import Settings from '../screens/Settings'
import ResetPwd from '../screens/ResetPwd'
import CreateAccount from '../screens/CreateAccount'
import GetStartedScreen1 from '../screens/GetStartedScreen1'
import Login from '../screens/Login'
import BottomNav from '../screens/BottomNav'
import SearchAddidas from '../screens/SearchAddidas'
import Search from '../screens/Search'
import AddContact from '../screens/AddContact'
import Contacts from '../screens/Contacts'
import ContactsAth from '../screens/ContactsAth'
import NewEmail from '../screens/NewEmail'
import EmailTwo from '../screens/EmailTwo'
import Filters from '../screens/Filters'
import Contact from '../screens/Contact'


const Stack = createStackNavigator();

function StartNavigation() {

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="SplashScreen" component={SplashScreen} />
                <Stack.Screen name="GetStartedScreen1" component={GetStartedScreen1} />
                <Stack.Screen name="Search" component={Search} />
                <Stack.Screen name="ContactsAth" component={ContactsAth} />
                <Stack.Screen name="Contacts" component={Contacts} />
                <Stack.Screen name="EmailTwo" component={EmailTwo} />
                <Stack.Screen name="NewEmail" component={NewEmail} />
                <Stack.Screen name="AddContact" component={AddContact} />
                <Stack.Screen name="SearchAddidas" component={SearchAddidas} />
                <Stack.Screen name="BottomNav" component={BottomNav} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="CreateAccount" component={CreateAccount} />
                <Stack.Screen name="ResetPwd" component={ResetPwd} />
                <Stack.Screen name="Settings" component={Settings} />
                <Stack.Screen name="Navigation" component={Navigation} />
                <Stack.Screen name="Filters" component={Filters} />
                <Stack.Screen name="Contact" component={Contact} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


export default StartNavigation;

