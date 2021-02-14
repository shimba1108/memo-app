import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import AddButton from '../components/AddButton';
import LogOutButton from '../components/LogOutButton';
import MemoList from '../components/MemoList';

export default function MemoListScreen(props) {
  const { navigation } = props;
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogOutButton />,
    });
  }, []);

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
