import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Filters from '../screens/Filters'
import Email from '../screens/Email'
import Contact from '../screens/Contact'
import { Image } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const BottomNav = () => (

    <Tab.Navigator
        initialRouteName="HomeScreen"
        activeColor="#fff"
    >
        <Tab.Screen
            name="Contacts"
            component={Contact}
            options={{
                tabBarLabel: 'Contacts',
                tabBarColor: '#fff',
                tabBarIcon: ({ color }) => (
                    <FontAwesome
                        name="user"
                        color="#fff"
                        size={25}
                    />
                ),
            }}
        />
        <Tab.Screen
            name="Send Email"
            component={Email}
            options={{
                tabBarLabel: 'Send Email',
                tabBarColor: '#fff',
                tabBarIcon: ({ color }) => (
                    <FontAwesome
                        name="envelope"
                        color="#fff"
                        size={25}
                    />
                ),
            }}
        />
        <Tab.Screen
            name="Search"
            component={Filters}
            options={{
                tabBarLabel: 'Search',
                tabBarColor: '#fff',
                tabBarIcon: ({ color }) => (
                    <FontAwesome
                        name="search"
                        color="#fff"
                        size={25}
                    />
                ),
            }}
        />

    </Tab.Navigator>
);

export default BottomNav;
