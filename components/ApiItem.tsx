import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

type Props = {
  item: {
    name: string;
    info: {
      title?: string;
      description?: string;
    };
  };
  onPress: () => void;
};

const ApiItem: React.FC<Props> = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Text style={styles.title}>{item.info?.title || item.name}</Text>
      <Text style={styles.description}>
        {item.info?.description || 'No description available'}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 15,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    marginVertical: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  description: {
    marginTop: 4,
    fontSize: 14,
    color: '#666',
  },
});

export default ApiItem;
