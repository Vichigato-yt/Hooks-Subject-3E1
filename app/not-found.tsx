import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const not_found = () => {
  return (
    <View className="flex-1 bg-black items-center justify-center px-6">
      <Ionicons name="alert-circle-outline" size={80} color="#D8B4FE" className="mb-6" />
      <Text className="text-purple-400 text-4xl font-black mb-4">404</Text>
      <Text className="text-gray-400 text-center text-lg mb-8">
        Lo sentimos, la página que buscas no existe.
      </Text>

      <TouchableOpacity
        onPress={() => router.push('/')}
        className="bg-purple-600 px-6 py-3 rounded-full"
      >
        <Text className="text-white font-bold text-lg">Volver al inicio</Text>
      </TouchableOpacity>
    </View>
  );
};

export default not_found;
