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

          <Text className="text-purple-300 text-3xl font-black mb-8">Configuración</Text>

          {/* Perfil */}
          <View className="bg-purple-900 rounded-lg p-6 mb-6 border border-purple-700">
            <Text className="text-purple-300 font-black text-lg mb-4">Perfil</Text>
            <View className="flex-row items-center">
              <View className="w-16 h-16 bg-purple-700 rounded-full mr-4 border border-purple-600" />
              <View>
                <Text className="text-purple-200 font-semibold">Usuario</Text>
                <Text className="text-purple-400 text-sm">usuario@ejemplo.com</Text>
              </View>
            </View>
          </View>

          {/* Preferencias */}
          <View className="bg-purple-900 rounded-lg p-6 mb-6 border border-purple-700">
            <Text className="text-purple-300 font-black text-lg mb-4">Preferencias</Text>

            <TouchableOpacity
              onPress={() => setNotificaciones(!notificaciones)}
              className="flex-row justify-between items-center mb-4 pb-4 border-b border-purple-700"
            >
              <Text className="text-purple-200">Notificaciones</Text>
              <View
                className={`w-12 h-6 rounded-full ${
                  notificaciones ? 'bg-purple-600' : 'bg-purple-700'
                }`}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setPrivado(!privado)}
              className="flex-row justify-between items-center pb-4 border-b border-purple-700"
            >
              <Text className="text-purple-200">Perfil Privado</Text>
              <View
                className={`w-12 h-6 rounded-full ${
                  privado ? 'bg-purple-600' : 'bg-purple-700'
                }`}
              />
            </TouchableOpacity>
          </View>

          {/* Información */}
          <View className="bg-purple-900 rounded-lg p-6 mb-6 border border-purple-700">
            <Text className="text-purple-300 font-black text-lg mb-4">Información</Text>
            <Text className="text-purple-400 text-sm mb-2">Versión: 1.0.0</Text>
            <Text className="text-purple-400 text-sm">© 2024 Música App</Text>
          </View>

          {/* Botón cerrar sesión */}
          <TouchableOpacity
            onPress={() => router.push('../app/index')}
            className="bg-purple-700 rounded-lg py-4 items-center"
          >
            <Text className="text-purple-200 font-black text-lg">Cerrar sesión</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
