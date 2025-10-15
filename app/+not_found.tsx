import "@/global.css";
import { Ionicons } from '@expo/vector-icons';
import { router, Stack } from 'expo-router';
import { Image, Text, TouchableOpacity, View } from 'react-native';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops! Página no encontrada" }} />
      <View className="flex-1 bg-gradient-to-b from-purple-900 via-purple-800 to-indigo-900 justify-center items-center px-8 bg-black">
        {/* Error 404 */}
        <Text className="text-yellow-300 text-8xl font-black mb-4 tracking-widest">
          404
        </Text>
        {/* Mensaje de error */}
        <Text className="text-white text-2xl font-black text-center mb-3 tracking-wide">
          ¡¿Qué Haces Aqui?!
        </Text>
        <Text className="text-gray-300 text-base text-center mb-8 font-semibold px-4">
          Tu no deberias de estar aqui Chico...
        </Text>
        {/* Botón de regreso */}
        <TouchableOpacity 
          onPress={() => router.replace('../app/(main)/DashboardScreen')}
          className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-3xl py-4 px-8 border-4 border-yellow-300 shadow-2xl active:opacity-75 flex-row items-center"
        >
          <Ionicons name="home" size={24} color="#6B21A8" />
          <Text className="text-purple-900 font-black text-lg ml-3 tracking-widest">
            VOLVER AL INICIO
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}