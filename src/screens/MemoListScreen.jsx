import React from 'react';
import { View, StyleSheet } from 'react-native';
import AddButton from '../components/AddButton';
import MemoList from '../components/MemoList';

export default function MemoListScreen(props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <MemoList />
      <AddButton
        name="plus"
        onPress={() => { navigation.navigate('MemoCreator'); }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
});
