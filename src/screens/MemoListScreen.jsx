import React from 'react';
import { View, StyleSheet } from 'react-native';
import AddButton from '../components/AddButton';
import MemoList from '../components/MemoList';
import AppBar from '../components/AppBar';

export default function MemoListScreen() {
  return (
    <View style={styles.container}>
      <AppBar />
      <MemoList />
      <AddButton />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
});
