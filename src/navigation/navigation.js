import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SplashScreen from '../screens/SplashScreen';   //waste code 
import 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();

export default function Navigation(props) {
  return (
     
      <Drawer.Navigator initialRouteName="SplashScreen" drawerContent={props => <DrawerContent {...props}/> }>
        <Drawer.Screen name="Home" component={SplashScreen} options={{
          drawerIcon: ({ focused, size }) => (
            <Icon
              name="home"
              size={size}
              color={'#00a2ff'}
            />
          ),
        }} />
       
      </Drawer.Navigator>
  );
}





