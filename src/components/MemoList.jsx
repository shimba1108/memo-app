import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default function MemoList() {
  return (
    <ScrollView>
      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2020/01/01</Text>
        </View>
        <View>
          <Text style={styles.memoListItemDelete}>✕</Text>
        </View>
      </View>
      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2020/01/01</Text>
        </View>
        <View>
          <Text style={styles.memoListItemDelete}>✕</Text>
        </View>
      </View>
      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2020/01/01</Text>
        </View>
        <View>
          <Text style={styles.memoListItemDelete}>✕</Text>
        </View>
      </View>
      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2020/01/01</Text>
        </View>
        <View>
          <Text style={styles.memoListItemDelete}>✕</Text>
        </View>
      </View>
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
});
