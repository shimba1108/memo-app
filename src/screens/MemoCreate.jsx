import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
} from 'react-native';
import AddButton from '../components/AddButton';
import AppBar from '../components/AppBar';
import KeyboardSafeView from '../components/keyboardSafeView';

export default function MemoCreateScreen() {
  return (
    <KeyboardSafeView style={styles.container} behavior="height">
      <AppBar />
      <View style={styles.inputContainer}>
        <TextInput value="" multiline style={styles.input} />
      </View>
      <AddButton name="check" />
    </KeyboardSafeView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  inputContainer: {
    paddingHorizontal: 27,
    paddingVertical: 32,
    flex: 1,
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24,
  },
});
