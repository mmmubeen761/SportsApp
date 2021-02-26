import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Filters from './Filters'
import Email from './Email'
import Contact from './Contact'
import { Image } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SearchAddidas from './SearchAddidas'
import Search from './Search'
import AddContact from './AddContact'
import Contacts from './Contacts'
import ContactsAth from './ContactsAth'
import NewEmail from './NewEmail'
import EmailTwo from './EmailTwo'



const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const BottomNav = () => (

    <Tab.Navigator
        initialRouteName="Contacts"
        activeColor="#fff"
        sceneAnimationEnabled={false}
        activeColor="#0273a3"
        inactiveColor="#95a5a6"
        barStyle={{ backgroundColor: '#ffff' }}
    >
        <Tab.Screen
            name="Contacts"
            component={Contacts}
            options={{
                tabBarLabel: 'Contacts',
                tabBarColor: '#fff',
                tabBarIcon: ({ color }) => (
                    <FontAwesome
                        name="user"
                        color={color}
                        size={25}
                    />
                ),
            }}

        />
        <Tab.Screen
            name="Send Email"
            component={EmailTwo}
            options={{
                tabBarLabel: 'Send Email',
                tabBarColor: '#fff',
                tabBarIcon: ({ color }) => (
                    <FontAwesome
                        name="envelope"
                        color={color}
                        size={25}
                    />
                ),
            }}
        />
        <Tab.Screen
            name="Search"
            component={Search}
            options={{
                tabBarLabel: 'Search',
                tabBarColor: '#fff',
                tabBarIcon: ({ color }) => (
                    <FontAwesome
                        name="search"
                        color={color}
                        size={25}
                    />
                ),
            }}
        />

    </Tab.Navigator>
);

export default BottomNav;
