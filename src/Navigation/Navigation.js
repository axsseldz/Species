import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/FontAwesome5';
import HomeNavigation from "./HomeNavigation";
import FavoritesNavigation from "./FavoritesNavigation";
import ProfileNavigation from "./ProfileNavigation";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeNavigation}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: () => (
            <Icon name="dragon" color="#6d55b1" size={20} />
          )
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesNavigation}
        options={{
          tabBarLabel: "Favorites",
          tabBarIcon: () => (
            <Icon name="fire" color="#ef5350" size={20} />
          )
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileNavigation}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: () => (
            <Icon name="user-astronaut" color="#77b3ff" size={20} />
          )

        }}
      />
    </Tab.Navigator>
  );
}
