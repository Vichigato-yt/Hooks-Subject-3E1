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
    { id: 2, title: 'Master of Puppets', artist: 'Metallica', duration: '8:36', category: 'metal' },
    { id: 3, title: 'Smoke on the Water', artist: 'Deep Purple', duration: '5:40', category: "rock 70's" },
    { id: 4, title: 'Back in Black', artist: 'AC/DC', duration: '4:15', category: 'heavy rock' },
    { id: 5, title: 'Paranoid', artist: 'Black Sabbath', duration: '2:53', category: "rock 70's" },
    { id: 6, title: 'Ace of Spades', artist: 'Motörhead', duration: '2:47', category: 'metal' },
    { id: 7, title: 'We´ll be back', artist: 'Megadeth', duration: '4:50', category: 'metal' },
    { id: 8, title: 'Breaking the Law', artist: 'Judas Priest', duration: '2:34', category: 'heavy rock' },
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
      <View className="pt-12 pb-6 px-6">
        <View className="flex-row items-center justify-between mb-6">
          <Text className="text-3xl font-black text-purple-400">BIBLIOTECA</Text>
          <View className="flex-row gap-3">
            {['search-outline', 'settings-outline'].map((icon, i) => (
              <TouchableOpacity
                key={i}
                className="w-10 h-10 rounded-full bg-purple-800 border-2 border-purple-500 items-center justify-center"
              >
                <Ionicons name={icon as any} size={20} color="#D8B4FE" />
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Search Bar */}
        <View className="bg-purple-800 rounded-2xl px-4 py-3 flex-row items-center border-2 border-purple-500">
          <Ionicons name="search-outline" size={20} color="#D8B4FE" />
          <TextInput
            className="flex-1 text-white ml-3 text-base font-bold"
            placeholder="Buscar canciones..."
            placeholderTextColor="#A78BFA"
          />
        </View>
      </View>

      {/* Tabs */}
      <View className="flex-row px-6 pt-6 gap-3 border-b border-purple-700">
        {['todas', 'favoritas', 'recientes'].map((tab) => (
          <TouchableOpacity
            key={tab}
            className={`pb-3 px-3 border-b-2 ${activeTab === tab ? 'border-purple-400' : 'border-transparent'}`}
            onPress={() => setActiveTab(tab)}
          >
            <Text className={`font-black tracking-widest ${activeTab === tab ? 'text-purple-400' : 'text-gray-500'}`}>
              {tab.toUpperCase()}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Grid of Songs */}
      <ScrollView className="px-6 pt-4">
  {Object.entries(categories).map(([categoryName, categorySongs]) => (
    <View key={categoryName} className="mb-8">
      <Text className="text-purple-400 text-xl font-black mb-4">{categoryName.toUpperCase()}</Text>

      <View className="justify-between flex-wrap flex-row">
        {categorySongs.map((song) => (
          <View
            key={song.id}
            className="w-[48%] mb-4 p-4 bg-purple-800 rounded-xl border-2 border-purple-500 shadow-md shadow-purple-900"
          >
            {/* Album Art */}
            <View className="w-full h-32 rounded-lg bg-purple-700 items-center justify-center mb-4">
              <Ionicons name="musical-notes" size={30} color="#D8B4FE" />
            </View>

            {/* Song Info */}
            <Text className="text-white font-black text-base mb-1 tracking-wide">{song.title}</Text>
            <Text className="text-gray-300 font-semibold text-sm mb-3">{song.artist}</Text>

            {/* Duration & Play Button */}
            <View className="flex-row items-center justify-between">
              <Text className="text-gray-400 font-bold text-sm">{song.duration}</Text>
              <TouchableOpacity onPress={() => {
                router.push("/nowPlaying");
                selectionAsync();
              }}className="w-8 h-8 rounded-full bg-purple-600 items-center justify-center">
                <Ionicons name="play" size={27} color="#D8B4FE" />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </View>
  ))}

  <View className="pb-8" />
</ScrollView>

    </View>
  );
};

export default DashboardScreen;
