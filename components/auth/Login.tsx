import "@/global.css";
import { Ionicons } from '@expo/vector-icons';
import { selectionAsync } from "expo-haptics";
import { router } from "expo-router";
import React, { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

interface LoginProps {
  setIsLogin: (value: boolean) => void;
}
export default function Login({ setIsLogin }: LoginProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <ScrollView className="flex-1 bg-black">
      {/* Decoraciones geométricas */}
      <View className="absolute top-0 right-0 w-96 h-96 rounded-full bg-purple-700 opacity-10 -translate-y-1/2 translate-x-1/2" />
      <View className="absolute top-20 left-0 w-72 h-72 rounded-full bg-purple-800 opacity-10 -translate-x-1/2" />
      <View className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-purple-700 opacity-10 translate-y-1/2 -translate-x-1/2" />

      {/* Header */}
      <View className="pt-16 pb-8 px-6 relative z-10">
        <View className="bg-gradient-to-r from-purple-700 to-purple-900 rounded-3xl p-1 mb-6">
          <View className="bg-gradient-to-b from-black to-purple-900 rounded-3xl p-6">
            <Text className="text-5xl font-black text-center text-purple-400">PORQUE EL ROCK</Text>
            <Text className="text-5xl font-black text-center text-purple-400 -mt-2">SI ES MUSICA</Text>
          </View>
        </View>
        <Text className="text-purple-300 text-center text-sm font-bold tracking-widest">
          VICENTE MENDIETA 3E1
        </Text>
      </View>

      {/* Contenedor principal */}
      <View className="px-6 py-8 relative z-10 space-y-6">
        {/* Username */}
        <View>
          <Text className="text-purple-400 font-black text-sm mb-3 tracking-widest">USERNAME</Text>
          <View className="bg-gradient-to-r from-purple-800 to-purple-900 rounded-2xl px-4 py-4 flex-row items-center border-2 border-purple-400">
            <Ionicons name="person" size={20} color="#D8B4FE" />
            <TextInput
              className="flex-1 text-white ml-3 text-base font-bold"
              placeholder="NOMBRE DE USUARIO AQUI"
              placeholderTextColor="#A78BFA"
            />
          </View>
        </View>

        {/* Password */}
        <View>
          <Text className="text-purple-400 font-black text-sm mb-3 tracking-widest">PASSWORD</Text>
          <View className="bg-gradient-to-r from-purple-800 to-purple-900 rounded-2xl px-4 py-4 flex-row items-center border-2 border-purple-400">
            <Ionicons name="lock-closed-outline" size={20} color="#D8B4FE" />
            <TextInput
              className="flex-1 text-white ml-3 text-base font-bold"
              placeholder="••••••••"
              placeholderTextColor="#A78BFA"
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Ionicons 
                name={showPassword ? "eye-outline" : "eye-off-outline"} 
                size={20} 
                color="#D8B4FE" 
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Forgot Password */}
        <TouchableOpacity onPress={() => {
          router.replace('/not-found');
          selectionAsync();
        }} className="self-end">
          <Text className="text-purple-400 text-sm font-black tracking-widest">¿OLVIDASTE?</Text>
        </TouchableOpacity>

        {/* Botón Principal */}
        <TouchableOpacity 
          onPress={() => {
            router.push("/DashboardScreen");
            selectionAsync();
          }}
          className="bg-gradient-to-r from-purple-700 to-purple-900 rounded-3xl py-4 border-4 border-purple-500 shadow-2xl active:opacity-75">
          
          <Text className="text-purple-300 text-center font-black text-lg tracking-widest">¡ROCK!</Text>
        </TouchableOpacity>

        {/* Toggle Login/Register */}
        <TouchableOpacity 
          className="flex-row justify-center mt-8 bg-gradient-to-r from-purple-800 to-purple-900 rounded-2xl py-3 border-2 border-purple-500"
          onPress={() => setIsLogin(false)}
        >
          <Text className="text-purple-400 text-sm font-black">¿SIN CUENTA? </Text>
          <Text className="text-purple-300 font-black text-sm tracking-widest">REGISTRATE</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}