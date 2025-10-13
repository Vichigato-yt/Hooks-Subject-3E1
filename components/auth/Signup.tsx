import { TouchableOpacity ,View, Text } from 'react-native'
import React from 'react'


const Signup = ({ navigation }) => {
  return (
    <View className="flex-1 bg-black justify-center items-center px-6">
      <TouchableOpacity onPress={() => navigation.goBack()} className="absolute top-12 left-6">
        <Text className="text-purple-600 text-lg">← Atrás</Text>
      </TouchableOpacity>
      
      <Text className="text-3xl font-bold text-white mb-8 mt-12">Crear Cuenta</Text>
      
      <View className="w-full mb-4 bg-gray-900 rounded-lg p-4 border border-gray-700">
        <Text className="text-gray-300 mb-2">Correo electrónico</Text>
        <Text className="text-gray-500">tu@correo.com</Text>
      </View>
      
      <View className="w-full mb-4 bg-gray-900 rounded-lg p-4 border border-gray-700">
        <Text className="text-gray-300 mb-2">Contraseña</Text>
        <Text className="text-gray-500">••••••••</Text>
      </View>
      
      <View className="w-full mb-8 bg-gray-900 rounded-lg p-4 border border-gray-700">
        <Text className="text-gray-300 mb-2">Confirmar Contraseña</Text>
        <Text className="text-gray-500">••••••••</Text>
      </View>
      
      <TouchableOpacity
        onPress={() => navigation.navigate('MainApp')}
        className="w-full bg-purple-600 py-3 rounded-full"
      >
        <Text className="text-white text-center font-bold text-lg">Registrarse</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Signup;