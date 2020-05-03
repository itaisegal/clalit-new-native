import React from 'react';
import { Text, View } from 'react-native';
import Background from './background.component';
import styles from '../style/root.style';
import Logo from '../assets/logo-clalit-newsite.svg';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

export default function Login() {
  let [fontsLoaded] = useFonts({
    'OpenSansHebrew-Regular': '../assets/fonts/OpenSansHebrew-Regular.otf',
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <Background />
        <Logo width={300} height={100} />
        <Text style={{ fontFamily: 'Roboto' }}>בוקר טוב</Text>
      </View>
    );
  }
}
