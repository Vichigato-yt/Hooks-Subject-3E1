import { useState } from "react";
import { Text, View, Pressable, ScrollView } from "react-native";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";

export default function Index() {
  const [showLogin, setShowLogin] = useState(true);

  const handleLogin = (email: string, password: string) => {
    console.log('Login:', { email, password });
    alert(`Login successful!\nEmail: ${email}`);
  };

  const handleSignUp = (name: string, email: string, password: string) => {
    console.log('Sign Up:', { name, email, password });
    alert(`Sign up successful!\nName: ${name}\nEmail: ${email}`);
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
        }}
      >
        {showLogin ? (
          <LoginForm onLogin={handleLogin} />
        ) : (
          <SignUpForm onSignUp={handleSignUp} />
        )}

        <View style={{ marginTop: 20 }}>
          <Pressable onPress={() => setShowLogin(!showLogin)}>
            <Text style={{ color: "#3b82f6", textDecorationLine: "underline" }}>
              {showLogin
                ? "Don't have an account? Sign Up"
                : "Already have an account? Login"}
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}
