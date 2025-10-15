import Login from '@/components/auth/Login';
import Signup from '@/components/auth/Signup';
import "@/global.css";
import React, { useState } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <SafeAreaView className="flex-1">
      {isLogin ? (
        <Login setIsLogin={setIsLogin} />
      ) : (
        <Signup setIsLogin={setIsLogin} />
      )}
    </SafeAreaView>
  );
}