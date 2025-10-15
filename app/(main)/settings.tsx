import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';

export default function SettingsScreen() {
  const router = useRouter();
  const [notificaciones, setNotificaciones] = useState(true);
  const [privado, setPrivado] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-black">
      <ScrollView>
        <View className="px-6 py-6">
          {/* Volver al dashboard */}
          <TouchableOpacity onPress={() => router.push('/DashboardScreen')} className="mb-6">
            <Text className="text-purple-600 font-bold">← Volver</Text>
          </TouchableOpacity>

          <Text className="text-white text-3xl font-bold mb-8">Configuración</Text>

          {/* Perfil */}
          <View className="bg-neutral-900 rounded-lg p-6 mb-6">
            <Text className="text-white font-bold text-lg mb-4">Perfil</Text>
            <View className="flex-row items-center">
              <View className="w-16 h-16 bg-purple-600 rounded-full mr-4" />
              <View>
                <Text className="text-white font-semibold">Usuario</Text>
                <Text className="text-gray-400 text-sm">usuario@ejemplo.com</Text>
              </View>
            </View>
          </View>

          {/* Preferencias */}
          <View className="bg-neutral-900 rounded-lg p-6 mb-6">
            <Text className="text-white font-bold text-lg mb-4">Preferencias</Text>

            <TouchableOpacity
              onPress={() => setNotificaciones(!notificaciones)}
              className="flex-row justify-between items-center mb-4 pb-4 border-b border-neutral-800"
            >
              <Text className="text-white">Notificaciones</Text>
              <View
                className={`w-12 h-6 rounded-full ${
                  notificaciones ? 'bg-purple-600' : 'bg-gray-600'
                }`}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setPrivado(!privado)}
              className="flex-row justify-between items-center pb-4 border-b border-neutral-800"
            >
              <Text className="text-white">Perfil Privado</Text>
              <View
                className={`w-12 h-6 rounded-full ${
                  privado ? 'bg-purple-600' : 'bg-gray-600'
                }`}
              />
            </TouchableOpacity>
          </View>

          {/* Información */}
          <View className="bg-neutral-900 rounded-lg p-6 mb-6">
            <Text className="text-white font-bold text-lg mb-4">Información</Text>
            <Text className="text-gray-400 text-sm mb-2">Versión: 1.0.0</Text>
            <Text className="text-gray-400 text-sm">© 2024 Música App</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
