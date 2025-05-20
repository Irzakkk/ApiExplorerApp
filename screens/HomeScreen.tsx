import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput, ActivityIndicator, RefreshControl, Button, useColorScheme } from 'react-native';
import axios from 'axios';
import ApiItem from '../components/ApiItem';
import { useTheme } from '../contexts/ThemeContext';
import { useLayoutEffect } from 'react';


export default function HomeScreen({ navigation }: any) {
  const [apis, setApis] = useState<any[]>([]);
  const [filteredApis, setFilteredApis] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const { theme, toggleTheme } = useTheme();

  const isDark = theme === 'dark';
useLayoutEffect(() => {
  navigation.setOptions({
    headerRight: () => (
      <Button
        title={isDark ? 'Light' : 'Dark'}
        onPress={toggleTheme}
        color={isDark ? '#fff' : '#000'} // optional: style based on theme
      />
    ),
  });
}, [navigation, toggleTheme, isDark]);

  const fetchApis = async () => {
    try {
      const response = await axios.get('https://api.apis.guru/v2/list.json');
      const data = Object.keys(response.data).map((key) => ({
        name: key,
        apiId: key,
        ...response.data[key],
      }));
      setApis(data);
      setFilteredApis(data);
    } catch (error) {
      console.error('Error fetching APIs:', error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchApis();
  }, []);

  const handleRefresh = () => {
    setRefreshing(true);
    fetchApis();
  };

  const handleSearch = (text: string) => {
    setSearchQuery(text);
    const filtered = apis.filter(api => api.name.toLowerCase().includes(text.toLowerCase()));
    setFilteredApis(filtered);
  };

  const themedStyles = getStyles(isDark);

  if (loading) {
    return (
      <View style={themedStyles.center}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  return (
    <View style={themedStyles.container}>
      {/* <Button title={`Switch to ${isDark ? 'Light' : 'Dark'} Mode`} onPress={toggleTheme} /> */}
      <TextInput
        style={themedStyles.search}
        placeholder="Search APIs..."
        placeholderTextColor={isDark ? '#aaa' : '#555'}
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredApis}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <ApiItem item={item} onPress={() => navigation.navigate('Details', { apiId: item.apiId })} />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
        ListEmptyComponent={<Text style={themedStyles.empty}>No APIs found.</Text>}
      />
    </View>
  );
}

const getStyles = (isDark: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 40,
      paddingHorizontal: 10,
      backgroundColor: isDark ? '#000' : '#fff',
    },
    search: {
      backgroundColor: isDark ? '#222' : '#eee',
      color: isDark ? '#fff' : '#000',
      padding: 10,
      marginBottom: 10,
      borderRadius: 8,
    },
    empty: {
      textAlign: 'center',
      marginTop: 20,
      fontSize: 16,
      color: isDark ? '#ccc' : '#888',
    },
    center: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: isDark ? '#000' : '#fff',
    },
  });
