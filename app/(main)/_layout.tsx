import { View, Text } from 'react-native'
import React from 'react'
import { Tab } from 'expo-router'

const Mainlayout = () => {
  return (
    <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarStyle: {
        backgroundColor: '#111',
        borderTopColor: '#333',
        borderTopWidth: 1,
      },
      tabBarActiveTintColor: '#a855f7',
      tabBarInactiveTintColor: '#888',
    }}
  >
    <Tab.Screen
      name="HomeTab"
      component={}
      options={{
        tabBarLabel: 'Inicio',
        tabBarIcon: ({ color }) => <Home size={24} color={color} />,
      }}
    />
    <Tab.Screen
      name="TabsTab"
      component={TabsScreen}
      options={{
        tabBarLabel: 'Explorar',
        tabBarIcon: ({ color }) => <Music size={24} color={color} />,
      }}
    />
    <Tab.Screen
      name="NowPlaying"
      component={NowPlayingScreen}
      options={{
        tabBarLabel: 'Reproduciendo',
        tabBarIcon: ({ color }) => <Play size={24} color={color} />,
      }}
    />
    <Tab.Screen
      name="Settings"
      component={SettingsScreen}
      options={{
        tabBarLabel: 'Configuración',
        tabBarIcon: ({ color }) => <Settings size={24} color={color} />,
      }}
    />
  </Tab.Navigator>
  )
}

export default Mainlayout