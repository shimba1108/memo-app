import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.appbar}>
      <View style={styles.appbarInner}>
        <Text style={styles.appbarTitle}>Memo App</Text>
        <Text style={styles.appbarRight}>Log out</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appbar: {
    width: '100%',
    height: 104,
    backgroundColor: '#467FD3',
    justifyContent: 'flex-end',
  },
  appbarInner: {
    alignItems: 'center',
  },
  appbarTitle: {
    fontSize: 22,
    marginBottom: 8,
    lineHeight: 32,
    fontWeight: 'bold',
    color: 'white',
  },
  appbarRight: {
    position: 'absolute',
    right: 19,
    bottom: 14,
    color: 'rgba(255, 255, 255, 0.8)',
  },
});
