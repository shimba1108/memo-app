// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.appbar}>
        <View style={styles.appbarInner}>
          <Text style={styles.appbarTitle}>Memo App</Text>
          <Text style={styles.appbarRight}>Log out</Text>
        </View>
      </View>

      <View>
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
      </View>
      <View style={styles.addList}>
        <Text style={styles.addListText}>+</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
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
