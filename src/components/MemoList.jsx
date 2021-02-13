import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default function MemoList() {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <TouchableOpacity
        style={styles.memoListItem}
        onPress={() => { navigation.navigate('MemoDetail'); }}
      >
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2020/01/01</Text>
        </View>
        <TouchableOpacity style={styles.memoDelete}>
          <Text style={styles.memoListItemDelete}>✕</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  memoListItem: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.15)',
  },
  memoListItemTitle: {
    lineHeight: 32,
    fontSize: 16,
  },
  memoListItemDate: {
    lineHeight: 16,
    fontSize: 12,
    color: '#848484',
  },
  memoListItemDelete: {
    lineHeight: 32,
    fontSize: 20,
    color: '#848484',
  },
  memoDelete: {
    padding: 8,
  },
});
