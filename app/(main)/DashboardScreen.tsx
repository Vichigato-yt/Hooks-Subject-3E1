import "@/global.css";
import { Ionicons } from '@expo/vector-icons';
import { selectionAsync } from "expo-haptics";
import { router } from "expo-router";
import React, { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

const DashboardScreen = () => {
  const [activeTab, setActiveTab] = useState('todas');

  const songs = [
    { id: 1, title: 'Highway to Hell', artist: 'AC/DC', duration: '3:28', category: 'rock' },
    { id: 2, title: 'One (Solo)', artist: 'Metallica', duration: '8:36', category: 'metal' },
    { id: 3, title: 'Free bird', artist: 'Lynyrd Skynyrd', duration: '5:40', category: "rock 70's" },
    { id: 4, title: 'Back in Black', artist: 'AC/DC', duration: '4:15', category: 'heavy rock' },
    { id: 5, title: 'Paranoid', artist: 'Black Sabbath', duration: '2:53', category: "rock 70's" },
    { id: 6, title: 'Ace of Spades', artist: 'Motörhead', duration: '2:47', category: 'metal' },
    { id: 7, title: 'Escape', artist: 'Angel Caido', duration: '4:50', category: 'metal' },
    { id: 8, title: 'This Love', artist: 'Pantera', duration: '2:34', category: 'heavy rock' },
    { id: 9, title: 'Baby Blue', artist: 'Badfinger', duration: '2:34', category: "rock 70's" },
    { id: 10, title: 'Panama', artist: 'Van Halen', duration: '2:34', category: "heavy rock" },
  ];
  const categories = {
    'Rock': songs.filter(song => song.category === 'rock'),
    'Heavy Rock': songs.filter(song => song.category === 'heavy rock'),
    'Metal': songs.filter(song => song.category === 'metal'),
    "Rock de los 70's": songs.filter(song => song.category === "rock 70's"),
  };

  return (
    <View className="flex-1 bg-black">
      {/* Header */}
      <View className="pt-16 pb-8 px-8">
        <View className="flex-row items-center justify-between mb-8">
          <Text className="text-3xl font-black text-purple-400">BIBLIOTECA</Text>
        </View>
      </View>
      {/* Grid of Songs */}

{/* Grid of Songs */}
<ScrollView alwaysBounceVertical className="px-8 pt-6">
  {Object.entries(categories).map(([categoryName, categorySongs]) => (
    <View key={categoryName} className="mb-12">
      <Text className="text-purple-400 text-2xl font-black mb-6">{categoryName.toUpperCase()}</Text>

      <View className="flex-row p-4 flex-wrap items-center justify-between">
  {categorySongs.map((song) => (  
    <View
      key={song.id}
      className="w-[48%] mb-6 p-4 bg-purple-800 rounded-2xl border-2 border-purple-500 shadow-md shadow-purple-900"
    >
      {/* Album Art */}
      <View className="w-full h-36 rounded-xl bg-purple-700 items-center justify-center mb-5">
        <Ionicons name="musical-notes" size={34} color="#D8B4FE" />
      </View>

      {/* Song Info */}
      <Text className="text-white font-black text-lg mb-2 tracking-wide">{song.title}</Text>
      <Text className="text-gray-300 font-semibold text-sm mb-5">{song.artist}</Text>

      {/* Duration & Play Button */}
      <View className="flex-row items-center justify-between">
        <Text className="text-gray-400 font-bold text-sm">{song.duration}</Text>
        <TouchableOpacity
          onPress={() => {
            router.push("/nowPlaying");
            selectionAsync();
          }}
          className="w-10 h-10 rounded-full bg-purple-600 items-center justify-center"
        >
          <Ionicons name="play" size={28} color="#D8B4FE" />
        </TouchableOpacity>
      </View>
    </View>
  
  ))}
</View>

    </View>
  ))}

  <View className="pb-12" />
</ScrollView>
    </View>
  );
};

export default DashboardScreen;

