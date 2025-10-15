import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

const Mainlayout = () => {
    return(
        <Tabs screenOptions={{
            headerStyle: {
                backgroundColor: "black"
            },
            headerTintColor: "white",
            headerShown:false,
        }}>
            <Tabs.Screen name="DashboardScreen" options={{
                title: "Biblioteca",
                tabBarIcon: ()=> <MaterialCommunityIcons name="view-dashboard" size={24} color="black" />
            }}></Tabs.Screen>
            <Tabs.Screen name="nowPlaying" options={{
                title: "Now Playing",
                tabBarIcon: ()=> <Ionicons name="musical-notes" size={24} color="black" />
            }}></Tabs.Screen>
            <Tabs.Screen name="settings"
            options={{
                title: "Settings",
                tabBarIcon: ()=> <Ionicons name="settings-sharp" size={24} color="black" />
            }}></Tabs.Screen>
        </Tabs>
    );    
}

export default Mainlayout