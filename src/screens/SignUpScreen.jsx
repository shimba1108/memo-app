import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import Button from '../components/Button';

export default function SignUpScreen(props) {
  const { navigation } = props;
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput
          value={username}
          style={styles.input}
          placeholder="Username"
          onChangeText={(text) => { setUsername(text); }}
          autoCapitalize="none"
          keyboardType="default"
          textContentType="name"
        />
        <TextInput
          value={email}
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => { setEmail(text); }}
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"

        />
        <TextInput
          value={password}
          style={styles.input}
          placeholder="Password"
          onChangeText={(text) => { setPassword(text); }}
          autoCapitalize="none"
          keyboardType="password"
          secureTextEntry
          textContentType="password"

        />
        <Button
          label="SignUp"
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{ name: 'MemoList' }],
            });
          }}
        />
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>Already registered</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.reset({
                index: 0,
                routes: [{ name: 'LogIn' }],
              });
            }}
          >
            <Text style={styles.footerLink}>Login here!</Text>
          </TouchableOpacity>
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
    color: '#141414',
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
