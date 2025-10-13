import "@/global.css";
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const Login = ({ navigation }) => {
  return (
    <View className="flex-1 bg-black justify-center items-center px-6">
      <Text className="text-3xl font-bold text-white mb-2">MusicApp</Text>
      <Text className="text-gray-400 mb-8">Escucha tu música favorita</Text>
      
      <TouchableOpacity
        onPress={() => navigation.navigate('Register')}
        className="w-full bg-purple-600 py-3 rounded-full mb-3"
      >
        <Text className="text-white text-center font-bold text-lg">Crear Cuenta</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        onPress={() => navigation.navigate('MainApp')}
        className="w-full border-2 border-purple-600 py-3 rounded-full"
      >
        <Text className="text-purple-600 text-center font-bold text-lg">Iniciar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Login;
