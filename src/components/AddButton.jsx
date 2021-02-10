import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AddButton() {
  return (
    <View style={styles.addList}>
      <Text style={styles.addListText}>+</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  addList: {
    backgroundColor: '#467FD3',
    height: 64,
    width: 64,
    // fontSize: 20,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 40,
    bottom: 40,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
  },
  addListText: {
    color: 'white',
    fontSize: 50,
    lineHeight: 50,
  },
});
