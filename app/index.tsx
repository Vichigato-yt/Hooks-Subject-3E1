import { useEffect, useState } from "react";
import { Link } from "expo-router";
import { Alert, Text, TextInput, TouchableOpacity, View, ScrollView } from "react-native";

type estadoUsuario = "Activo" | "Registrando" | "Logeando" | "Esperando";

export default function Index() {
  const [estadoUsuario, setEstadoUsuario] = useState<estadoUsuario>("Esperando");
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    if (estadoUsuario === "Esperando") {
      Alert.alert("Bienvenido", "Espero tu respuesta");
    }
    if (estadoUsuario === "Registrando") {
      Alert.alert("Estado", "Registrandote");
    }
  }, [estadoUsuario]);

  console.log(estadoUsuario);

  const handleEnviar = () => {
    if (!nombre.trim() || !email.trim() || !telefono.trim() || !mensaje.trim()) {
      Alert.alert("Error", "Por favor completa todos los campos");
      return;
    }
    setEstadoUsuario("Registrando");
    console.log({
      nombre,
      email,
      telefono,
      mensaje,
    });
  };

  return (
    <ScrollView
      className="flex-1 bg-black px-6"
      contentContainerClassName="justify-center flex-grow"
    >
      <View className="gap-6">
        <Text className="text-purple-400 text-3xl font-bold text-center mb-8">
          Formulario
        </Text>

        {/* Nombre */}
        <View className="gap-2">
          <Text className="text-purple-300 text-sm font-medium">
            Nombre
          </Text>
          <TextInput
            className="bg-purple-950 border border-purple-700 rounded-lg px-4 py-3 text-purple-100 text-base"
            placeholderTextColor="#d8b4fe"
            placeholder="Ingresa tu nombre"
            value={nombre}
            onChangeText={setNombre}
          />
        </View>

        {/* Email */}
        <View className="gap-2">
          <Text className="text-purple-300 text-sm font-medium">
            Email
          </Text>
          <TextInput
            className="bg-purple-950 border border-purple-700 rounded-lg px-4 py-3 text-purple-100 text-base"
            placeholderTextColor="#d8b4fe"
            placeholder="tu@email.com"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>

        {/* Teléfono */}
        <View className="gap-2">
          <Text className="text-purple-300 text-sm font-medium">
            Teléfono
          </Text>
          <TextInput
            className="bg-purple-950 border border-purple-700 rounded-lg px-4 py-3 text-purple-100 text-base"
            placeholderTextColor="#d8b4fe"
            placeholder="+593 999 999 999"
            value={telefono}
            onChangeText={setTelefono}
            keyboardType="phone-pad"
          />
        </View>

        {/* Mensaje */}
        <View className="gap-2">
          <Text className="text-purple-300 text-sm font-medium">
            Mensaje
          </Text>
          <TextInput
            className="bg-purple-950 border border-purple-700 rounded-lg px-4 py-3 text-purple-100 text-base h-24"
            placeholderTextColor="#d8b4fe"
            placeholder="Escribe tu mensaje"
            value={mensaje}
            onChangeText={setMensaje}
            multiline
            textAlignVertical="top"
          />
        </View>

        {/* Botón Enviar */}
        <TouchableOpacity
          className="bg-purple-600 rounded-lg py-4 mt-4"
          onPress={handleEnviar}
        >
          <Text className="text-white text-center font-bold text-lg">
            Enviar
          </Text>
        </TouchableOpacity>

        {/* Link al Dashboard */}
        <Link href="/DashboardScreen" asChild>
          <TouchableOpacity className="bg-purple-800 rounded-lg py-3 mt-2">
            <Text className="text-white text-center font-bold text-base">
              Ir al Dashboard
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </ScrollView>
  );
}