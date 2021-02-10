import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';
import AddButton from '../components/AddButton';

import AppBar from '../components/AppBar';

export default function MemodetailScreen() {
  return (
    <View style={styles.container}>
      <AppBar />
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle}>買い物リスト</Text>
        <Text style={styles.memoDate}>2021/01/01</Text>
      </View>
      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoText}>
          未来が読める「だけ」では価値はないのです。その恩恵にあずかるためには、未来に向かう電車が来るタイミングで、
          必要なリソースを揃えて、駅のホームで待っていなければなりません。そのためには、
          まず自分が持っている手持ちのカードをきちんと把握し、電車が来るまでの残り時間の中で、足りない条件を揃える必要があります。
        </Text>
      </ScrollView>
      <AddButton style={{ top: 160, bottom: 'auto' }}>+</AddButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  memoHeader: {
    backgroundColor: '#467FD3',
    height: 96,
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 19,
  },
  memoTitle: {
    color: '#FFF',
    lineHeight: 32,
    fontSize: 20,
    fontWeight: 'bold',
  },
  memoDate: {
    color: '#cecece',
    fontSize: 12,
    lineHeight: 16,
  },
  memoBody: {
    paddingVertical: 32,
    paddingHorizontal: 27,
  },
  memoText: {
    fontSize: 16,
    lineHeight: 24,
  },
});
