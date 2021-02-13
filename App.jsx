// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import LogInScreen from './src/screens/LogInScreen';
import MemoCreateScreen from './src/screens/MemoCreate';
import MemodetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import MemoListScreen from './src/screens/MemoListScreen';
import SignUpScreen from './src/screens/SignUpScreen';
// import MemoListScreen from './src/screens/MemoListScreen';

export default function App() {
  return (
    <MemoListScreen />
    // <MemodetailScreen />
    // <MemoEditScreen />
    // <MemoCreateScreen />
    // <LogInScreen />
    // <SignUpScreen />
  );
}
