import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {CONTACT_LIST,CONTACT_DETAILS,CREATE_CONTACT,SETTINGS} from '../constants/RouteName'
import Contacts from '../screens/Contacts'
import ContactDetails from '../screens/ContactDetails'
import CreateContact from '../screens/ContactDetails'
import Settings from '../screens/Settings'
const HomeNavigator = () => {
  const HomeStack = createStackNavigator();
  <HomeStack.Navigator initialRouteName={CONTACT_LIST}>
    <HomeStack.Screen name={CONTACT_LIST} component={Contacts} />
    <HomeStack.Screen name={CONTACT_DETAILS} component={ContactDetails} />
    <HomeStack.Screen name={CREATE_CONTACT} component={CreateContact} />
    <HomeStack.Screen name={SETTINGS} component={Settings} />
  </HomeStack.Navigator>;
};
export default HomeNavigator;
