import "@/global.css";
import { Ionicons } from '@expo/vector-icons';
import { selectionAsync } from 'expo-haptics';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

const NowPlaying = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <View className="flex-1 bg-black">
      <ScrollView className="flex-1">
        {/* Header */}
        <View className="pt-12 pb-6 px-6 flex-row items-center justify-between">
          <TouchableOpacity 
            onPress={() => router.back()}
            className="w-12 h-12 rounded-full bg-purple-800 border-2 border-purple-500 items-center justify-center"
          >
            <Ionicons name="chevron-down" size={24} color="#D8B4FE" />
          </TouchableOpacity>
          <Text className="text-purple-400 font-black text-sm tracking-widest">
            ESCUCHANDO AHORA
          </Text>
          <View className="w-12 h-12" />
        </View>

        {/* Song Info */}
        <View className="px-8 mb-4">
          <Text className="text-white font-black text-3xl mb-2">
            Nombre Canción
          </Text>
          <Text className="text-gray-400 font-bold text-lg mb-4">
            Artista
          </Text>
          <Text className="text-purple-400 font-semibold text-lg mb-4">
            {isPlaying ? "Reproduciendo" : "Pausada"}
          </Text>

          {/* Barra de progreso */}
          <View className="h-2 bg-purple-700 rounded-full border border-purple-600">
            <View className="h-full w-2/5 bg-purple-400 rounded-full" /> {/* 40% progreso */}
          </View>
        </View>

        {/* Main Play Button */}
        <View className="items-center">
          <TouchableOpacity 
            onPress={() => {
              setIsPlaying(!isPlaying);
              selectionAsync();
            }}
            className="w-20 h-20 rounded-full bg-purple-600 border-4 border-purple-400 items-center justify-center shadow-2xl active:opacity-75"
          >
            <Ionicons 
              name={isPlaying ? "pause" : "play"} 
              size={40} 
              color="#D8B4FE" 
            />
          </TouchableOpacity>
        </View>

      </ScrollView>
    </View>
  );
};

export default NowPlaying;
