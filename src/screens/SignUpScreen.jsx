import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
} from 'react-native';
import AppBar from '../components/AppBar';
import Button from '../components/Button';

export default function SignUpScreen() {
  return (
    <View style={styles.container}>
      <AppBar />
      <View style={styles.inner}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput value="Username" style={styles.input} />
        <TextInput value="Email" style={styles.input} />
        <TextInput value="Password" style={styles.input} />
        <Button label="Signup" />
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>Already registered</Text>
          <Text style={styles.footerLink}>Login here!</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  inner: {
    paddingHorizontal: 27,
    paddingVertical: 24,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    fontSize: 16,
    height: 48,
    borderColor: '#DDDDDD',
    borderWidth: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 8,
    marginBottom: 16,
    color: '#d1d1d1',
  },
  footerContainer: {
    flexDirection: 'row',
  },
  footerText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 10,
  },
  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    color: '#467FD3',
  },
});