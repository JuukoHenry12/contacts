import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {HomeNavigator} from './HomeNavigator'
const DrawerNavigator = () => {
  const DrawerStack =createDrawerNavigator();
  return(
    <DrawerStack.Navigator>
    <DrawerStack.Screen name="Home" component={HomeNavigator} />
   </DrawerStack.Navigator>
  )
}
export default DrawerNavigator;