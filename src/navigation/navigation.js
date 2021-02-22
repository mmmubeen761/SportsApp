import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import Settings from '../screens/Settings'
import BottomNav from '../screens/BottomNav'
import Filters from '../screens/Filters'
import {DrawerContent} from './DrawerCont'
import { NavigationContainer } from '@react-navigation/drawer';
import StartNavigation from './Startnav';

const Drawer = createDrawerNavigator();

export default function Navigation(props) {
  return (
    //  <NavigationContainer>
      <Drawer.Navigator initialRouteName="BottomNav" drawerContent={props => <DrawerContent {...props}/> }>
        <Drawer.Screen name="BottomNav" component={BottomNav} options={{
          drawerIcon: ({ focused, size }) => (
            <Icon
            name="home"
            size={size}
            color={'#00a2ff'}
            />
            ),
          }} />
        <Drawer.Screen name="Settings" component={Settings} options={{
          drawerIcon: ({ focused, size }) => (
            <Icon
            name="home"
            size={size}
            color={'#00a2ff'}
            />
            ),
          }} />
        <Drawer.Screen name="Filters" component={Filters} options={{
          drawerIcon: ({ focused, size }) => (
            <Icon
            name="home"
            size={size}
            color={'#00a2ff'}
            />
            ),
          }} />

       
      </Drawer.Navigator>
          // </NavigationContainer>
  );
}





