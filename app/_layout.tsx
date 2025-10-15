import { Tabs } from "expo-router";

export default function RootLayout(){
    return(
        <Tabs screenOptions={{
            headerShown:false
        }}>
            <Tabs.Screen name="index"></Tabs.Screen>
            <Tabs.Screen name="(main)" options={{
                headerShown: false
            }}></Tabs.Screen>
        </Tabs>
    );    
}