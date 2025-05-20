import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Linking, Button, ActivityIndicator } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../App';

type DetailsRouteProp = RouteProp<RootStackParamList, 'Details'>;

export default function DetailsScreen() {
  const { params } = useRoute<DetailsRouteProp>();
  const [apiData, setApiData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
  setLoading(true);
  fetch('https://api.apis.guru/v2/list.json')
    .then(res => res.json())
    .then(json => {
      const data = json[params.apiId];
      setApiData(data);
    })
    .catch(err => {
      console.error(err);
      setApiData(null);
    })
    .finally(() => setLoading(false));
}, [params.apiId]);


  if (loading || !apiData) return <ActivityIndicator style={{ marginTop: 50 }} />;

  const version = Object.keys(apiData.versions)[0];
  const versionData = apiData.versions[version];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{params.apiId}</Text>
      <Text style={styles.text}>Description: {apiData.info?.description || 'N/A'}</Text>
      <Text style={styles.text}>Base URL: {versionData.swaggerUrl}</Text>
      <Text style={styles.text}>Contact: {apiData.info?.contact?.email || 'N/A'}</Text>
      <Button title="Visit Docs" onPress={() => Linking.openURL(versionData.swaggerUrl)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  text: { marginBottom: 10, fontSize: 16 },
});
