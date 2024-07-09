import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View } from 'react-native';

import Home from './Home';
import Book from './Book';
import Friends from './Friends';
import Notice from './Notice';
import Settings from './Settings';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home-outline';
          } else if (route.name === 'Book') {
            iconName = 'book-outline';
          } else if (route.name === 'Friends') {
            iconName = 'people-outline';
          } else if (route.name === 'Notice') {
            iconName = 'notifications-outline';
          } else if (route.name === 'Settings') {
            iconName = 'menu-outline'; // Use menu-outline for hamburger menu when focused
          }

          return (
            <View style={{ backgroundColor: focused ? 'green' : 'transparent', paddingLeft: 27,paddingRight:27, padding:12,
             }}>
              <Ionicons name={iconName} size={size} color={focused ? 'white' : color} />
            </View>
          );
        },
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopWidth: 0,
          elevation: 5,
        },
      })}
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Book" component={Book} />
      <Tab.Screen name="Friends" component={Friends} />
      <Tab.Screen name="Notice" component={Notice} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

export default MyTabs;
