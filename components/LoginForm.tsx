import { View, Text, TextInput, Pressable } from 'react-native';
import React, { useState } from 'react';

interface LoginFormProps {
  onLogin?: (email: string, password: string) => void;
}

const LoginForm = ({ onLogin }: LoginFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (onLogin) {
      onLogin(email, password);
    }
  };

  return (
    <View className="w-full max-w-md p-6">
      <Text className="text-2xl font-bold text-center mb-6">Login</Text>
      
      <View className="mb-4">
        <Text className="mb-2 text-gray-700">Email</Text>
        <TextInput
          className="border border-gray-300 rounded-lg p-3 bg-white"
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <View className="mb-4">
        <Text className="mb-2 text-gray-700">Password</Text>
        <TextInput
          className="border border-gray-300 rounded-lg p-3 bg-white"
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      <Pressable
        className="bg-blue-500 rounded-lg p-4 mt-2"
        onPress={handleLogin}
      >
        <Text className="text-white text-center font-semibold text-lg">
          Login
        </Text>
      </Pressable>
    </View>
  );
};

export default LoginForm;
