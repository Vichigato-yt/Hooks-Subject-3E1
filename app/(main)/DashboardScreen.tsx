import React from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

const HomeScreen = () => {
  const playlists = [
    { id: 1, title: 'Mi Playlist 1', songs: 24 },
    { id: 2, title: 'Vibes Nocturnos', songs: 18 },
    { id: 3, title: 'Gym Mix', songs: 32 },
    { id: 4, title: 'Relajación', songs: 15 },
  ];

  return (
    <ScrollView className="flex-1 bg-black">
      <View className="px-4 pt-6 pb-4">
        <Text className="text-3xl font-bold text-white mb-6">Hola 👋</Text>
        
        <Text className="text-lg font-semibold text-white mb-4">Tus Playlists</Text>
        
        {playlists.map((playlist) => (
          <TouchableOpacity
            key={playlist.id}
            className="bg-gray-900 rounded-lg p-4 mb-3 flex-row items-center justify-between border border-gray-800"
          >
            <View>
              <Text className="text-white font-semibold text-base">{playlist.title}</Text>
              <Text className="text-gray-400 text-sm">{playlist.songs} canciones</Text>
            </View>
            <Play size={24} color="#a855f7" />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

// Pantalla de Info
const InfoScreen = () => {
  const recentSongs = [
    { id: 1, title: 'Canción 1', artist: 'Artista A' },
    { id: 2, title: 'Canción 2', artist: 'Artista B' },
    { id: 3, title: 'Canción 3', artist: 'Artista C' },
  ];

  return (
    <ScrollView className="flex-1 bg-black">
      <View className="px-4 pt-6 pb-4">
        <Text className="text-2xl font-bold text-white mb-6">Información</Text>
        
        <View className="bg-gradient-to-b from-purple-900 to-gray-900 rounded-lg p-6 mb-6">
          <Music size={50} color="#a855f7" />
          <Text className="text-white text-xl font-bold mt-4">Reciente</Text>
        </View>
        
        <Text className="text-lg font-semibold text-white mb-4">Últimas Canciones</Text>
        
        {recentSongs.map((song) => (
          <View key={song.id} className="bg-gray-900 rounded-lg p-4 mb-3 border border-gray-800">
            <Text className="text-white font-semibold">{song.title}</Text>
            <Text className="text-gray-400 text-sm">{song.artist}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

// Pantalla de Tipo de Música
const MusicTypeScreen = () => {
  const genres = [
    { id: 1, name: 'Pop', color: 'bg-pink-600' },
    { id: 2, name: 'Rock', color: 'bg-red-600' },
    { id: 3, name: 'Hip-Hop', color: 'bg-yellow-600' },
    { id: 4, name: 'Jazz', color: 'bg-blue-600' },
    { id: 5, name: 'Clásica', color: 'bg-indigo-600' },
    { id: 6, name: 'Electrónica', color: 'bg-purple-600' },
  ];

  return (
    <ScrollView className="flex-1 bg-black">
      <View className="px-4 pt-6 pb-4">
        <Text className="text-2xl font-bold text-white mb-6">Géneros</Text>
        
        {genres.map((genre) => (
          <TouchableOpacity
            key={genre.id}
            className={`${genre.color} rounded-lg p-6 mb-4 justify-center items-center`}
          >
            <Text className="text-white text-2xl font-bold">{genre.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

// Pantalla de Tabs (Info, Dashboard, Tipo Música, Tabs)
const TabsScreen = () => {
  const [activeTab, setActiveTab] = useState('info');

  return (
    <View className="flex-1 bg-black">
      <View className="flex-1">
        {activeTab === 'info' && <InfoScreen />}
        {activeTab === 'dashboard' && <HomeScreen />}
        {activeTab === 'music' && <MusicTypeScreen />}
      </View>
      
      <View className="flex-row border-t border-gray-800 bg-gray-900">
        <TouchableOpacity
          onPress={() => setActiveTab('info')}
          className={`flex-1 py-3 items-center ${activeTab === 'info' ? 'border-t-2 border-purple-600' : ''}`}
        >
          <Text className={activeTab === 'info' ? 'text-purple-600 font-bold' : 'text-gray-400'}>
            Info
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          onPress={() => setActiveTab('dashboard')}
          className={`flex-1 py-3 items-center ${activeTab === 'dashboard' ? 'border-t-2 border-purple-600' : ''}`}
        >
          <Text className={activeTab === 'dashboard' ? 'text-purple-600 font-bold' : 'text-gray-400'}>
            Dashboard
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          onPress={() => setActiveTab('music')}
          className={`flex-1 py-3 items-center ${activeTab === 'music' ? 'border-t-2 border-purple-600' : ''}`}
        >
          <Text className={activeTab === 'music' ? 'text-purple-600 font-bold' : 'text-gray-400'}>
            Tipo Música
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Pantalla de Now Playing
const NowPlayingScreen = () => {
  return (
    <View className="flex-1 bg-black justify-center items-center px-6">
      <View className="bg-gray-900 w-64 h-64 rounded-2xl mb-8 justify-center items-center border-2 border-purple-600">
        <Music size={100} color="#a855f7" />
      </View>
      
      <Text className="text-2xl font-bold text-white mb-2">Canción Actual</Text>
      <Text className="text-gray-400 mb-8">Artista Desconocido</Text>
      
      <View className="flex-row gap-6">
        <TouchableOpacity className="bg-gray-800 p-4 rounded-full">
          <Text className="text-white">⏮</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-purple-600 p-6 rounded-full">
          <Play size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity className="bg-gray-800 p-4 rounded-full">
          <Text className="text-white">⏭</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
};

export default DashboardScreen;