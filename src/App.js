import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TextInput,
} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../src/screens/HomeScreen';
import LoginScreen from '../src/screens/LoginScreen';
import SignUpScreen from '../src/screens//SignUpScreen';
import SearchScreen from '../src/screens/SearchScreen';
import ProfileScreen from '../src/screens/ProfileScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function root() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'user' : 'user';
            return <SimpleLineIcons name={iconName} size={22} color={color} />;
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={22} color={color} />;
        },
      })}
      tabBarOptions={{
        adaptive: true,

        style: {
          backgroundColor: 'black',
        },
        activeTintColor: 'white',
        inactiveTintColor: 'gray',
        keyboardHidesTabBar: true,
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function app() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="signup" component={SignUpScreen} />
        <Stack.Screen name="root" component={root} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
