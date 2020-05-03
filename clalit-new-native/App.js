import React from 'react';
import { View } from 'react-native';
import Login from './components/login.component';

import styles from './style/root.style';

export default function App() {
  return (
    <View style={styles.main}>
      <Login />
    </View>
  );
}
