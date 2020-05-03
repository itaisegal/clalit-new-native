import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, View } from 'react-native';

export default function Background() {
  return (
    <View
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <LinearGradient
        colors={['transparent', '#ceefe3']}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        }}
        start={{ x: 0.6, y: 0.2 }}
        end={{ x: 1, y: 0 }}
      />
      <LinearGradient
        colors={['#cceffc', 'transparent']}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          top: 0,
        }}
        start={{ x: 0, y: .9 }}
        end={{ x: 0.4, y: 0.6 }}
      />
    </View>
  );
}
