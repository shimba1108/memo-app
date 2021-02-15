import { useNavigation } from '@react-navigation/native';
import {
  arrayOf,
  instanceOf,
  shape,
  string,
} from 'prop-types';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import firebase from 'firebase';
import { dateToString } from '../utils';

export default function MemoList(props) {
  const { memos } = props;
  const navigation = useNavigation();

  function deleteMemo(id) {
    const { currentUser } = firebase.auth();
    if (currentUser) {
      const db = firebase.firestore();
      const ref = db.collection(`users/${currentUser.uid}/memos`).doc(id);
      Alert.alert('Delete memo', 'Are you sure?', [
        {
          text: 'Cancel',
          onPress: () => {},
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            ref.delete().catch(() => { Alert.alert('Failed Delete'); });
          },
        },
      ]);
    }
  }

  function renderItem({ item }) {
    return (
      <TouchableOpacity
        key={item.id}
        style={styles.memoListItem}
        onPress={() => { navigation.navigate('MemoDetail', { id: item.id }); }}
      >
        <View style={styles.memoInner}>
          <Text style={styles.memoListItemTitle} numberOfLines={1}>{item.bodyText}</Text>
          <Text style={styles.memoListItemDate}>{dateToString(item.updatedAt)}</Text>
        </View>
        <TouchableOpacity
          style={styles.memoDelete}
          onPress={() => { deleteMemo(item.id); }}
        >
          <Text style={styles.memoListItemDelete}>✕</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={memos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

MemoList.propTypes = {
  memos: arrayOf(shape({
    id: string,
    bodyText: string,
    updatedAt: instanceOf(Date),
  })).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  memoInner: {
    flex: 1,
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
